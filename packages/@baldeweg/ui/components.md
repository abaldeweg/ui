# Components

## BAlert

### Props

| Name     | Type    | Default           | Values                                 | Required |
| -------- | ------- | ----------------- | -------------------------------------- | -------- |
| type     | string  | &#39;neutral&#39; | neutral, error, warning, success, info | No       |
| closable | boolean | false             |                                        | No       |

### Slots

| Name    |
| ------- |
| default |

## BApp

### Slots

| Name    |
| ------- |
| default |

## BBadge

### Props

| Name       | Type           | Default         | Values                    | Required |
| ---------- | -------------- | --------------- | ------------------------- | -------- |
| variant    | string         | &#34;none&#34;  | none, inline, superscript | No       |
| position   | string         | &#39;right&#39; | left, right               | No       |
| background | string         | &#34;none&#34;  | none, primary, neutral    | No       |
| content    | string, number |                 |                           | No       |
| hideEmpty  | boolean        | false           |                           | No       |

### Slots

| Name    |
| ------- |
| icon    |
| default |
| action  |

## BBottomNav

### Slots

| Name    |
| ------- |
| default |

## BBottomNavItem

### Props

| Name  | Type   | Default | Values | Required |
| ----- | ------ | ------- | ------ | -------- |
| title | string |         |        | No       |

### Slots

| Name    |
| ------- |
| default |

## BButton

### Props

| Name   | Type    | Default           | Values                                                                                          | Required |
| ------ | ------- | ----------------- | ----------------------------------------------------------------------------------------------- | -------- |
| design | string  | &#39;primary&#39; | primary, primary_danger, primary_wide, outline, outline_danger, outline_wide, text, text_danger | No       |
| ripple | boolean | false             |                                                                                                 | No       |

### Slots

| Name    |
| ------- |
| default |

### Events

| Name  |
| ----- |
| click |

## BCard

### Props

| Name     | Type    | Default | Values | Required |
| -------- | ------- | ------- | ------ | -------- |
| route    | object  |         |        | No       |
| outlined | boolean | false   |        | No       |
| filled   | boolean | false   |        | No       |

### Slots

| Name     |
| -------- |
| image    |
| title    |
| subtitle |
| text     |
| actions  |

## BCode

### Slots

| Name    |
| ------- |
| default |

## BContainer

### Props

| Name      | Type    | Default        | Values              | Required |
| --------- | ------- | -------------- | ------------------- | -------- |
| size      | string  | &#39;l&#39;    | l, m, s             | No       |
| align     | string  | &#39;left&#39; | left, right, center | No       |
| highlight | boolean | false          |                     | No       |

### Slots

| Name    |
| ------- |
| default |

## BDialog

### Props

| Name       | Type    | Default | Values | Required |
| ---------- | ------- | ------- | ------ | -------- |
| modelValue | boolean | false   |        | No       |
| canClose   | boolean | true    |        | No       |

### Slots

| Name    |
| ------- |
| default |
| actions |

### Events

| Name              |
| ----------------- |
| update:modelValue |

## BDivider

### Props

| Name | Type   | Default     | Values      | Required |
| ---- | ------ | ----------- | ----------- | -------- |
| size | string | &#39;l&#39; | l, m, s, xs | No       |

## BDropdown

### Props

| Name     | Type    | Default            | Values                  | Required |
| -------- | ------- | ------------------ | ----------------------- | -------- |
| position | string  | &#39;selector&#39; | selector, mouse, bottom | No       |
| keepOpen | boolean | false              |                         | No       |

### Slots

| Name     |
| -------- |
| selector |
| default  |

## BDropdownItem

### Props

| Name    | Type    | Default | Values | Required |
| ------- | ------- | ------- | ------ | -------- |
| bold    | boolean | false   |        | No       |
| noHover | boolean | false   |        | No       |
| icon    | string  |         |        | No       |

### Slots

| Name    |
| ------- |
| default |

## BEditor

### Props

| Name       | Type    | Default        | Values | Required |
| ---------- | ------- | -------------- | ------ | -------- |
| modelValue | string  |                |        | No       |
| name       | string  |                |        | Yes      |
| id         | string  |                |        | Yes      |
| label      | string  |                |        | No       |
| hideLabel  | boolean | false          |        | No       |
| help       | string  |                |        | No       |
| language   | string  | &#39;json&#39; |        | No       |

### Events

| Name              |
| ----------------- |
| update:modelValue |

## BFieldset

### Props

| Name   | Type   | Default | Values | Required |
| ------ | ------ | ------- | ------ | -------- |
| legend | string |         |        | No       |

### Slots

| Name    |
| ------- |
| default |

## BFlex

### Props

| Name      | Type   | Default              | Values                                                                  | Required |
| --------- | ------ | -------------------- | ----------------------------------------------------------------------- | -------- |
| direction | string | &#39;row&#39;        | row, column, row-reverse, column-reverse                                | No       |
| justify   | string | &#39;flex-start&#39; | flex-start, flex-end, center, space-between, space-around, space-evenly | No       |
| align     | string | &#39;stretch&#39;    | stretch, flex-start, flex-end, center, baseline                         | No       |
| gap       | string | undefined            |                                                                         | No       |

