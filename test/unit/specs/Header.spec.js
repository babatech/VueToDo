import Vue from 'vue'
import vueHeader from '@/components/header'

describe('header.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(vueHeader)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.navbar-brand').textContent)
      .toEqual('Shahab Shakoor')
    expect(vm.$el.querySelector('.add-task-link').textContent)
      .toEqual('Add Task')
  })
})
