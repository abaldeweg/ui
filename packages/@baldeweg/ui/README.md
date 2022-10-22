# @baldeweg/ui

UI Components

## Requirements

- NodeJS
- Yarn

## Get Started

Install the package with the following command.

```shell
yarn add @baldeweg/ui
```

Then you can add this to your `main.js`.

```js
import { createUi } from 'ui'
import '@baldeweg/ui/styles'

const ui = createUi()

app.use(ui)
```

Example Layout

```js
<BApp id="app">
  <BContainer size="m">
    <p>Content</p>
  </BContainer>
</BApp>
```

## Composables

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
- useJWTAuth (requires `js-cookie`)
- useGCPAuth

## Components

[Components](https://github.com/abaldeweg/ui/blob/main/packages/docu/components.md)

Now, you can choose from the components.

### b-app

This component defines some vars, which you can overwrite.

```css
html {
  /* Primary */
  --color-primary-10: #0000ff;
  --color-primary-05: #8b8bff;
  --color-primary-00: #e7e7ff;
  /* Neutral */
  --color-neutral-10: #333333;
  --color-neutral-08: #4f4f4f;
  --color-neutral-06: #828282;
  --color-neutral-04: #b8b8b8;
  --color-neutral-02: #cbcbcb;
  --color-neutral-00: #ffffff;
  /* Accent */
  --color-accent-red-10: #ff0000;
  --color-accent-red-05: #ff7373;
  --color-accent-red-00: #ffe7e7;
  --color-accent-green-10: #00ff00;
  --color-accent-green-05: #8bff8b;
  --color-accent-green-00: #e7ffe7;
  --color-accent-yellow-10: #f1d302;
  --color-accent-yellow-05: #f8eb8c;
  --color-accent-yellow-00: #fdfbe8;
  /* Font */
  --font-sans: 'Open Sans', 'Liberation Sans', 'Helvetica Neue', Arial;
  --font-serif: Georgia, Constantia, 'DejaVu Serif', 'Times New Roman';
  --font-monospace: Consolas, 'Liberation Mono', 'Lucida Console';
  /* Misc */
  --masthead-top-height: 50px;
  --bottom-nav-height: 60px;
}
```

### toast

```js
import { useToast } from '@baldeweg/ui'
```

Example

```html
<b-toast v-if="current" :type="current.type" :visible="true">{{
  current.body
}}</b-toast>

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

### b-nav

Example

```html
<BNav
    :nav="[
      {
        route: { name: 'index', params: { list: 'inbox' } },
        title: 'Home',
      },
      {
        route: { name: 'index', params: { list: 'inbox' } },
        title: 'Home',
        badge: '5',
        icon: {
          type: 'icon',
          value: 'hamburger',
        },
      },
      {
        route: 'http://shop.localhost',
        title: 'Shop',
        badge: '1',
        icon: {
          type: 'dot',
          value: '#ff0000',
        },
      },
    ]"
  />
```
