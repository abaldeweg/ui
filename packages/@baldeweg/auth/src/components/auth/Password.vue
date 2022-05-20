<template>
  <details>
    <summary>{{ $t('changePassword') }}</summary>

    <b-form @submit.prevent="auth.changePassword">
      <b-form-group>
        <b-form-item>
          <b-form-label for="password">
            {{ $t('password') }}
          </b-form-label>
        </b-form-item>
        <b-form-item>
          <b-form-input
            type="password"
            id="password"
            v-model="auth.state.password"
          />
        </b-form-item>
      </b-form-group>

      <b-form-group buttons>
        <b-form-item>
          <b-button design="primary">{{ $t('save') }}</b-button>
        </b-form-item>
      </b-form-group>
    </b-form>

    <b-toast type="success" ref="passwordSuccessful">
      <p>{{ $t('passwordSuccessful') }}</p>
    </b-toast>

    <b-toast type="error" ref="passwordError">
      <p>{{ $t('passwordError') }}</p>
    </b-toast>
  </details>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import useAuth from '@/composables/useAuth'

export default {
  name: 'auth-password',
  setup() {
    const passwordSuccessful = ref(null)
    const passwordError = ref(null)

    const auth = useAuth()

    watch(
      () => auth.state.passwordSuccessful,
      () => {
        passwordSuccessful.value.show()
        auth.state.passwordSuccessful = false
      }
    )

    watch(
      () => auth.state.passwordError,
      () => {
        passwordError.value.show()
        auth.state.passwordError = false
      }
    )

    return {
      passwordSuccessful,
      passwordError,
      auth,
    }
  },
}
</script>
