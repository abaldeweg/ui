import { config } from '@vue/test-utils'

config.global.mocks = {
  t: (k) => k,
}
