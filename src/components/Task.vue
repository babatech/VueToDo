<template>
  <div>
    <vue-header></vue-header>
    <div class="container">
      <div class="row justify-content-md-center mt-50" v-if="task">
        <div class="col-md-7">
          <div class="card">
            <h4 class="card-title mt-50">{{ id ? 'Edit': 'New'}} Task</h4>
            <div class="card-body">
              <form @submit="checkForm">
                <div class="row">
                  <div class="col-md-4">
                    <label for="taskTitle">Title</label>
                  </div>
                  <div class="form-group col-md-8">
                    <input type="text" class="form-control" v-model="task.title" id="taskTitle" placeholder="buy grocery">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <label for="taskDescription">Description</label>
                  </div>
                  <div class="form-group col-md-8">
                    <textarea class="form-control" v-model="task.description" id="taskDescription" placeholder="Enter task description here"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <label for="taskDateTime">Due Date</label>
                  </div>
                  <div class="form-group col-md-8">
                    <VueCtkDateTimePicker
                    id="taskDateTime"
                    label="Select Date"
                    v-model="task.datetime"
                    v-bind:only-date="true"
                    format="YYYY-MM-DD"
                    formatted="ll"
                    v-bind:min-date="new Date().toISOString()" />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">{{ id ? 'Update': 'Create'}}</button>
                <button type="button" class="btn btn-secondary" @click="redirectTo()">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueHeader from './header'
import TaskModel from '@/models/Task.model'
import taskService from '@/services/task.service'
export default {
  name: 'Task',
  components: { vueHeader },
  data () {
    return {
      task: null,
      id: null,
      errors: []
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.id = this.$route.params.id
      taskService.getTask(this.id).then(res => {
        this.task = res.data
      })
    } else {
      this.task = new TaskModel()
    }
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault()
      this.errors = []
      if (!this.task.title) {
        this.errors.push('Title required.')
      }
      if (!this.task.datetime) {
        this.errors.push('Date required.')
      }
      if (this.errors.length > 0) {
        return
      }
      this.task.updateAt = new Date().toISOString()
      if (!this.id) {
        this.task.createdAt = new Date().toISOString()
        taskService.addTask(this.task).then(res => {
          this.redirectTo()
        })
      } else {
        taskService.updateTask(this.id, this.task).then(res => {
          this.redirectTo()
        })
      }
    },
    redirectTo (path = '/') {
      this.$router.push({path: path})
    }
  }
}
</script>

<style>
.mt-50{
  margin-top: 50px;
}
</style>
