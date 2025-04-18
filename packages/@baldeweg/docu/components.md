# Components

## BAlert

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|type |String|neutral|neutral, error, warning, success, info|
|closable |Boolean|false||
|elevated |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|

## BApp


### Slots

|Name|Description
|----|-----------
|default|

## BBadge

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|variant |String|none|none, inline, superscript|
|position |String|right|left, right|
|background |String|none|none, primary, neutral|
|content |String, Number|||
|hideEmpty |Boolean|false||

### Slots

|Name|Description
|----|-----------
|icon|
|default|
|action|

## BBottomNav


### Slots

|Name|Description
|----|-----------
|default|

## BBottomNavItem

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|title |String|||

### Slots

|Name|Description
|----|-----------
|default|

## BButton

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|design |String|primary|primary, primary_danger, primary_wide, outline, outline_danger, outline_wide, text, text_danger|
|ripple |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|

### Events

|Name|Description
|----|-----------
|click|

## BCard

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|route |Object|||
|outlined |Boolean|false||
|filled |Boolean|false||

### Slots

|Name|Description
|----|-----------
|image|
|subtitle|
|text|
|actions|
|title|

## BCode


### Slots

|Name|Description
|----|-----------
|default|

## BComment

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|author |String|||
|date |String|||

### Slots

|Name|Description
|----|-----------
|default|
|actions|

## BContainer

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|size |String|l|l, m, s|
|align |String|left|left, right, center|
|highlight |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|

## BDialog

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|modelValue |Boolean|false||
|canClose |Boolean|true||

### Slots

|Name|Description
|----|-----------
|default|
|actions|

### Events

|Name|Description
|----|-----------
|update:modelValue|

## BDivider

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|size |String|l|l, m, s, xs|

## BDropdown

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|position |String|selector|selector, mouse, bottom|
|keep-open |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|
|selector|

## BDropdownItem

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|bold |Boolean|false||
|no-hover |Boolean|false||
|icon |String|||

### Slots

|Name|Description
|----|-----------
|default|

### Events

|Name|Description
|----|-----------
|click|

## BFieldset

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|legend |String|||

### Slots

|Name|Description
|----|-----------
|default|

## BFlex

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|direction |String|row|row, column, row-reverse, column-reverse|
|justify |String|flex-start|flex-start, flex-end, center, space-between, space-around, space-evenly|
|align |String|stretch|stretch, flex-start, flex-end, center, baseline|
|gap |String|undefined||Accepts a string, so it could be used as a shorthand for row-gap and column-gap.

### Slots

|Name|Description
|----|-----------
|default|

## BForm

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|no-margin |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|

## BFormFieldset


### Slots

|Name|Description
|----|-----------
|default|

## BFormGroup

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|buttons |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|

## BFormHelpline


### Slots

|Name|Description
|----|-----------
|default|

## BFormInput

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|modelValue |String, Number|||
|no-styling |Boolean|false||
|event |Boolean|false||
|focus |Boolean|false||

### Events

|Name|Description
|----|-----------
|update:modelValue|

## BFormItem


### Slots

|Name|Description
|----|-----------
|default|

## BFormLabel


### Slots

|Name|Description
|----|-----------
|default|

## BFormLegend


### Slots

|Name|Description
|----|-----------
|default|

## BFormSelect

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|modelValue |String, Number|||
|items |Array|||[{key: String, value: String}]
|item-key |String|key||
|item-value |String|key||
|focus |Boolean|false||
|allow-empty |Boolean|false||

### Events

|Name|Description
|----|-----------
|update:modelValue|

## BFormTextarea

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|modelValue |String|||
|focus |Boolean|false||

### Events

|Name|Description
|----|-----------
|update:modelValue|
|click|
|contextmenu|

## BList

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|route |Object|||
|media-size |String|landscape|landscape, portrait, avatar|
|text-width |String|200px||
|controls-width |String|50px||
|divider |Boolean|false||
|hover |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|
|media|
|text|
|controls|
|title|
|subtitle|

## BMasthead


### Slots

|Name|Description
|----|-----------
|default|

## BMastheadItem

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|position |String|start|start, center, end|

### Slots

|Name|Description
|----|-----------
|default|

## BMaterialIcon

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|size |Number|24||
|color |String|||String (e.g. hex code, custom properties)
|hover |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|

## BModal

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|modelValue |Boolean|false||
|width |Number|600||Defines the max-width property
|close-button |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|
|title|
|footer|

### Events

|Name|Description
|----|-----------
|update:modelValue|

## BNav

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|nav |Array|||The array expects objects with properties route (String or RouterLink), title (String), badge (String), icon (object containing property type (&#39;icon&#39; or &#39;dot&#39;)) and value (String).

## BPanel

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|modelValue |Boolean|false||
|position |String|left|left, right|
|width |String|300px||

### Slots

|Name|Description
|----|-----------
|default|
|header|
|footer|

### Events

|Name|Description
|----|-----------
|update:modelValue|

## BSearch

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|placeholder |String|||
|modelValue |String|||
|filter |Boolean|false||Shows a filter icon.
|branded |Boolean|false||
|focus |Boolean|false||
|reset |Boolean|false||
|resetLabel |String|||
|filterLabel |String|||
|searchLabel |String|||

### Events

|Name|Description
|----|-----------
|input|
|submit|
|filter|
|reset|
|update:modelValue|

## BSlider


### Slots

|Name|Description
|----|-----------
|default|

## BSliderItem

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|size |String|m|xs, s, m, l, xl|

### Slots

|Name|Description
|----|-----------
|default|

## BSpinner

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|size |String|l|l, m, s|

## BSubheader


### Slots

|Name|Description
|----|-----------
|default|

## BSwitch

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|label |String|||
|modelValue |Boolean|false||

### Events

|Name|Description
|----|-----------
|update:modelValue|

## BTable

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|hover |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|

## BTabs

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|justify |String|flex-start|flex-start, flex-end, center, space-between, space-around, space-evenly|

### Slots

|Name|Description
|----|-----------
|default|

## BTabsLink


### Slots

|Name|Description
|----|-----------
|default|

## BToast

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|type |String|neutral|neutral, error, warning, success|
|visible |Boolean|false||

### Slots

|Name|Description
|----|-----------
|default|

## BTooltip

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|position |String|top|top, bottom, left, right|
|text |String|||

### Slots

|Name|Description
|----|-----------
|default|

## BUpload

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|id |String|||
|text |String|||
|accept |String|||Accepted file formats e.g. `image/jpeg, image/jpg, image/png, image/webp`

### Events

|Name|Description
|----|-----------
|update:modelValue|

## 


## 

