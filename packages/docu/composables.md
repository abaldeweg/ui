# Composables

You can import composables from `@baldeweg/ui`.

Example

```js
import { useLocale } from '@baldeweg/ui'
```

Currently available composables:

- useToast
- useTheme
- useTitle
- useLocale
- useRequest
- useColorScheme

## Example for toast

```js
import { useToast } from '@baldeweg/ui'
```

Example

```html
<b-toast v-if="current" :type="current.type" :visible="true">
  {{ current.body }}
</b-toast>

<button
  @click="
    add({
      type: 'success',
      body: 'Success',
    })
  "
>
  Success
</button>
```