### Slots

| Name    |
| ------- |
| default |

## BForm

### Props

| Name     | Type    | Default | Values | Required |
| -------- | ------- | ------- | ------ | -------- |
| noMargin | boolean | false   |        | No       |

### Slots

| Name    |
| ------- |
| default |

## BFormFieldset

### Slots

| Name    |
| ------- |
| default |

## BFormGroup

### Props

| Name    | Type    | Default | Values | Required |
| ------- | ------- | ------- | ------ | -------- |
| buttons | boolean | false   |        | No       |

### Slots

| Name    |
| ------- |
| default |

## BFormHelpline

### Slots

| Name    |
| ------- |
| default |

## BFormInput

### Props

| Name       | Type           | Default | Values | Required |
| ---------- | -------------- | ------- | ------ | -------- |
| modelValue | string, number |         |        | No       |
| noStyling  | boolean        | false   |        | No       |
| event      | boolean        | false   |        | No       |
| focus      | boolean        | false   |        | No       |

### Events

| Name              |
| ----------------- |
| update:modelValue |

## BFormItem

### Slots

| Name    |
| ------- |
| default |

## BFormLabel

### Slots

| Name    |
| ------- |
| default |

## BFormLegend

### Slots

| Name    |
| ------- |
| default |

## BFormSelect

### Props

| Name       | Type           | Default         | Values | Required |
| ---------- | -------------- | --------------- | ------ | -------- |
| items      | array          |                 |        | No       |
| itemKey    | string         | &#39;key&#39;   |        | No       |
| itemValue  | string         | &#39;value&#39; |        | No       |
| modelValue | number, string |                 |        | No       |
| focus      | boolean        |                 |        | No       |
| allowEmpty | boolean        | false           |        | No       |

### Events

| Name              |
| ----------------- |
| update:modelValue |

## BFormTextarea

### Props

| Name       | Type    | Default | Values | Required |
| ---------- | ------- | ------- | ------ | -------- |
| modelValue | string  |         |        | No       |
| focus      | boolean | false   |        | No       |

### Events

| Name              |
| ----------------- |
| update:modelValue |
| click             |
| contextmenu       |

## BInput

### Props

| Name       | Type    | Default        | Values                                                                                                 | Required |
| ---------- | ------- | -------------- | ------------------------------------------------------------------------------------------------------ | -------- |
| modelValue | string  |                |                                                                                                        | No       |
| type       | string  | &#39;text&#39; | date, color, datetime-local, email, month, number, password, range, search, tel, text, time, url, week | No       |
| name       | string  |                |                                                                                                        | Yes      |
| id         | string  |                |                                                                                                        | Yes      |
| label      | string  |                |                                                                                                        | No       |
| help       | string  |                |                                                                                                        | No       |
| hideLabel  | boolean | false          |                                                                                                        | No       |

### Events

| Name              |
| ----------------- |
| update:modelValue |

## BList

### Props

| Name          | Type    | Default             | Values                      | Required |
| ------------- | ------- | ------------------- | --------------------------- | -------- |
| route         | object  |                     |                             | No       |
| mediaSize     | string  | &#39;landscape&#39; | landscape, portrait, avatar | No       |
| textWidth     | string  | &#39;200px&#39;     |                             | No       |
| controlsWidth | string  | &#39;50px&#39;      |                             | No       |
| divider       | boolean | false               |                             | No       |
| hover         | boolean | false               |                             | No       |

### Slots

| Name     |
| -------- |
| media    |
| title    |
| subtitle |
| default  |
| text     |
| controls |

## BMasthead

### Slots

| Name    |
| ------- |
| default |

## BMastheadItem

### Props

| Name     | Type   | Default         | Values             | Required |
| -------- | ------ | --------------- | ------------------ | -------- |
| position | string | &#39;start&#39; | start, center, end | No       |

### Slots

| Name    |
| ------- |
| default |

## BMaterialIcon

### Props

| Name  | Type    | Default           | Values | Required |
| ----- | ------- | ----------------- | ------ | -------- |
| size  | number  | 24                |        | No       |
| color | string  | &#39;inherit&#39; |        | No       |
| hover | boolean | false             |        | No       |

### Slots

| Name    |
| ------- |
| default |

## BModal

### Props

| Name        | Type    | Default | Values | Required |
| ----------- | ------- | ------- | ------ | -------- |
| modelValue  | boolean | false   |        | No       |
| width       | number  | 600     |        | No       |
| closeButton | boolean | true    |        | No       |

### Slots

| Name    |
| ------- |
| title   |
| default |
| footer  |

### Events

| Name              |
| ----------------- |
| update:modelValue |

## BNav

### Props

