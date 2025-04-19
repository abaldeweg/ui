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
|title|
|subtitle|
|text|
|actions|

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
|actions|
|default|

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
|keepOpen |Boolean|false||

### Slots

|Name|Description
|----|-----------
|selector|
|default|

## BDropdownItem

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|bold |Boolean|false||
|noHover |Boolean|false||
|icon |String|||

### Slots

|Name|Description
|----|-----------
|default|

## BEditor

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|modelValue |String, Number|||
|name |String|||
|id |String|||
|label |String|||
|hide-label |Boolean|false||
|help |String|||
|language |String|||

### Events

|Name|Description
|----|-----------
|update:modelValue|

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
|gap |String|undefined||

### Slots

|Name|Description
|----|-----------
|default|

## BForm

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|noMargin |Boolean|false||

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
|noStyling |Boolean|false||
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
|items |Array|||
|itemKey |String|key||
|itemValue |String|value||
|modelValue |Number, String|||
|focus |Boolean|||
|allowEmpty |Boolean|false||

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

## BInput

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|modelValue |String|||
|type |String|text|date, color, datetime-local, email, month, number, password, range, search, tel, text, time, url, week|
|name |String|||
|id |String|||
|label |String|||
|help |String|||
|hideLabel |Boolean|false||

### Events

|Name|Description
|----|-----------
|update:modelValue|

## BList

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|route |Object|||
|mediaSize |String|landscape|landscape, portrait, avatar|
|textWidth |String|200px||
|controlsWidth |String|50px||
|divider |Boolean|false||
|hover |Boolean|false||

### Slots

|Name|Description
|----|-----------
|media|
|title|
|subtitle|
|default|
|text|
|controls|

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
|color |String|inherit||
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
|width |Number|600||
|closeButton |Boolean|true||

### Slots

|Name|Description
|----|-----------
|title|
|default|
|footer|

### Events

|Name|Description
|----|-----------
|update:modelValue|

## BNav

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|nav |Array|||

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
|header|
|default|
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
|filter |Boolean|false||
|branded |Boolean|false||
|focus |Boolean|false||
|reset |Boolean|false||
|resetLabel |String|||
|filterLabel |String|||
|searchLabel |String|||

### Events

|Name|Description
|----|-----------
|submit|
|update:modelValue|
|reset|
|filter|
|input|

## BSelect

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|modelValue |String, Array|||
|type |String|checkbox|checkbox, radio, options|
|name |String|||
|id |String|||
|help |String|||
|options |Array|||

### Events

|Name|Description
|----|-----------
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

## BTextarea

### Props

|Name|Type|Default|Allowed Values|Example|Description
|----|----|-------|--------------|----------|-----------
|modelValue |String, Number|||
|type |String|text|date, color, datetime-local, email, month, number, password, range, search, tel, text, time, url, week|https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
|name |String|||
|id |String|||
|label |String|||
|hide-label |Boolean|false||
|help |String|||

### Events

|Name|Description
|----|-----------
|update:modelValue|

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
|accept |String|||
|modelValue |Boolean|false||

### Events

|Name|Description
|----|-----------
|update:modelValue|

## 


## 

