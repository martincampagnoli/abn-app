import { mount } from '@vue/test-utils'
import ShowList from '@/components/ShowList.vue'

describe('ShowList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ShowList)
    expect(wrapper.vm).toBeTruthy()
  })
})
