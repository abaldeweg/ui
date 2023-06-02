# Components

## BAlert

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|type |String|neutral|neutral, error, warning, success|
|hidable |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|

## BApp


Slots

|Name|Description
|----|-----------
|default|

## BBadge

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|content |String, Number|||
|hide-empty |Boolean|true||

Slots

|Name|Description
|----|-----------
|default|

## BBottomNav


Slots

|Name|Description
|----|-----------
|default|

## BBottomNavItem

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|title |String|||

Slots

|Name|Description
|----|-----------
|default|

## BButton

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|design |String|primary|primary, primary_danger, primary_wide, outline, outline_danger, outline_wide, text, text_danger|
|ripple |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|

Events

|Name|Description
|----|-----------
|click|

## BCard

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|route |Object|||
|outlined |Boolean|false||
|filled |Boolean|false||

Slots

|Name|Description
|----|-----------
|image|
|subtitle|
|text|
|actions|
|title|

## BChip

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|hover |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|
|action|

## BCode


Slots

|Name|Description
|----|-----------
|default|

## BComment

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|author |String|||
|date |String|||

Slots

|Name|Description
|----|-----------
|default|
|actions|

## BContainer

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|size |String|l|l, m, s|
|align |String|left|left, right, center|
|highlight |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|

## BDialog


Slots

|Name|Description
|----|-----------
|default|
|actions|

## BDivider

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|size |String|l|l, m, s, xs|

## BDropdown

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|position |String|selector|selector, mouse, bottom|
|keep-open |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|
|selector|

## BDropdownDivider


## BDropdownItem

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|bold |Boolean|false||
|no-hover |Boolean|false||
|icon |String||All in b-icon allowed icons|

Slots

|Name|Description
|----|-----------
|default|

Events

|Name|Description
|----|-----------
|click|

## BFlex

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|direction |String|row|row, column, row-reverse, column-reverse|
|justify |String|flex-start|flex-start, flex-end, center, space-between, space-around, space-evenly|
|align |String|stretch|stretch, flex-start, flex-end, center, baseline|
|gap |String|undefined||Accepts a string, so it could be used as a shorthand for row-gap and column-gap.

Slots

|Name|Description
|----|-----------
|default|

## BForm

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|no-margin |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|

## BFormFieldset


Slots

|Name|Description
|----|-----------
|default|

## BFormGroup

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|buttons |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|

## BFormHelpline


Slots

|Name|Description
|----|-----------
|default|

## BFormInput

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|modelValue |String, Number|||
|no-styling |Boolean|false||
|event |Boolean|false||
|focus |Boolean|false||

Events

|Name|Description
|----|-----------
|update:modelValue|

## BFormItem


Slots

|Name|Description
|----|-----------
|default|

## BFormLabel


Slots

|Name|Description
|----|-----------
|default|

## BFormLegend


Slots

|Name|Description
|----|-----------
|default|

## BFormSelect

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|modelValue |String, Number|||
|items |Array|||[{key: String, value: String}]
|item-key |String|key||
|item-value |String|key||
|focus |Boolean|false||
|allow-empty |Boolean|false||

Events

|Name|Description
|----|-----------
|update:modelValue|

## BFormTextarea

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|modelValue |String|||
|focus |Boolean|false||

Events

|Name|Description
|----|-----------
|update:modelValue|
|click|
|contextmenu|

## BIcon

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|type |String||apps, bin, star, close, check, download, filter, hamburger, minus, pause, pencil, play, plus, profile, kebab, meatballs, moon, dollar, search, euro, cart, directory, file, clipboard, up, down, left, right|
|size |Number|25||
|no-hover |Boolean|false||
|color |String|||String (e.g. hex code custom properties)

## BList

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|route |Object|||
|bold |Boolean|false||
|divider |Boolean|false||
|image-size |String||xs, s, m, l, xl|
|image-position |String|center|start, center, end|
|actions-position |String|center|start, center, end|
|reverse |Boolean|false||
|disabled |Boolean|false||
|active |Boolean|false||

Slots

|Name|Description
|----|-----------
|title|
|image|
|options|
|subtitle|

## BMasthead


Slots

|Name|Description
|----|-----------
|default|

## BMastheadItem

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|position |String|start|start, center, end|

Slots

|Name|Description
|----|-----------
|default|

## BModal

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|width |Number|600||Defines the max-width property
|close-button |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|
|title|
|footer|

Events

|Name|Description
|----|-----------
|close|

## BNav

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|nav |Array|||The array expects objects with properties route (String or RouterLink), title (String), badge (String), icon (object containing property type (&#39;icon&#39; or &#39;dot&#39;)) and value (String, icon from BIcon).

## BPanel

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|visible |Boolean|false||
|position |String|left|left, right|

Slots

|Name|Description
|----|-----------
|default|
|header|
|footer|

Events

|Name|Description
|----|-----------
|close|

## BScrollToBottom

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|width |Number|||0 results to full width, all values are pixel values
|height |Number|||0 results in 100vh minus masthead height, all values are pixel values

Slots

|Name|Description
|----|-----------
|default|

## BSearch

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|placeholder |String|||
|modelValue |String|||
|filter |Boolean|false||Shows a filter icon.
|branded |Boolean|false||
|focus |Boolean|false||

Events

|Name|Description
|----|-----------
|input|
|submit|
|filter|
|reset|
|update:modelValue|

## BSlider


Slots

|Name|Description
|----|-----------
|default|

## BSliderItem

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|size |String|m|xs, s, m, l, xl|

Slots

|Name|Description
|----|-----------
|default|

## BSpinner

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|size |String|l|l, m, s|

## BSubheader


Slots

|Name|Description
|----|-----------
|default|

## BSwitch

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|label |String|||
|modelValue |Boolean|false||

Events

|Name|Description
|----|-----------
|update:modelValue|

## BTable

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|hover |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|

## BTabs

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|justify |String|flex-start|flex-start, flex-end, center, space-between, space-around, space-evenly|

Slots

|Name|Description
|----|-----------
|default|

## BTabsLink


Slots

|Name|Description
|----|-----------
|default|

## BToast

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|type |String|neutral|neutral, error, warning, success|
|visible |Boolean|false||

Slots

|Name|Description
|----|-----------
|default|

## BTooltip

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|position |String||top, bottom, left, right|
|text |String|||

Slots

|Name|Description
|----|-----------
|default|

## BUpload

Props

|Name|Type|Default|Allowed Values|Description
|----|----|-------|--------------|-----------
|id |String|||
|text |String|||
|accept |String|||Accepted file formats e.g. `image/jpeg, image/jpg, image/png, image/webp`

Events

|Name|Description
|----|-----------
|file|
