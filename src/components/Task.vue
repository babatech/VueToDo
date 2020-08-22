<template>
<div>

</div>
</template>

<script>
import TaskModel from '@/model/Task'
export default {
  name: 'Task',
  data () {
    return {
      task: null,
      id: null
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.id = this.$route.params.id
    } else {
      this.task = new TaskModel()
    }
  },
  methods: {}
}
</script>

<style>
</style>
