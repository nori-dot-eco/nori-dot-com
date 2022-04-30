[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / PerennialCrop

# Interface: PerennialCrop

[specification](../modules/specification.md).PerennialCrop

Perennial crop details.

**`example`** A crop definition for alfalfa managed as a perennial:

```js
{
 "type": "alfalfa",
 "classification": "perennial",
 "plantingDate": "01/01/2000"
 // ...CropEvents
}
```

## Hierarchy

- [`CropEvents`](specification.CropEvents.md)

- [`HarvestableCropEvents`](specification.HarvestableCropEvents.md)

- [`PlantedCrop`](specification.PlantedCrop.md)

  ↳ **`PerennialCrop`**

## Table of contents

### Properties

- [burningEvent](specification.PerennialCrop.md#burningevent)
- [classification](specification.PerennialCrop.md#classification)
- [fertilizerEvents](specification.PerennialCrop.md#fertilizerevents)
- [grazingEvents](specification.PerennialCrop.md#grazingevents)
- [harvestEvents](specification.PerennialCrop.md#harvestevents)
- [id](specification.PerennialCrop.md#id)
- [irrigationEvents](specification.PerennialCrop.md#irrigationevents)
- [limingEvents](specification.PerennialCrop.md#limingevents)
- [name](specification.PerennialCrop.md#name)
- [organicMatterEvents](specification.PerennialCrop.md#organicmatterevents)
- [plantingDate](specification.PerennialCrop.md#plantingdate)
- [soilOrCropDisturbanceEvents](specification.PerennialCrop.md#soilorcropdisturbanceevents)
- [type](specification.PerennialCrop.md#type)

## Properties

### burningEvent

• `Optional` **burningEvent**: [`BurningEvent`](specification.BurningEvent.md)

A burning event, if applicable.

**`nullable`** if no burning ever occurred, explicitly specify `burningEvent` as `null`

**`default`** { "type": "no burning" }

**`example`** When burning occurred after harvesting:

```js
"burningEvent": {
 "type": "after harvesting"
}
```

**`example`** When no burning occurred:

```js
"burningEvent": null
```

#### Inherited from

[CropEvents](specification.CropEvents.md).[burningEvent](specification.CropEvents.md#burningevent)

#### Defined in

[specification.ts:1024](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1024)

___

### classification

• **classification**: ``"perennial"``

The crop classification.

You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).

**`default`** "perennial"

**`example`**

```js
"classification": "perennial"
```

#### Defined in

[specification.ts:1165](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1165)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](specification.FertilizerEvent.md)[]

A list of fertilizer events, if applicable.

**`example`** When some fertilizer events occurred:

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

[CropEvents](specification.CropEvents.md).[fertilizerEvents](specification.CropEvents.md#fertilizerevents)

#### Defined in

[specification.ts:920](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L920)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](specification.GrazingEvent.md)[]

A list of grazing events, if applicable

**`nullable`** during import (explicitly specify null if grazing did not occur, otherwise exclude the property or use an empty array `[]`)

**`example`** When some grazing events occurred:

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

[CropEvents](specification.CropEvents.md).[grazingEvents](specification.CropEvents.md#grazingevents)

#### Defined in

[specification.ts:1001](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1001)

___

### harvestEvents

• `Optional` **harvestEvents**: ([`AnnualCropHarvestEvent`](specification.AnnualCropHarvestEvent.md) \| [`CropManagementEvent`](specification.CropManagementEvent.md))[]

A list of harvest events, if applicable.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`example`** When crop had at least one harvest event:

```js
 "harvestEvents": [
   // ...list of AnnualCropHarvestEvents or CropManagementEvents
 ]
```

#### Inherited from

[HarvestableCropEvents](specification.HarvestableCropEvents.md).[harvestEvents](specification.HarvestableCropEvents.md#harvestevents)

#### Defined in

[specification.ts:847](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L847)

___

### id

• `Optional` **id**: `string`

Optional crop identifier.  Global crop profile or crop+field+year identifier from exporting system.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`example`**

```js
"id": "corn-456"
```

**`example`**

```js
"id": "corn-456-2019"
```

#### Inherited from

[PlantedCrop](specification.PlantedCrop.md).[id](specification.PlantedCrop.md#id)

#### Defined in

[specification.ts:809](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L809)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](specification.IrrigationEvent.md)[]

A list of irrigation events, if applicable.

**`example`** When some irrigation events occurred:

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

[CropEvents](specification.CropEvents.md).[irrigationEvents](specification.CropEvents.md#irrigationevents)

#### Defined in

[specification.ts:960](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L960)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](specification.LimingEvent.md)[]

A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.

**`nullable`** during import (explicitly specify null if no liming events occurred, otherwise exclude the property or use an empty array `[]`)

**`example`** When some liming events occurred:

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

[CropEvents](specification.CropEvents.md).[limingEvents](specification.CropEvents.md#limingevents)

#### Defined in

[specification.ts:980](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L980)

___

### name

• `Optional` **name**: `string`

The name/alias that the crop is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`**

```js
"name": "Joe's corn"
```

#### Inherited from

[PlantedCrop](specification.PlantedCrop.md).[name](specification.PlantedCrop.md#name)

#### Defined in

[specification.ts:774](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L774)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](specification.SlurryOrganicMatterEvent.md))[]

A list of organic matter and manure application events, if applicable.

**`nullable`** during import (explicitly specify null if no organic matter events occurred, otherwise exclude the property or use an empty array `[]`)

**`example`** When some organic matter was applied:

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

[CropEvents](specification.CropEvents.md).[organicMatterEvents](specification.CropEvents.md#organicmatterevents)

#### Defined in

[specification.ts:943](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L943)

___

### plantingDate

• **plantingDate**: `string`

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`.

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** When the crop was planted on January 1st of year 2000:

```js
"plantingDate": "01/01/2000"
```

#### Inherited from

[PlantedCrop](specification.PlantedCrop.md).[plantingDate](specification.PlantedCrop.md#plantingdate)

#### Defined in

[specification.ts:789](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L789)

___

### soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](specification.SoilOrCropDisturbanceEvent.md)[]

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`.

**`example`** When some soil or crop disturbance events occurred:

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

[CropEvents](specification.CropEvents.md).[soilOrCropDisturbanceEvents](specification.CropEvents.md#soilorcropdisturbanceevents)

#### Defined in

[specification.ts:901](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L901)

___

### type

• **type**: ``"grass-legume mix"`` \| ``"strawberry"`` \| ``"switchgrass"`` \| ``"alfalfa"`` \| ``"clover"`` \| ``"grass"``

The COMET equivalent type of the perennial crop

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`example`** When the perennial crop planted was alfalfa:

```js
"type": "alfalfa"
```

#### Defined in

[specification.ts:1150](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1150)
