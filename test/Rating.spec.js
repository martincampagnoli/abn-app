import { mount } from '@vue/test-utils'
import Rating from '@/components/Rating.vue'

describe('Rating', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Rating)
    wrapper.setProps({ value: 3 })
    expect(wrapper.vm).toBeTruthy()
  })
  test('should render stars based on rating > 0', () => {
    const wrapper = mount(Rating)
    wrapper.setProps({ value: 3 })
    expect(wrapper.find('li').exists())
  })
  test('should not render stars based on rating 0', () => {
    const wrapper = mount(Rating)
    wrapper.setProps({ value: 0 })
    expect(wrapper.find('li').exists()).toBe(false)
  })
})
