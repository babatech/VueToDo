<template>
  <div>
    <div>
      <form class="form-inline"  @submit="search">
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
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" class="task-title">Task title</th>
          <th scope="col">Due date</th>
          <th scope="col"><font-awesome-icon :icon="['fas', 'tools']" /></th>
        </tr>
      </thead>
      <tbody v-if="tasks.length>0">
        <tr v-for="(task, index) in tasks " :key="index">
          <th scope="row">{{index + 1}}</th>
          <td><a v-bind:href="'view/'+task.id">{{task.title}}</a></td>
          <td><a v-bind:href="'view/'+task.id">{{task.datetime}}</a></td>
          <td>
            <a v-bind:href="'view/'+task.id"><font-awesome-icon :icon="['fas', 'book-open']" /></a>
            <a v-bind:href="'edit/'+task.id"><font-awesome-icon :icon="['fas', 'edit']" /></a>
            <a @click="deleteTask(task.id)"><font-awesome-icon :icon="['fas', 'trash-alt']" /></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import taskService from '@/services/task.service'
export default {
  name: 'taskList',
  props: [ 'tomorrow' ],
  data () {
    return {
      tasks: [],
      searchText: '',
      searchType: true
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    getTasks (queryParam = {}) {
      taskService.getAllTasks(queryParam).then(res => {
        this.tasks = res.data
      })
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
      if (this.searchText) {
        let param = {}
        if (this.searchType) {
          param.title_like = this.searchText
        } else {
          param.q = this.searchText
        }
        this.getTasks(param)
      }
    }
  }
}
</script>

<style>
</style>
