import { mount } from '@vue/test-utils'
import id from '@/pages/show/_id.vue'

describe('id', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(id)
    expect(wrapper.vm).toBeTruthy()
  })
})
