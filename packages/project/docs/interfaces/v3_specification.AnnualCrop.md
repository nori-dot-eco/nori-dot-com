[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / AnnualCrop

# Interface: AnnualCrop

[v3-specification](../modules/v3_specification.md).AnnualCrop

Crop management details and events for annual crops.

**`Example`**

<caption>An crop definition for an annual crop planted in year 2000:</caption>

```js
{
 "name": "Joe's corn",
 "type": "corn",
 "classification": "annual crop",
 "plantingDate": "01/01/2000"
 // ...CropEvents
}
```

## Hierarchy

- [`CropEvents`](v3_specification.CropEvents.md)

- [`HarvestableCropEvents`](v3_specification.HarvestableCropEvents.md)

- [`PlantedCrop`](v3_specification.PlantedCrop.md)

  ↳ **`AnnualCrop`**

## Table of contents

### Properties

- [burningEvent](v3_specification.AnnualCrop.md#burningevent)
- [classification](v3_specification.AnnualCrop.md#classification)
- [fertilizerEvents](v3_specification.AnnualCrop.md#fertilizerevents)
- [grazingEvents](v3_specification.AnnualCrop.md#grazingevents)
- [harvestEvents](v3_specification.AnnualCrop.md#harvestevents)
- [irrigationEvents](v3_specification.AnnualCrop.md#irrigationevents)
- [limingEvents](v3_specification.AnnualCrop.md#limingevents)
- [name](v3_specification.AnnualCrop.md#name)
- [organicMatterEvents](v3_specification.AnnualCrop.md#organicmatterevents)
- [plantingDate](v3_specification.AnnualCrop.md#plantingdate)
- [soilOrCropDisturbanceEvents](v3_specification.AnnualCrop.md#soilorcropdisturbanceevents)
- [type](v3_specification.AnnualCrop.md#type)

## Properties

### burningEvent

• `Optional` **burningEvent**: [`BurningEvent`](v3_specification.BurningEvent.md)

A burning event, if applicable.

**`Nullable`**

if no burning ever occurred, explicitly specify `burningEvent` as `null`

**`Default`**

**`Example`**

<caption>When burning occurred after harvesting:</caption>

```js
"burningEvent": {
 "type": "after harvesting"
}
```

**`Example`**

<caption>When no burning occurred:</caption>

```js
"burningEvent": null
```

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[burningEvent](v3_specification.CropEvents.md#burningevent)

#### Defined in

[v3-specification.ts:1014](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L1014)

___

### classification

• **classification**: ``"annual crop"``

The crop classification.

You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).

**`Default`**

"annual crop"

**`Example`**

```js
"classification": "annual crop"
```

#### Defined in

[v3-specification.ts:1253](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L1253)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](v3_specification.FertilizerEvent.md)[]

A list of fertilizer events, if applicable.

**`Example`**

<caption>When some fertilizer events occurred:</caption>

```js
"fertilizerEvents": [
 {
   "date": "10/01/2000",
   "name": "Joe's fertilizer",
   "type": "mixed blends",
   "lbsOfNPerAcre": 10
 }
 // ... other fertilizer events
]
```

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[fertilizerEvents](v3_specification.CropEvents.md#fertilizerevents)

#### Defined in

[v3-specification.ts:910](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L910)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](v3_specification.GrazingEvent.md)[]

A list of grazing events, if applicable

**`Nullable`**

during import (explicitly specify null if grazing did not occur, otherwise exclude the property or use an empty array `[]`)

**`Example`**

<caption>When some grazing events occurred:</caption>

```js
"grazingEvents": [
 {
  "restPeriod": 0,
  "utilization": 20,
  "startDate": "01/01/2000",
  "endDate": "12/31/2000"
 }
 // .. additional grazing events
]
```

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[grazingEvents](v3_specification.CropEvents.md#grazingevents)

#### Defined in

[v3-specification.ts:991](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L991)

___

### harvestEvents

• `Optional` **harvestEvents**: ([`AnnualCropHarvestEvent`](v3_specification.AnnualCropHarvestEvent.md) \| [`CropManagementEvent`](v3_specification.CropManagementEvent.md))[]

A list of harvest events, if applicable.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`Example`**

<caption>When crop had at least one harvest event:</caption>

```js
 "harvestEvents": [
   // ...list of AnnualCropHarvestEvents or CropManagementEvents
 ]
```

#### Inherited from

[HarvestableCropEvents](v3_specification.HarvestableCropEvents.md).[harvestEvents](v3_specification.HarvestableCropEvents.md#harvestevents)

#### Defined in

[v3-specification.ts:837](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L837)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](v3_specification.IrrigationEvent.md)[]

A list of irrigation events, if applicable.

**`Example`**

<caption>When some irrigation events occurred:</caption>

```js
"irrigationEvents": [
 {
   "volume": 1,
   "date": "01/01/2000",
 }
 // ... other irrigation events
]
```

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[irrigationEvents](v3_specification.CropEvents.md#irrigationevents)

#### Defined in

[v3-specification.ts:950](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L950)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](v3_specification.LimingEvent.md)[]

A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.

**`Nullable`**

during import (explicitly specify null if no liming events occurred, otherwise exclude the property or use an empty array `[]`)

**`Example`**

<caption>When some liming events occurred:</caption>

```js
"limingEvents": [
 {
   "date": "01/01/2000",
   "type": "crushed limestone",
   "tonsPerAcre": 10,
 }
 //...other liming events
]
```

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[limingEvents](v3_specification.CropEvents.md#limingevents)

#### Defined in

[v3-specification.ts:970](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L970)

___

### name

• `Optional` **name**: `string`

The name/alias that the crop is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`Todo`**

this property will be deprecated in the future

**`Example`**

```js
"name": "Joe's corn"
```

#### Inherited from

[PlantedCrop](v3_specification.PlantedCrop.md).[name](v3_specification.PlantedCrop.md#name)

#### Defined in

[v3-specification.ts:784](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L784)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](v3_specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](v3_specification.SlurryOrganicMatterEvent.md))[]

A list of organic matter and manure application events, if applicable.

**`Nullable`**

during import (explicitly specify null if no organic matter events occurred, otherwise exclude the property or use an empty array `[]`)

**`Example`**

<caption>When some organic matter was applied:</caption>

```js
"organicMatterEvents": [
 {
   "date": "10/01/2000",
   "type": "alfalfa meal",
   "amountPerAcre": 2, // tons
   "percentNitrogen": 9,
   "carbonNitrogenRatio": 30,
   "percentMoisture": 0,
 }
 // ... other organic matter or manure events
]
```

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[organicMatterEvents](v3_specification.CropEvents.md#organicmatterevents)

#### Defined in

[v3-specification.ts:933](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L933)

___

### plantingDate

• **plantingDate**: `string`

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`.

**`Pattern`**

^02/(?:[01]\d|2\d)/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)/(?:[0-2]\d|3[01])/(?:20)\d{2}|(?:0[469]|11)/(?:[0-2]\d|30)/(?:20)\d{2}|02/(?:[0-1]\d|2[0-8])/(?:20)\d{2}$

**`Example`**

<caption>When the crop was planted on January 1st of year 2000:</caption>

```js
"plantingDate": "01/01/2000"
```

#### Inherited from

[PlantedCrop](v3_specification.PlantedCrop.md).[plantingDate](v3_specification.PlantedCrop.md#plantingdate)

#### Defined in

[v3-specification.ts:799](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L799)

___

### soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v3_specification.SoilOrCropDisturbanceEvent.md)[]

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`.

**`Example`**

<caption>When some soil or crop disturbance events occurred:</caption>

```js
"soilOrCropDisturbanceEvents": [
 {
   "date": "10/01/2000",
   "type": "mow",
 }
 // ... other soul and crop disturbance events
]
```

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[soilOrCropDisturbanceEvents](v3_specification.CropEvents.md#soilorcropdisturbanceevents)

#### Defined in

[v3-specification.ts:891](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L891)

___

### type

• **type**: ``"barley"`` \| ``"broccoli-coast"`` \| ``"broccoli-desert"`` \| ``"carrots"`` \| ``"cauliflower"`` \| ``"corn"`` \| ``"corn silage"`` \| ``"cotton"`` \| ``"dry field beans"`` \| ``"dry field pea"`` \| ``"fallow"`` \| ``"lettuce-head"`` \| ``"lettuce-leaf"`` \| ``"lettuce-romaine"`` \| ``"millet"`` \| ``"oats"`` \| ``"rice - flooded"`` \| ``"rye"`` \| ``"sorghum"`` \| ``"sorghum silage"`` \| ``"spring wheat"`` \| ``"sunflower"`` \| ``"switchgrass"`` \| ``"tomatoes, fresh"`` \| ``"tomatoes, processing"`` \| ``"winter wheat"`` \| ``"grass-legume mix"`` \| ``"sugar beets"`` \| ``"strawberry"`` \| ``"peanut"`` \| ``"potato"`` \| ``"soybean"``

The COMET equivalent type of the crop

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`Error Message`**

must specify one of the allowed crop types if you are specifying an annual crop

**`Example`**

<caption>When the annual crop is corn:</caption>

```js
"type": "corn"
```

#### Defined in

[v3-specification.ts:1238](https://github.com/nori-dot-eco/nori-dot-com/blob/d0f545e/packages/project/src/v3-specification.ts#L1238)
