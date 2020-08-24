import Vue from 'vue'
import taskList from '@/components/List'

describe('List.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(taskList)
    const vm = new Constructor().$mount()
    console.log(vm.$el.querySelector('.no-task-info').textContent)
    expect(vm.$el.querySelector('.loading-box').textContent)
      .toEqual('Loading tasks')
    expect(vm.$el.querySelector('.no-task-info').textContent)
        .toEqual('No upcoming task')
  })
})