| Name | Type  | Default | Values | Required |
| ---- | ----- | ------- | ------ | -------- |
| nav  | array |         |        | No       |

## BPanel

### Props

| Name       | Type    | Default         | Values      | Required |
| ---------- | ------- | --------------- | ----------- | -------- |
| modelValue | boolean | false           |             | No       |
| position   | string  | &#39;left&#39;  | left, right | No       |
| width      | string  | &#39;300px&#39; |             | No       |

### Slots

| Name    |
| ------- |
| header  |
| default |
| footer  |

### Events

| Name              |
| ----------------- |
| update:modelValue |

## BSearch

### Props

| Name        | Type    | Default | Values | Required |
| ----------- | ------- | ------- | ------ | -------- |
| placeholder | string  |         |        | No       |
| modelValue  | string  |         |        | No       |
| filter      | boolean | false   |        | No       |
| branded     | boolean | false   |        | No       |
| focus       | boolean | false   |        | No       |
| reset       | boolean | false   |        | No       |
| resetLabel  | string  |         |        | No       |
| filterLabel | string  |         |        | No       |
| searchLabel | string  |         |        | No       |

### Events

| Name              |
| ----------------- |
| submit            |
| update:modelValue |
| reset             |
| filter            |
| input             |

## BSelect

### Props

| Name             | Type   | Default                | Values                   | Required |
| ---------------- | ------ | ---------------------- | ------------------------ | -------- |
| modelValue       | array  |                        |                          | No       |
| type             | string | &#39;checkbox&#39;     | checkbox, radio, options | No       |
| name             | string |                        |                          | Yes      |
| id               | string |                        |                          | Yes      |
| help             | string |                        |                          | No       |
| options          | array  |                        |                          | No       |
| optionsKeyName   | string | &#39;optionsKey&#39;   |                          | No       |
| optionsValueName | string | &#39;optionsValue&#39; |                          | No       |

### Events

| Name              |
| ----------------- |
| update:modelValue |

## BSlider

### Slots

| Name    |
| ------- |
| default |

## BSliderItem

### Props

| Name | Type   | Default     | Values          | Required |
| ---- | ------ | ----------- | --------------- | -------- |
| size | string | &#39;m&#39; | xs, s, m, l, xl | No       |

### Slots

| Name    |
| ------- |
| default |

## BSpinner

### Props

| Name | Type   | Default     | Values  | Required |
| ---- | ------ | ----------- | ------- | -------- |
| size | string | &#39;l&#39; | l, m, s | No       |

## BSubheader

### Slots

| Name    |
| ------- |
| default |

## BSwitch

### Props

| Name       | Type    | Default | Values | Required |
| ---------- | ------- | ------- | ------ | -------- |
| label      | string  |         |        | No       |
| modelValue | boolean | false   |        | No       |

### Events

| Name              |
| ----------------- |
| update:modelValue |

## BTable

### Props

| Name  | Type    | Default | Values | Required |
| ----- | ------- | ------- | ------ | -------- |
| hover | boolean | false   |        | No       |

### Slots

| Name    |
| ------- |
| default |

## BTabs

### Props

| Name    | Type   | Default              | Values                                                                  | Required |
| ------- | ------ | -------------------- | ----------------------------------------------------------------------- | -------- |
| justify | string | &#39;flex-start&#39; | flex-start, flex-end, center, space-between, space-around, space-evenly | No       |

### Slots

| Name    |
| ------- |
| default |

## BTabsLink

### Slots

| Name    |
| ------- |
| default |

## BTextarea

### Props

| Name       | Type    | Default | Values | Required |
| ---------- | ------- | ------- | ------ | -------- |
| modelValue | string  |         |        | No       |
| name       | string  |         |        | Yes      |
| id         | string  |         |        | Yes      |
| label      | string  |         |        | No       |
| hideLabel  | boolean | false   |        | No       |
| help       | string  |         |        | No       |

### Events

| Name              |
| ----------------- |
| update:modelValue |

## BToast

### Props

| Name    | Type    | Default           | Values                           | Required |
| ------- | ------- | ----------------- | -------------------------------- | -------- |
| type    | string  | &#39;neutral&#39; | neutral, error, warning, success | No       |
| visible | boolean | false             |                                  | No       |

### Slots

| Name    |
| ------- |
| default |

## BTooltip

### Props

| Name     | Type   | Default       | Values                   | Required |
| -------- | ------ | ------------- | ------------------------ | -------- |
| position | string | &#39;top&#39; | top, bottom, left, right | No       |
| text     | string |               |                          | No       |

### Slots

| Name    |
| ------- |
| default |

## BUpload

### Props

| Name       | Type    | Default | Values | Required |
| ---------- | ------- | ------- | ------ | -------- |
| id         | string  |         |        | No       |
| text       | string  |         |        | No       |
| accept     | string  |         |        | No       |
| modelValue | boolean | false   |        | No       |

### Events

| Name              |
| ----------------- |
| update:modelValue |
