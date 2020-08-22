<template>
  <div>
    <vue-header></vue-header>
    <div class="container">
      <h2>List of tasks</h2>
      <task-list v-if="list" task-list="list"></task-list>
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
      this.list = []
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
