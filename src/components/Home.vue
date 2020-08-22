<template>
  <div>
    <vue-header></vue-header>
    <div class="container">
      <h2>List of tasks</h2>
    </div>
  </div>
</template>

<script>
import vueHeader from './header'
export default {
  name: 'Home',
  components: { vueHeader },
  data () {
    return {
      list: []
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style>
.container{
  background: #f9f9f9;
  min-height: 100%;
}
</style>
