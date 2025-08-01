# Changelog

## v0.18.0

- Remove `eslint-config`

## v0.17.0

- Rework `BAlert` component, remove position args
- Remove `BFlex` component
- Remove `BSubheader` component
- Remove `content` and `hideEmpty` properties from `BBadge`

## v0.16.0

- Simplify `BForm` component structure and add button slot
- Remove components `BFormFieldset`, `BFormGroup`, `BFormHelpline`, `BFormInput`, `BFormItem`, `BFormLabel`, `BFormLegend`, `BFormSelect` and `BFormTextarea`. Components for replacement do already exist.
- `BAlert` component reworked, added position option ('block', 'top', 'bottom', 'topleft', 'topright', 'bottomleft', 'bottomright').
- Removed `BToast` component, use `BAlert` instead.
- Enhanced `BSlider` with arrows
- Improved color contrast
- Simplified `BDivider` component by removing size prop and related styles
- `BSubheader` component is deprecated
- `BFlex` component is deprecated
- The label property in `BSwitch` is now a required.
- Removed ripple effect from `BButton`

## v0.15.0

- Refactor `BList`
- Remove reference font size, browser is now the reference
- Remove `BDropdownDivider` component
- Add `BFieldset` component
- New components `BInput`, `BEditor`, `BTextarea` and `BSelect`
- Remove the `elevated` prop from `BAlert`
- Remove `BComment` component

## v0.14.0

- Refactor `BBadge` and remove `BChip`
- `BList` refactoring

## v0.13.0

- `BIcon` component removed, use `BMaterialIcon` instead <https://github.com/abaldeweg/ui/blob/main/packages/%40baldeweg/docu/components.md#bmaterialicon>
- `useLocale` removed, use unhead instead, e.g. `htmlAttrs: { lang: navigator.language }`
- remove `useRequest`, include it by yourself instead <https://github.com/abaldeweg/ui/blob/636ea240c5fb457387328ac939ae2e34cf1a3597/packages/%40baldeweg/ui/src/composables/useRequest.js>
- remove `useToast`, include it by yourself instead <https://github.com/abaldeweg/ui/blob/636ea240c5fb457387328ac939ae2e34cf1a3597/packages/%40baldeweg/ui/src/composables/useToast.js>
- `BDialog`, `BModal` and `BPanel` use modelValue instead of e.g. `visible` prop

## v0.12.0

- Locale can be set local or global in the `useLocale` composable
- Added documentation for composables
- Remove `Teleport` component from `BPanel`
- `BBadge` allows setting the badge left or right
- `useTitle` composable removed, use @unhead/vue instead <https://unhead.unjs.io/setup/vue/installation>

## v0.11.0

- `BSearch` has three new attributes: `resetLabel`, `filterLabel`, `searchLabel`
- New component `BMaterialIcon`

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|size |Number|24||
|color |String|||String (e.g. hex code, custom properties)
|hover |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|

## v0.10.0

- In BSearch its possible to hide the reset button
- Redesign BAlert <https://github.com/abaldeweg/ui/blob/main/packages/%40baldeweg/ui/docu/components.md#balert>
  - 3 new CSS vars for the blue info alerts
- Rework tooltips component

## v0.9.0

- Use `prefer-color-scheme`, remove `.dark` class <https://github.com/abaldeweg/ui/blob/main/packages/%40baldeweg/ui/src/components/BApp/BApp.vue>
- Remove `useColorScheme` composable

## v0.8.0

- template-vue is now part of this project
- Loading locales was revisited <https://github.com/abaldeweg/ui/blob/main/packages/%40baldeweg/template-vue/src/i18n.js>
- Remove $t from unit.setup.js

## v0.7.0

- Rename `canHide` to `hidable` in BAlert
- Revamp `BFlex`, Remove `BFlexRow` and `BFlexCol`
- Remove subgroup and meta in BList
- Remove `useTheme`, use `useColorScheme` instead
- Remove msw
- Fix scrolling for tabs

## v0.6.0

- Add `BNav`
- Show the label after the switch
- Changed some icons

## v0.5.0

- Add arrow icons
- Revamp of the BCard component
- Allow the composition API for vue-i18n.

```js
const i18n = VueI18n.createI18n({
  legacy: false,
  allowComposition: true
})
```

```js
import { useI18n } from 'vue-i18n'
```

- Remove `useJWTAuth` and `useGCPAuth` composables

<https://github.com/abaldeweg/ui/tree/v0.4.2/packages/%40baldeweg/ui/src/composables>

## v0.4.0

- `useGCPAuth` improved

```js
import { useRequest, useGCPAuth } from '@baldeweg/ui'

const { config, setAuthHeader } = useRequest()
config.value.baseURL = import.meta.env.VITE_API

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
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

- Env var `VITE_I18N_LOCALE` is deprecated
- The `useTheme` composable is deprecated
- New `useColorScheme` composable. You can set dark mode with the dark attribute. After that a `.dark` class will be set to the `html` element.
- New `useJWTAuth` composable. Make sure to set the base url for request.

```js
import { useRequest, useJWTAuth } from '@baldeweg/ui'

const { config, setAuthHeader } = useRequest()
config.value.baseURL = import.meta.env.VITE_API

const { token, watchToken } = useJWTAuth()

setAuthHeader(token.value)

watchToken()
```

- New `useGCPAuth` composable. Set the firebase config while calling the composable.

```js
import { useGCPAuth } from '../useGCPAuth.js'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
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

config.value.baseURL = import.meta.env.VITE_API
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

- [web-demo] Env var `VITE_I18N_FALLBACK_LOCALE` is deprecated and can be removed

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
