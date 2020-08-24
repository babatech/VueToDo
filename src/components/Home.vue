<template>
  <div>
    <vue-header></vue-header>
    <div class="container">
      <h2 class="home-title">Welcome to To Do App</h2>
      <br>
      <h3>Today tasks</h3>
      <task-list :todayOnly="true"></task-list>
      <hr>
      <h3>Coming tasks</h3>
      <task-list ></task-list>
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
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style>
.container{
  background: #fff !important;
  min-height: 100%;
}
</style>
