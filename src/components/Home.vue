<template>
  <div>
    <vue-header></vue-header>
    <div class="container">
      <h2>List of tasks</h2>
      <task-list v-if="list" v-bind:tasks="list"></task-list>
    </div>
  </div>
</template>

<script>
import vueHeader from './header'
import taskList from './List'
export default {
  name: 'Home',
  components: { vueHeader, taskList },
  data () {
    return {
      list: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.list = [
        {title: 'task1', time: new Date()},
        {title: 'task2', time: new Date()},
        {title: 'task3', time: new Date()},
        {title: 'task4', time: new Date()}]
    }, 3000)
  },
  methods: {}
}
</script>

<style>
.container{
  background: #f9f9f9;
  min-height: 100%;
}
</style>
