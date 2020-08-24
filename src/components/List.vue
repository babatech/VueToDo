<template>
  <div>
    <div v-if="tasks">
      <div class="row">
        <form class="col-md-8 form-inline"  @submit="search">
          <div class="form-row align-items-center">
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">Search tasks</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">Search tasks</div>
                </div>
                <input type="text" v-model="searchText" class="form-control" id="inlineFormInputGroup" placeholder="Buy">
              </div>
            </div>
            <div class="col-auto">
              <div class="form-check mb-2">
                <input class="form-check-input" v-model="searchType"  type="checkbox" id="autoSizingCheck">
                <label class="form-check-label" for="autoSizingCheck">
                  Search title only
                </label>
              </div>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-2">Search</button>
            </div>
          </div>
        </form>
          <div class="col-md-4 ta-r">
            <input class="form-check-input" v-model="hideCompleteTask"  type="checkbox" id="hideCompleteTaskCheck">
            <label class="form-check-label" for="hideCompleteTaskCheck">
              Hide complete task
            </label>
          </div>
      </div>
      <table class="table table-dark" v-if="tasks.length>0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" class="task-title">Task title</th>
            <th scope="col">Due date</th>
            <th scope="col">State</th>
            <th scope="col"><font-awesome-icon :icon="['fas', 'tools']" /></th>
          </tr>
        </thead>
        <tbody >
          <template v-for="(task, index) in tasks ">
            <tr class="task" v-show="!hideCompleteTask || (hideCompleteTask && !task.state) " :key="index" :class="task.state ? 'complete' : 'pending'">
              <th scope="row">{{index + 1}}</th>
              <td><a class="task-text" title="Click here to open task" v-bind:href="'view/'+task.id">{{task.title}}</a></td>
              <td><a class="task-text" title="Click here to open task" v-bind:href="'view/'+task.id">{{task.datetime}}</a></td>
              <td>
                <a class="mark-btn" @click="changeState(task)" :title="'Click hee to mark this task as ' + (task.state ? 'pending' : 'complete')">
                <font-awesome-icon :icon="['fas', task.state ? 'check-square' : 'clipboard-list']" /> {{task.state ? 'Complete': 'Pending'}}
                </a>
              </td>
              <td>
                <a title="Click here to open task" v-bind:href="'view/'+task.id"><font-awesome-icon :icon="['fas', 'book-open']" /></a>
                <a title="Click here to edit task" v-bind:href="'edit/'+task.id"><font-awesome-icon :icon="['fas', 'edit']" /></a>
                <a title="Click here to delete task" @click="deleteTask(task.id)"><font-awesome-icon :icon="['fas', 'trash-alt']" /></a>
              </td>
            </tr>

          </template>
        </tbody>
      </table>
      <div v-if="tasks.length===0">
        <div class="alert alert-info" role="alert">
          <span v-if="todayOnly">
            No Task for today
          </span>
          <span v-if="!todayOnly">
            No upcoming task
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import taskService from '@/services/task.service'
export default {
  name: 'taskList',
  props: [ 'todayOnly' ],
  data () {
    return {
      tasks: [],
      searchText: '',
      date: new Date(),
      hideCompleteTask: false,
      searchType: true
    }
  },
  mounted () {
    if (!this.todayOnly) {
      this.date.setDate(this.date.getDate() + 1)
    }
    this.getTasks()
  },
  methods: {
    getTasks (queryParam = {}) {
      if (this.todayOnly) {
        queryParam.datetime = this.date.toISOString().substring(0, 10)
      } else {
        queryParam.datetime_gte = this.date.toISOString().substring(0, 10)
      }
      taskService.getAllTasks(queryParam).then(res => {
        this.tasks = res.data
      })
    },
    changeState (task) {
      if (task) {
        task.state = !task.state
        taskService.updateTask(task.id, task).then(res => { this.getTasks() })
      }
    },
    deleteTask (taskID) {
      if (taskID) {
        if (confirm('Do you want to delete this task')) {
          taskService.deleteTask(taskID).then(res => { this.getTasks() })
        }
      }
    },
    search: function (e) {
      e.preventDefault()
      let param = {}
      if (this.searchText) {
        if (this.searchType) {
          param.title_like = this.searchText
        } else {
          param.q = this.searchText
        }
      }
      this.getTasks(param)
    }
  }
}
</script>

<style>
.task.complete a.task-text{
  text-decoration: line-through;
}
.task a{
  cursor: pointer;
  color: white;
}
.ta-r{
  text-align: right;
}
</style>
