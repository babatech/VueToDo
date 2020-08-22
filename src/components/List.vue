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
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'taskList',
  props: [ 'taskList' ],
  data () {
    return {
      task: {}
    }
  },
  mounted () {
    this.$set(this, 'taskList', this.taskList)
  },
  methods: {}
}
</script>

<style>
</style>
