<template>
  <b-form @submit.prevent="auth.login">
    <!-- username -->
    <b-form-group>
      <b-form-item>
        <b-form-label for="username">{{ $t('username') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="text"
          id="username"
          :placeholder="$t('username')"
          v-model="auth.state.username"
          autofocus
        />
      </b-form-item>
    </b-form-group>

    <!-- password -->
    <b-form-group>
      <b-form-item>
        <b-form-label for="password">{{ $t('password') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="password"
          id="password"
          :placeholder="$t('password')"
          v-model="auth.state.password"
        />
      </b-form-item>
    </b-form-group>

    <!-- buttons -->
    <b-form-group buttons>
      <b-form-item>
        <b-button design="primary_wide" v-if="!auth.state.isLoggingIn">
          {{ $t('login') }}
        </b-button>
        <b-button design="outline_wide" v-if="auth.state.isLoggingIn">
          <b-spinner size="s" :style="{ margin: 'auto' }" />
        </b-button>
      </b-form-item>
    </b-form-group>

    <b-toast type="error" ref="wrongCredentials">
      <p>{{ $t('wrongCredentials') }}</p>
    </b-toast>
  </b-form>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import useAuth from '@/composables/useAuth'

export default {
  name: 'auth-login',
  setup() {
    const wrongCredentials = ref(null)

    const auth = useAuth()

    watch(
      () => auth.state.wrongCredentials,
      () => {
        wrongCredentials.value.show()
        auth.state.wrongCredentials = false
      }
    )

    return { wrongCredentials, auth }
  },
}
</script>
