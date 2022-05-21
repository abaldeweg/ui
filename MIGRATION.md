# Migration

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
