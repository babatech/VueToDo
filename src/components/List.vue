<template>
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Task</th>
        <th scope="col">due</th>
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
          <a v-bind:href="'delete/'+task.id"><font-awesome-icon :icon="['fas', 'trash-alt']" /></a>
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
    taskService.getAllTasks().then(res => {
      this.tasks = res.data
      console.log(this.tasks)
    })
  },
  methods: {}
}
</script>

<style>
</style>
