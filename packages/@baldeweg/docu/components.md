# Components

## BAlert

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|type |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;neutral&#39;&#34;}|neutral, error, warning, success, info|  No 
|closable |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|elevated |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|default

## BApp


### Slots

|Name
|----
|default

## BBadge

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|variant |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;\&#34;none\&#34;&#34;}|none, inline, superscript|  No 
|position |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;right&#39;&#34;}|left, right|  No 
|background |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;\&#34;none\&#34;&#34;}|none, primary, neutral|  No 
|content |{&#34;name&#34;:&#34;string|number&#34;}|||  No 
|hideEmpty |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|icon
|default
|action

## BBottomNav


### Slots

|Name
|----
|default

## BBottomNavItem

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|title |{&#34;name&#34;:&#34;string&#34;}|||  No 

### Slots

|Name
|----
|default

## BButton

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|design |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;primary&#39;&#34;}|primary, primary_danger, primary_wide, outline, outline_danger, outline_wide, text, text_danger|  No 
|ripple |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|default

### Events

|Name
|----
|click

## BCard

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|route |{&#34;name&#34;:&#34;object&#34;}|||  No 
|outlined |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|filled |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|image
|title
|subtitle
|text
|actions

## BCode


### Slots

|Name
|----
|default

## BComment

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|author |{&#34;name&#34;:&#34;string&#34;}|||  No 
|date |{&#34;name&#34;:&#34;string&#34;}|||  No 

### Slots

|Name
|----
|actions
|default

## BContainer

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|size |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;l&#39;&#34;}|l, m, s|  No 
|align |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;left&#39;&#34;}|left, right, center|  No 
|highlight |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|default

## BDialog

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|modelValue |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|canClose |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;true&#34;}||  No 

### Slots

|Name
|----
|default
|actions

### Events

|Name
|----
|update:modelValue

## BDivider

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|size |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;l&#39;&#34;}|l, m, s, xs|  No 

## BDropdown

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|position |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;selector&#39;&#34;}|selector, mouse, bottom|  No 
|keepOpen |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|selector
|default

## BDropdownItem

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|bold |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|noHover |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|icon |{&#34;name&#34;:&#34;string&#34;}|||  No 

### Slots

|Name
|----
|default

## BEditor

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|modelValue |{&#34;name&#34;:&#34;string&#34;}|||  No 
|name |{&#34;name&#34;:&#34;string&#34;}|||  Yes 
|id |{&#34;name&#34;:&#34;string&#34;}|||  Yes 
|label |{&#34;name&#34;:&#34;string&#34;}|||  No 
|hideLabel |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|help |{&#34;name&#34;:&#34;string&#34;}|||  No 
|language |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;json&#39;&#34;}||  No 

### Events

|Name
|----
|update:modelValue

## BFieldset

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|legend |{&#34;name&#34;:&#34;string&#34;}|||  No 

### Slots

|Name
|----
|default

## BFlex

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|direction |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;row&#39;&#34;}|row, column, row-reverse, column-reverse|  No 
|justify |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;flex-start&#39;&#34;}|flex-start, flex-end, center, space-between, space-around, space-evenly|  No 
|align |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;stretch&#39;&#34;}|stretch, flex-start, flex-end, center, baseline|  No 
|gap |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;undefined&#34;}||  No 

### Slots

|Name
|----
|default

## BForm

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|noMargin |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|default

## BFormFieldset


### Slots

|Name
|----
|default

## BFormGroup

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|buttons |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|default

## BFormHelpline


### Slots

|Name
|----
|default

## BFormInput

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|modelValue |{&#34;name&#34;:&#34;string|number&#34;}|||  No 
|noStyling |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|event |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|focus |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Events

|Name
|----
|update:modelValue

## BFormItem


### Slots

|Name
|----
|default

## BFormLabel


### Slots

|Name
|----
|default

## BFormLegend


### Slots

|Name
|----
|default

## BFormSelect

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|items |{&#34;name&#34;:&#34;array&#34;}|||  No 
|itemKey |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;key&#39;&#34;}||  No 
|itemValue |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;value&#39;&#34;}||  No 
|modelValue |{&#34;name&#34;:&#34;number|string&#34;}|||  No 
|focus |{&#34;name&#34;:&#34;boolean&#34;}|||  No 
|allowEmpty |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Events

|Name
|----
|update:modelValue

## BFormTextarea

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|modelValue |{&#34;name&#34;:&#34;string&#34;}|||  No 
|focus |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Events

|Name
|----
|update:modelValue
|click
|contextmenu

## BInput

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|modelValue |{&#34;name&#34;:&#34;string&#34;}|||  No 
|type |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;text&#39;&#34;}|date, color, datetime-local, email, month, number, password, range, search, tel, text, time, url, week|  No 
|name |{&#34;name&#34;:&#34;string&#34;}|||  Yes 
|id |{&#34;name&#34;:&#34;string&#34;}|||  Yes 
|label |{&#34;name&#34;:&#34;string&#34;}|||  No 
|help |{&#34;name&#34;:&#34;string&#34;}|||  No 
|hideLabel |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Events

|Name
|----
|update:modelValue

## BList

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|route |{&#34;name&#34;:&#34;object&#34;}|||  No 
|mediaSize |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;landscape&#39;&#34;}|landscape, portrait, avatar|  No 
|textWidth |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;200px&#39;&#34;}||  No 
|controlsWidth |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;50px&#39;&#34;}||  No 
|divider |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|hover |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|media
|title
|subtitle
|default
|text
|controls

## BMasthead


### Slots

|Name
|----
|default

## BMastheadItem

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|position |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;start&#39;&#34;}|start, center, end|  No 

### Slots

|Name
|----
|default

## BMaterialIcon

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|size |{&#34;name&#34;:&#34;number&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;24&#34;}||  No 
|color |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;inherit&#39;&#34;}||  No 
|hover |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|default

## BModal

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|modelValue |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|width |{&#34;name&#34;:&#34;number&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;600&#34;}||  No 
|closeButton |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;true&#34;}||  No 

### Slots

|Name
|----
|title
|default
|footer

### Events

|Name
|----
|update:modelValue

## BNav

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|nav |{&#34;name&#34;:&#34;array&#34;}|||  No 

## BPanel

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|modelValue |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|position |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;left&#39;&#34;}|left, right|  No 
|width |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;300px&#39;&#34;}||  No 

### Slots

|Name
|----
|header
|default
|footer

### Events

|Name
|----
|update:modelValue

## BSearch

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|placeholder |{&#34;name&#34;:&#34;string&#34;}|||  No 
|modelValue |{&#34;name&#34;:&#34;string&#34;}|||  No 
|filter |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|branded |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|focus |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|reset |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|resetLabel |{&#34;name&#34;:&#34;string&#34;}|||  No 
|filterLabel |{&#34;name&#34;:&#34;string&#34;}|||  No 
|searchLabel |{&#34;name&#34;:&#34;string&#34;}|||  No 

### Events

|Name
|----
|submit
|update:modelValue
|reset
|filter
|input

## BSelect

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|modelValue |{&#34;name&#34;:&#34;array&#34;}|||  No 
|type |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;checkbox&#39;&#34;}|checkbox, radio, options|  No 
|name |{&#34;name&#34;:&#34;string&#34;}|||  Yes 
|id |{&#34;name&#34;:&#34;string&#34;}|||  Yes 
|help |{&#34;name&#34;:&#34;string&#34;}|||  No 
|options |{&#34;name&#34;:&#34;object&#34;}|||  No 

### Events

|Name
|----
|update:modelValue

## BSlider


### Slots

|Name
|----
|default

## BSliderItem

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|size |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;m&#39;&#34;}|xs, s, m, l, xl|  No 

### Slots

|Name
|----
|default

## BSpinner

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|size |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;l&#39;&#34;}|l, m, s|  No 

## BSubheader


### Slots

|Name
|----
|default

## BSwitch

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|label |{&#34;name&#34;:&#34;string&#34;}|||  No 
|modelValue |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Events

|Name
|----
|update:modelValue

## BTable

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|hover |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|default

## BTabs

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|justify |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;flex-start&#39;&#34;}|flex-start, flex-end, center, space-between, space-around, space-evenly|  No 

### Slots

|Name
|----
|default

## BTabsLink


### Slots

|Name
|----
|default

## BTextarea

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|modelValue |{&#34;name&#34;:&#34;string&#34;}|||  No 
|name |{&#34;name&#34;:&#34;string&#34;}|||  Yes 
|id |{&#34;name&#34;:&#34;string&#34;}|||  Yes 
|label |{&#34;name&#34;:&#34;string&#34;}|||  No 
|hideLabel |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 
|help |{&#34;name&#34;:&#34;string&#34;}|||  No 

### Events

|Name
|----
|update:modelValue

## BToast

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|type |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;neutral&#39;&#34;}|neutral, error, warning, success|  No 
|visible |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Slots

|Name
|----
|default

## BTooltip

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|position |{&#34;name&#34;:&#34;string&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;&#39;top&#39;&#34;}|top, bottom, left, right|  No 
|text |{&#34;name&#34;:&#34;string&#34;}|||  No 

### Slots

|Name
|----
|default

## BUpload

### Props

|Name|Type|Default|Values|Required
|----|----|-------|--------------|--------
|id |{&#34;name&#34;:&#34;string&#34;}|||  No 
|text |{&#34;name&#34;:&#34;string&#34;}|||  No 
|accept |{&#34;name&#34;:&#34;string&#34;}|||  No 
|modelValue |{&#34;name&#34;:&#34;boolean&#34;}|{&#34;func&#34;:false,&#34;value&#34;:&#34;false&#34;}||  No 

### Events

|Name
|----
|update:modelValue

## 

