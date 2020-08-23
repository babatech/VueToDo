import Vue from 'vue'
import Task from '@/components/Task'

describe('Task.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Task)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.card-title').textContent)
      .toEqual('New Task')
  })
})
