import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import Logo from '../Logo'

const factory = () => {
  return shallowMount(Logo, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
}

describe('Logo', () => {
  test('mounts properly', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
