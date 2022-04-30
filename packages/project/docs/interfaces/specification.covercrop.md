[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / CoverCrop

# Interface: CoverCrop

[specification](../modules/specification.md).CoverCrop

Crop management details and events for cover crops.

**`example`** A crop definition for a cover crop planted in year 2000:

```js
{
 "type": "annual rye",
 "classification": "annual cover",
 "plantingDate": "01/01/2000"
 // ...CropEvents
}
```

## Hierarchy

- [`CropEvents`](specification.CropEvents.md)

- [`PlantedCrop`](specification.PlantedCrop.md)

  ↳ **`CoverCrop`**

## Table of contents

### Properties

- [burningEvent](specification.CoverCrop.md#burningevent)
- [classification](specification.CoverCrop.md#classification)
- [fertilizerEvents](specification.CoverCrop.md#fertilizerevents)
- [grazingEvents](specification.CoverCrop.md#grazingevents)
- [id](specification.CoverCrop.md#id)
- [irrigationEvents](specification.CoverCrop.md#irrigationevents)
- [limingEvents](specification.CoverCrop.md#limingevents)
- [name](specification.CoverCrop.md#name)
- [organicMatterEvents](specification.CoverCrop.md#organicmatterevents)
- [plantingDate](specification.CoverCrop.md#plantingdate)
- [soilOrCropDisturbanceEvents](specification.CoverCrop.md#soilorcropdisturbanceevents)
- [type](specification.CoverCrop.md#type)

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

• **classification**: ``"annual cover"``

The crop classification.

You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).

**`default`** "annual cover"

**`example`**

```js
"classification": "annual cover"
```

#### Defined in

[specification.ts:1211](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1211)

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

• **type**: ``"annual rye"`` \| ``"annual rye - legume"`` \| ``"annual rye - legume - radish"`` \| ``"austrian winter pea"`` \| ``"cereal rye"`` \| ``"forage radish"`` \| ``"oilseed radish"`` \| ``"vetch"`` \| ``"winter grain-other"``

The COMET equivalent type of the crop.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`example`** When the cover crop was annual rye:

```js
"type": "annual rye"
```

#### Defined in

[specification.ts:1196](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1196)
