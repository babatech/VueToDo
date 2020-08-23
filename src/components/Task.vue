<template>
  <div>
    <vue-header></vue-header>
    <div class="container">
      <div class="row justify-content-md-center mt-50" v-if="task">
        <div class="col-md-6">
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
                    <label for="taskDateTime">DateTime</label>
                  </div>
                  <div class="form-group col-md-8">
                    <VueCtkDateTimePicker id="taskDateTime" v-model="task.datetime" v-bind:min-date="new Date().toISOString()" />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">{{ id ? 'Update': 'Create'}}</button>
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
      if (!this.id) {
        this.task.createdAt = new Date().toISOString()
      }
      this.task.updateAt = new Date().toISOString()
      console.log(this.task)
    }
  }
}
</script>

<style>
.mt-50{
  margin-top: 50px;
}
</style>
