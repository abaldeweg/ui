# Changelog

## v0.5.0

- Add arrow icons

## v0.4.0

- `useGCPAuth` improved

```js
import { useRequest, useGCPAuth } from '@baldeweg/ui'

const { config, setAuthHeader } = useRequest()
config.value.baseURL = import.meta.env.VUE_APP_API

const firebaseConfig = {
  apiKey: import.meta.env.VUE_APP_API_KEY,
  authDomain: import.meta.env.VUE_APP_AUTH_DOMAIN,
}

const { login, token } = useGCPAuth(firebaseConfig)

setAuthHeader(token.value)
```

- `type` property in `b-masthead-item` renamed to `position`.
- `b-tabs` is scrollable horizontally

## v0.3.0

- [ui] Fix spacing in BCode
- [eslint-config] Add package `@baldeweg/eslint-config` and extend the config.

Example

```js
// .eslintrc.cjs

module.exports = {
  root: true,
  extends: ['@baldeweg/eslint-config'],
}
```

- [web-demo] Using the locale given by browser automatically. Please change filenames accordingly.

```js
// i18n.js

import { createI18n } from 'vue-i18n'
import en from '@/../locales/en.json'
import de from '@/../locales/de.json'

export default createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: {
    en,
    de,
  },
})
```

- Env var `VUE_APP_I18N_LOCALE` is deprecated
- The `useTheme` composable is deprecated
- New `useColorScheme` composable. You can set dark mode with the dark attribute. After that a `.dark` class will be set to the `html` element.
- New `useJWTAuth` composable. Make sure to set the base url for request.

```js
import { useRequest, useJWTAuth } from '@baldeweg/ui'

const { config, setAuthHeader } = useRequest()
config.value.baseURL = import.meta.env.VUE_APP_API

const { token, watchToken } = useJWTAuth()

setAuthHeader(token.value)

watchToken()
```

- New `useGCPAuth` composable. Set the firebase config while calling the composable.

```js
import { useGCPAuth } from '../useGCPAuth.js'

const firebaseConfig = {
  apiKey: import.meta.env.VUE_APP_API_KEY,
  authDomain: import.meta.env.VUE_APP_AUTH_DOMAIN,
}

const { login } = useGCPAuth(firebaseConfig)
```

- Remove BDrawer, use BPanel instead

## v0.2.0

- [ui] BModal can be closed with esc key
- [ui] Rename BHorizontalList to BSlider and BHorizontalListItem to BSliderItem
- [ui] Replace `import { request } from '@/api'` with the new composable:

```js
import { useRequest } from '@baldeweg/ui'
import Cookies from 'js-cookie'

const { config, setAuthHeader, request } = useRequest()

config.value.baseURL = import.meta.env.VUE_APP_API
setAuthHeader(Cookies.get('token'))
```

- [eslint-config] Recommended lint rules for imports

```js
yarn add eslint-plugin-import -D

// .eslintrc.cjs

plugins: ['import'],
rules: {
  'import/first': 'error',
  'import/order': 'error',
  'import/newline-after-import': ['error', { count: 1 }],
}
```

- [web-demo] Env var `VUE_APP_I18N_FALLBACK_LOCALE` is deprecated and can be removed

## Migrating from @baldeweg/components

- Remove @baldeweg/components
- Install @baldeweg/ui
- For custom `<title>`'s use `useTitle` composable

```js
import { useTitle } from '@baldeweg/ui'

useTitle({ title: 'Title' })
```

- Theming needs to be activated

```js
import { useTheme } from '@baldeweg/ui'

useTheme()
```

- Locale needs to be activated

```js
import { useLocale } from '@baldeweg/ui'

useLocale()
```

- BToast does not expose a `show` method
