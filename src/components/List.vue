<template>
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
        <th scope="row">{{index}}</th>
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
</template>

<script>
import taskService from '@/services/task.service'
export default {
  name: 'taskList',
  data () {
    return {
      tasks: []
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
    }
  }
}
</script>

<style>
</style>
