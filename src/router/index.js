import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/add',
      name: 'Add new task',
      component: Task
    },
    {
      path: '/edit/:id',
      name: 'Edit task',
      component: Task
    },
    {
      path: '',
      name: 'To Do App',
      component: Home
    }
  ]
})
