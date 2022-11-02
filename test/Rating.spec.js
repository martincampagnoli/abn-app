import { mount } from '@vue/test-utils'
import Rating from '@/components/Rating.vue'

describe('Rating', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Rating)
    wrapper.setProps({ value: 3 })
    expect(wrapper.vm).toBeTruthy()
  })
})
