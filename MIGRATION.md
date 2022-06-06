# Migration

## v0.2.0

- [ui] Rename BHorizontalList to BSlider and BHorizontalListItem to BSliderItem
- [ui] Replace `import { request } from '@/api'` with the new composable:

```js
import { useRequest } from '@baldeweg/ui'
import Cookies from 'js-cookie'

const { setAuthHeader, request } = useRequest()

config.value.baseURL = import.meta.env.VUE_APP_API
setAuthHeader(Cookies.get('token'))
```

- [ui] Recommended lint rules for imports

```js
yarn add eslint-plugin-import

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
