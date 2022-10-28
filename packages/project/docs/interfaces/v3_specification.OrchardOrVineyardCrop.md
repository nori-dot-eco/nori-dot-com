[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / OrchardOrVineyardCrop

# Interface: OrchardOrVineyardCrop

[v3-specification](../modules/v3_specification.md).OrchardOrVineyardCrop

Crop management details and events for orchard and vineyard crops.

**`Example`**

<caption>A crop definition for an orchard that was pruned and renewed or cleared:</caption>

```js
{
 "type": "oranges",
 "classification": "orchard",
 "prune": "yes",
 "renewOrClear": "yes",
 "plantingDate": "01/01/2000"
 // ...CropEvents
}
```

## Hierarchy

- [`CropEvents`](v3_specification.CropEvents.md)

- [`HarvestableCropEvents`](v3_specification.HarvestableCropEvents.md)

- [`PlantedCrop`](v3_specification.PlantedCrop.md)

  ↳ **`OrchardOrVineyardCrop`**

## Table of contents

### Properties

- [burningEvent](v3_specification.OrchardOrVineyardCrop.md#burningevent)
- [classification](v3_specification.OrchardOrVineyardCrop.md#classification)
- [fertilizerEvents](v3_specification.OrchardOrVineyardCrop.md#fertilizerevents)
- [grazingEvents](v3_specification.OrchardOrVineyardCrop.md#grazingevents)
- [harvestEvents](v3_specification.OrchardOrVineyardCrop.md#harvestevents)
- [irrigationEvents](v3_specification.OrchardOrVineyardCrop.md#irrigationevents)
- [limingEvents](v3_specification.OrchardOrVineyardCrop.md#limingevents)
- [name](v3_specification.OrchardOrVineyardCrop.md#name)
- [organicMatterEvents](v3_specification.OrchardOrVineyardCrop.md#organicmatterevents)
- [plantingDate](v3_specification.OrchardOrVineyardCrop.md#plantingdate)
- [prune](v3_specification.OrchardOrVineyardCrop.md#prune)
- [renewOrClear](v3_specification.OrchardOrVineyardCrop.md#reneworclear)
- [soilOrCropDisturbanceEvents](v3_specification.OrchardOrVineyardCrop.md#soilorcropdisturbanceevents)
- [type](v3_specification.OrchardOrVineyardCrop.md#type)

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

[v3-specification.ts:1014](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L1014)

___

### classification

• **classification**: ``"orchard"`` \| ``"vineyard"``

The crop classification.

You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).

Note: if a crop ever changes classifications during the lifetime of the field (i.e. From an annual crop to a perennial), define the crop as a new crop in a new `CropYear` object and assign it the `plantingYear` that the crop switched types. In addition, if the crop is switching types, a harvest or kill event must be defined to signal the end of the life of this crop being the initial crop `type`.

**`Example`**

<caption>When the crop is an orchard:</caption>

```js
"classification": "orchard"
```

**`Example`**

<caption>When the crop is a vineyard:</caption>

```js
"classification": "vineyard"
```

#### Defined in

[v3-specification.ts:1071](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L1071)

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

[v3-specification.ts:910](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L910)

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

[v3-specification.ts:991](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L991)

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

[v3-specification.ts:837](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L837)

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

[v3-specification.ts:950](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L950)

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

[v3-specification.ts:970](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L970)

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

[v3-specification.ts:784](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L784)

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

[v3-specification.ts:933](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L933)

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

[v3-specification.ts:799](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L799)

___

### prune

• **prune**: ``"no"`` \| ``"yes"``

Indicates if the crop was pruned.

**`Example`**

<caption>When the crop was pruned:</caption>

```js
"prune": "yes"
```

**`Example`**

<caption>When the crop was not pruned:</caption>

```js
"prune": "no"
```

#### Defined in

[v3-specification.ts:1089](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L1089)

___

### renewOrClear

• **renewOrClear**: ``"no"`` \| ``"yes"``

Indicates if the crop was renewed or cleared.

**`Example`**

<caption>When the crop was renewed:</caption>

```js
"renewOrClear": "yes"
```

**`Example`**

<caption>When the crop was not renewed:</caption>

```js
"renewOrClear": "no"
```

#### Defined in

[v3-specification.ts:1106](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L1106)

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

[v3-specification.ts:891](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L891)

___

### type

• **type**: ``"avocados"`` \| ``"cherries"`` \| ``"english walnuts"`` \| ``"grape, raisin"`` \| ``"grape, table"`` \| ``"grape, wine (<1390 gdd)"`` \| ``"grape, wine (>1950 gdd)"`` \| ``"grape, wine (1391-1670 gdd)"`` \| ``"grape, wine (1671-1950 gdd)"`` \| ``"grapefruit"`` \| ``"lemons & limes"`` \| ``"olives"`` \| ``"oranges"`` \| ``"peaches and nectarines"`` \| ``"pistachios"`` \| ``"tangerines & mandarins"`` \| ``"almond"``

The COMET equivalent type of the orchard or vineyard crop.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`Example`**

<caption>When the crop planted is "oranges":</caption>

```js
"type": "oranges"
```

#### Defined in

[v3-specification.ts:1050](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L1050)
