# @baldeweg/ui

UI Components

## Get Started

Install the package with the following command.

```shell
pnpm add @baldeweg/ui
```

Download the Material Icons Font: <https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300&display=swap>

Find all icons on <https://fonts.google.com/icons>.

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

[Components](https://github.com/abaldeweg/ui/blob/main/packages/%40baldeweg/ui/components.md)

## Utility Classes

Add the plugin to your Vite config:

```js
import tailwindcss from '@tailwindcss/vite'

plugins: [
  tailwindcss(),
]
```

All Tailwind utility classes are prefixed with `u:`.

### Colors

- `u:text-primary-100`, `u:bg-primary-100`, `u:border-primary-100`

### Typography

- `u:text-xs`, `u:text-s`, `u:text-m`, `u:text-l`, `u:text-xl`
- `u:font-normal`, `u:font-medium`, `u:font-semibold`, `u:font-bold`

### Border

- `u:border`, `u:border-number`, `u:border-t`, `u:border-b`, `u:border-l`, `u:border-r`

Use any number for the border width, e.g. `u:border-1` for a 1px border.

### Border Radius

- `u:rounded-xs`, `u:rounded-s`, `u:rounded-m`, `u:rounded-l`, `u:rounded-xl`, `u:rounded-full`

### Spacing — Margin

- `u:m-0`, `u:m-5`, `u:m-10`, `u:m-20`, `u:m-40`, `u:m-auto`

Direction variants for margin:

- `m` — all sides
- `mx` — horizontal (left + right)
- `my` — vertical (top + bottom)
- `mt` / `mr` / `mb` / `ml` — top / right / bottom / left respectively

Examples:

`u:mx-10` — sets left and right margins to the `10` size
`u:my-5` — sets top and bottom margins to the `5` size
`u:mt-20` — sets top margin only to the `20` size

### Spacing — Padding (px, py, pt, pr, pb, pl)

- `u:p-0`, `u:p-5`, `u:p-10`, `u:p-20`, `u:p-40`

Direction variants for padding:

- `p` — all sides
- `px` — horizontal (left + right)
- `py` — vertical (top + bottom)
- `pt` / `pr` / `pb` / `pl` — top / right / bottom / left respectively

Examples:

`u:px-10` — sets left and right padding to the `10` size
`u:py-5` — sets top and bottom padding to the `5` size
`u:pt-20` — sets top padding only to the `20` size

### Spacing — Gap

- `u:gap-0`, `u:gap-5`, `u:gap-10`, `u:gap-20`, `u:gap-40`

### Display

- `u:block`, `u:inline-block`, `u:inline`, `u:hidden`, `u:flex`, `u:inline-flex`, `u:grid`

### Flexbox

- `u:flex-row`, `u:flex-col`, `u:flex-wrap`, `u:flex-nowrap`, `u:items-start`, `u:items-center`, `u:items-end`,`u:items-stretch`, `u:justify-start`, `u:justify-center`, `u:justify-end`, `u:justify-between`

### Grid

- `u:grid-cols-1`, `u:grid-cols-2`, `u:grid-cols-3`, `u:grid-cols-4`, `u:grid-cols-6`, `u:grid-cols-12`

### Size

- `u:w-full`, `u:w-auto`
- `u:h-full`, `u:h-auto`, `u:h-screen`

### Misc

- `u:opacity-0`, `u:opacity-50`, `u:opacity-100`
