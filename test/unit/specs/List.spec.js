import Vue from 'vue'
import taskList from '@/components/List'

describe('List.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(taskList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.loading-box').textContent)
      .toEqual('Loading tasks')
  })
})
