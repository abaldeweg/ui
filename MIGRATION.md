# Migration

## Migrating from @baldeweg/components

- Remove @baldeweg/components
- Install @baldeweg/ui
- For custom `<title>`'s use `useTitle` composable
- Theming needs to be activated

```js
import { useTheme } from '@baldeweg/ui/composables/useTheme'

useTheme()
```

- Locale needs to be activated

```js
import { useLocale } from '@baldeweg/ui/composables/useLocale'

useLocale()
```
