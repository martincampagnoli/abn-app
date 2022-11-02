import { mount } from '@vue/test-utils'
import ShowDetails from '@/components/ShowDetails.vue'

describe('ShowDetails', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ShowDetails)
    expect(wrapper.vm).toBeTruthy()
  })
})
