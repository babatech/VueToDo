<template>
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Task</th>
        <th scope="col">Time</th>
        <th scope="col"><font-awesome-icon :icon="['fas', 'tools']" /></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, index) in tasks " :key="index">
        <th scope="row">1</th>
        <td>{{task.title}}</td>
        <td>{{task.time}}</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'taskList',
  props: [ 'tasks' ],
  data () {
    return {}
  },
  mounted () {
    console.log(this.tasks)
  },
  methods: {}
}
</script>

<style>
</style>
