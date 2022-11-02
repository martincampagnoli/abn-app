import { mount } from '@vue/test-utils'
import Show from '@/components/Show.vue'

describe('Show', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Show)
    expect(wrapper.vm).toBeTruthy()
  })
})
