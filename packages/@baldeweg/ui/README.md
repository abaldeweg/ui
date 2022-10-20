# @baldeweg/ui

UI Components

## Requirements

- NodeJS 16LTS
- Yarn

## Getting Started

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

Example Layout

```js
<BApp>
  <BContainer size="m">
    <p>Content</p>
  </BContainer>
</BApp>
```

Now, you can choose from the components.

## Components

### b-app

Slots

- default

Do not forget to set the attribute `id="app"` here, if not otherwise done.

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

### b-alert

Props

- type - neutral, error, warning, success - default: neutral
- canHide - Bool, default: false

Slots

- default

### b-button

Props

- design - primary, primary_danger, primary_wide, outline, outline_danger, outline_wide, text, text_danger (default: primary)
- ripple - Bool (default: false)

Slots

- default

Events

- click

### b-chip

Props

- hover - Bool, default: false

Slots

- default
- action

### b-code

Slots

- default

### b-comment

Props

- author - String (optional)
- date - String (optional)

Slots

- actions (optional)
- default

### b-container

Props

- size - l, m, s - (default l)
- align - left, right, center (default left)
- highlight - Boolean

Slots

- default

### b-dialog

Slots

- default
- actions

### b-divider

Props

- size - l, m, s, xs, (default l)

### b-dropdown

Props

- position - selector, mouse, bottom (default: selector)
- keep-open - Boolean (default: false)

Slots

- default
- selector

### b-dropdown-item

Props

- bold (optional) - bool, default: false
- no-hover (optional) - bool, default: false
- icon (optional) - all in b-icon allowed icons, default: null

Slots

- default

Events

- click

Example

```html
<b-dropdown position="mouse">
  <template #selector>
    <button>Dropdown</button>
  </template>
  <b-dropdown-item icon="bin" @click.prevent="action">Item</b-dropdown-item>
</b-dropdown>
```

### b-dropdown-divider

### b-form

Props

- no-margin - bool (default: false)

Slots

- default

Events

- submit

The form component is just a wrapper, you have to assign classes to your elements. Please omit the `<form>` element itself.

Example

```html
<div class="form_group">
  <div class="form_item">
    <label for="text" class="form_label">Text</label>
  </div>
  <div class="form_item">
    <input type="text" id="text" class="form_input" />
  </div>
</div>
```

### b-form-group

Props

- buttons - bool (default false)

Slots

- default

### b-form-item

Slots

- default

### b-form-input

Not applicable to checkbox and radio.

Props

- value
- no-styling - Bool (default false)
- event - Bool (default: false)
- focus - Bool (default: false)

Events

- input
- change

### b-form-select

Props

- value - String
- items - Array [{key: String, value: String}]
- item-key - String (default: key)
- item-value - String (default: value)
- focus - Bool (default: false)
- allow-empty - Bool (default: false)

Slots

- default

Events

- input
- change

### b-form-textarea

Props

- value
- focus - Bool (default: false)

Events

- input
- change
- click
- contextmenu

### b-form-label

Slots

- default

### b-form-fieldset

Slots

- default

### b-form-legend

Slots

- default

### b-form-helpline

Slots

- default

### b-icon

Props

- type - apps, bin, star, close, check, download, filter, hamburger, minus, pause, pencil, play, plus, profile, kebab, meatballs, moon, dollar, search, euro, cart, directory, file, clipboard
- size - int (default 25)
- no-hover - bool (default false)
- color - String (e.g. hex code custom properties)

### b-list

Props

- route - Object
- bold - Bool (default: false)
- divider - Bool (default: false)
- image-size - String (xs, s, m, l, xl)
- image-position - String (start, center, end), default: center
- actions-position - String (start, center, end), default: center
- reverse - Boolean, default: false
- disabled - Boolean, default: false
- active - Boolean, default: false
- subgroup-indent - Number, default: 20px

Slots

- title
- image
- options
- meta - deprecated, use subtitle
- subtitle
- subgroup

### b-masthead

Slots

- default

### b-masthead-item

Props

- position - String (start, center or end), Default: start

Slots

- default

### b-bottom-nav

Props

- title - String

Slots

- default

Events

- click
  - Mousevent

### b-bottom-nav-item

Items should be sized 35x35 pixel.

Slots

- default

### b-modal

Props

- width - Number, default: 600, defines the max-width property
- close-button - Boolean, default: true

Slots

- default
- title
- footer

Events

- close
  - type - String

If you use a form, consider wrapping the modal with it.

### b-scroll-to-bottom

Props

- width - int (default 0) - 0 results to full width, all values are pixel values
- height - int (default 0) - 0 results in 100vh minus masthead height, all values are pixel values

Slots

- default

### b-search

Props

- placeholder - String
- filter - Bool, default: false, Shows a filter icon.
- branded - Bool (default: false)
- focus - Bool (default: false)

Events

- input
- submit
- filter
- reset

### b-spinner

Props

- size - l, m, s (default: l )

### b-table

Props

- hover - Bool - default: false

Slots

- default

Its just a wrapper, make use of the HTML table elements, including `<table>`.

### b-switch

Props

- label - String
- value - Boolean (default false)

Events

- input

### b-tooltip

Props

- position - String
- text - String

### b-horizontal-list

Slots

- default

### b-horizontal-list-item

Props

- size - String (xs, s, m, l, xl), default: m

Slots

- default

### b-tabs

Props

- justify - String (flex-start, flex-end, center, space-between, space-around, space-evenly), default: flex-start

Slots

- default

### b-tabs-link

Slots

- default

### b-toast

Use it in conjunction with the useToast composable.

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

Props

- type - neutral, error, warning, success - default: neutral
- visible - Bool (default: false)

Slots

- default

Events

- hide

### b-upload

Set the enctype of the parent form to `enctype="multipart/form-data"`.

Props

- id - String
- text - String
- accept - String, Accepted file formats e.g. `image/jpeg, image/jpg, image/png, image/webp`

Events

- file

### b-badge

Props

- content - String
- hide-badge - Bool (default: false)

Slots

- default

### b-subheader

Slots

- default

### b-flex

Slots

- default

### b-flex-row

Slots

- default

### b-flex-col

Slots

- default

### BPanel

Props

- visible - Bool, default: false
- position - String (left, right), default: left

Slots

- default
- header
- footer

Events

- close

### b-card

Props

- route - Object
- outlined - Boolean
- filled - Boolean

Slots

- image
- subtitle
- text
- actions

### b-nav

Props

- nav - array

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
