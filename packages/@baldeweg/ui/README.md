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

Download the Material Icons Font: <https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200>

Find all icons on <https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200>.

Then you can add this to your `main.js`.

```js
import { createUi } from '@baldeweg/ui'
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

The defaults for CSS properties can be overridden.

```css
html {
  /* Primary Colors */
  --color-primary-10: #0000ff;
  --color-primary-05: #8b8bff;
  --color-primary-00: #e7e7ff;
  /* Neutral Colors */
  --color-neutral-10: #333333;
  --color-neutral-08: #4f4f4f;
  --color-neutral-06: #828282;
  --color-neutral-04: #b8b8b8;
  --color-neutral-02: #cbcbcb;
  --color-neutral-00: #ffffff;
  /* Accent Colors */
  --color-accent-red-10: #ff0000;
  --color-accent-red-05: #ff7373;
  --color-accent-red-00: #ffe7e7;
  --color-accent-green-10: #00ff00;
  --color-accent-green-05: #8bff8b;
  --color-accent-green-00: #e7ffe7;
  --color-accent-yellow-10: #f1d302;
  --color-accent-yellow-05: #f8eb8c;
  --color-accent-yellow-00: #fdfbe8;
  /* Fonts */
  --font-sans: 'Open Sans', 'Liberation Sans', 'Helvetica Neue', Arial;
  --font-serif: Georgia, Constantia, 'DejaVu Serif', 'Times New Roman';
  --font-monospace: Consolas, 'Liberation Mono', 'Lucida Console';
  /* Misc */
  --masthead-top-height: 50px;
  --bottom-nav-height: 60px;
}
```

## Components

[Components](https://github.com/abaldeweg/ui/blob/main/packages/%40baldeweg/docu/components.md)

## Settings

```js
import { createUi } from './ui.js'

const ui = createUi()

app.use(ui, {})
```

```js
import { inject } from 'vue'

const options = inject("ui")
```
