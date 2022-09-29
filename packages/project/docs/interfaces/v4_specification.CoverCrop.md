[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / CoverCrop

# Interface: CoverCrop

[v4-specification](../modules/v4_specification.md).CoverCrop

Crop management details and events for cover crops.

**`example`** A crop definition for a cover crop planted in year 2000:

```js
{
 "type": "annual rye",
 "classification": "annual cover",
 // ...CropEvents
}
```

## Hierarchy

- [`Crop`](v4_specification.Crop.md)

  ↳ **`CoverCrop`**

## Table of contents

### Properties

- [burningEvents](v4_specification.CoverCrop.md#burningevents)
- [classification](v4_specification.CoverCrop.md#classification)
- [clearingAndRenewalEvents](v4_specification.CoverCrop.md#clearingandrenewalevents)
- [externalId](v4_specification.CoverCrop.md#externalid)
- [fertilizerEvents](v4_specification.CoverCrop.md#fertilizerevents)
- [grazingEvents](v4_specification.CoverCrop.md#grazingevents)
- [harvestEvents](v4_specification.CoverCrop.md#harvestevents)
- [id](v4_specification.CoverCrop.md#id)
- [irrigationEvents](v4_specification.CoverCrop.md#irrigationevents)
- [limingEvents](v4_specification.CoverCrop.md#limingevents)
- [name](v4_specification.CoverCrop.md#name)
- [organicMatterEvents](v4_specification.CoverCrop.md#organicmatterevents)
- [plantingEvents](v4_specification.CoverCrop.md#plantingevents)
- [pruningEvents](v4_specification.CoverCrop.md#pruningevents)
- [soilOrCropDisturbanceEvents](v4_specification.CoverCrop.md#soilorcropdisturbanceevents)
- [type](v4_specification.CoverCrop.md#type)

## Properties

### burningEvents

• `Optional` **burningEvents**: [`BurningEvent`](v4_specification.BurningEvent.md)[]

Burning events, if applicable.

**`nullable`**

**`default`** []

**`example`** When burning occurred after harvesting:

```js
"burningEvents": [{
 "date": "2010-10-31"
}]
```

**`example`** When no burning occurred:

```js
"burningEvents": []
```

#### Inherited from

[Crop](v4_specification.Crop.md).[burningEvents](v4_specification.Crop.md#burningevents)

#### Defined in

[v4-specification.ts:1488](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1488)

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

[v4-specification.ts:1696](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1696)

___

### clearingAndRenewalEvents

• `Optional` **clearingAndRenewalEvents**: [`ClearingAndRenewalEvent`](v4_specification.ClearingAndRenewalEvent.md)[]

Clearing and renewal events for orchards and vinyards, if applicable.

**`nullable`**

**`default`** []

**`example`** When clearing occurred after harvesting:

```js
"clearingAndRenewalEvents": [{
 "date": "2010-10-31"
}]
```

**`example`** When no clearing or removal occurred:

```js
"clearingAndRenewalEvents": []
```

#### Inherited from

[Crop](v4_specification.Crop.md).[clearingAndRenewalEvents](v4_specification.Crop.md#clearingandrenewalevents)

#### Defined in

[v4-specification.ts:1534](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1534)

___

### externalId

• `Optional` **externalId**: `string`

Crop identifier.  Free form external reference

Used to correlate data back to the originating system and to synchronize repeated imports.

**`nullable`**

**`example`**

```js
"externalId": "corn-456"
```

**`example`**

```js
"externalId": "corn-456-2019"
```

#### Inherited from

[Crop](v4_specification.Crop.md).[externalId](v4_specification.Crop.md#externalid)

#### Defined in

[v4-specification.ts:1252](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1252)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](v4_specification.FertilizerEvent.md)[]

A list of fertilizer events, if applicable.

**`nullable`**

**`example`** When some fertilizer events occurred:

```js
"fertilizerEvents": [
 {
   "date": "2000-10-01",
   "name": "Joe's fertilizer",
   "type": "mixed blends",
   "lbsOfNPerAcre": 10
 }
 // ... other fertilizer events
]
```

#### Inherited from

[Crop](v4_specification.Crop.md).[fertilizerEvents](v4_specification.Crop.md#fertilizerevents)

#### Defined in

[v4-specification.ts:1379](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1379)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](v4_specification.GrazingEvent.md)[]

A list of grazing events, if applicable

**`nullable`**

**`default`** []

**`example`** When some grazing events occurred:

```js
"grazingEvents": [
 {
  "date": "2000-01-01",
  "daysGrazed": "10",
  "percentResidueRemoved": "50"
 }
 // .. additional grazing events
]
```

#### Inherited from

[Crop](v4_specification.Crop.md).[grazingEvents](v4_specification.Crop.md#grazingevents)

#### Defined in

[v4-specification.ts:1465](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1465)

___

### harvestEvents

• `Optional` **harvestEvents**: [`HarvestEvent`](v4_specification.HarvestEvent.md)[]

A list of harvest events, if applicable.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`nullable`**

**`maximum`** 1

**`example`** When crop had at least one harvest event:

```js
 "harvestEvents": [
   // ...list of AnnualCropHarvestEvents or CropManagementEvents
 ]
```

#### Inherited from

[Crop](v4_specification.Crop.md).[harvestEvents](v4_specification.Crop.md#harvestevents)

#### Defined in

[v4-specification.ts:1555](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1555)

___

### id

• `Optional` **id**: `string`

Nori's internal crop identifier.

Used to synchronize repeated imports

**`nullable`** External systems leave this blank for new projects.

**`example`**

```js
"id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
```

#### Inherited from

[Crop](v4_specification.Crop.md).[id](v4_specification.Crop.md#id)

#### Defined in

[v4-specification.ts:1268](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1268)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](v4_specification.IrrigationEvent.md)[]

A list of irrigation events, if applicable.

**`nullable`**

**`example`** When some irrigation events occurred:

```js
"irrigationEvents": [
 {
   "volume": 1,
   "date": "2000-10-01",
 }
 // ... other irrigation events
]
```

#### Inherited from

[Crop](v4_specification.Crop.md).[irrigationEvents](v4_specification.Crop.md#irrigationevents)

#### Defined in

[v4-specification.ts:1421](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1421)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](v4_specification.LimingEvent.md)[]

A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.

**`nullable`**

**`default`** []

**`example`** When some liming events occurred:

```js
"limingEvents": [
 {
   "date": "2000-01-01",
   "type": "crushed limestone",
   "tonsPerAcre": 10,
 }
 //...other liming events
]
```

#### Inherited from

[Crop](v4_specification.Crop.md).[limingEvents](v4_specification.Crop.md#limingevents)

#### Defined in

[v4-specification.ts:1443](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1443)

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

[Crop](v4_specification.Crop.md).[name](v4_specification.Crop.md#name)

#### Defined in

[v4-specification.ts:1230](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1230)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](v4_specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](v4_specification.SlurryOrganicMatterEvent.md))[]

A list of organic matter and manure application events, if applicable.

**`nullable`** during import (explicitly specify null if no organic matter events occurred, otherwise exclude the property or use an empty array `[]`)

**`example`** When some organic matter was applied:

```js
"organicMatterEvents": [
 {
   "date": "2000-10-01",
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

[Crop](v4_specification.Crop.md).[organicMatterEvents](v4_specification.Crop.md#organicmatterevents)

#### Defined in

[v4-specification.ts:1402](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1402)

___

### plantingEvents

• `Optional` **plantingEvents**: [`PlantingEvent`](v4_specification.PlantingEvent.md)[]

The planting event(s) if there were any for the current crop year otherwise empty array or omit property.

This will contain a single event for annuals and none for perennials outside of the planting year.

**`nullable`**

**`maximum`** 1

**`example`** Planting on 2018-03-20

```js
"plantingEvents": [{
 "date": "2018-03-20"
}]
```

**`example`** Perennial planted in a prior year.

```js
"plantingEvents": []
```

#### Inherited from

[Crop](v4_specification.Crop.md).[plantingEvents](v4_specification.Crop.md#plantingevents)

#### Defined in

[v4-specification.ts:1336](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1336)

___

### pruningEvents

• `Optional` **pruningEvents**: [`PruningEvent`](v4_specification.PruningEvent.md)[]

Pruning events, if applicable.

**`nullable`**

**`default`** []

**`example`** When pruning occurred after harvesting:

```js
"pruningEvents": [{
 "date": "2010-10-31"
}]
```

**`example`** When no pruning occurred:

```js
"pruningEvents": []
```

#### Inherited from

[Crop](v4_specification.Crop.md).[pruningEvents](v4_specification.Crop.md#pruningevents)

#### Defined in

[v4-specification.ts:1511](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1511)

___

### soilOrCropDisturbanceEvents

• `Optional` **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v4_specification.SoilOrCropDisturbanceEvent.md)[]

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).

All crops will need to define a soil or crop disturbance event <= the associated `PlantingEvent`.

**`nullable`**

**`example`** When some soil or crop disturbance events occurred:

```js
"soilOrCropDisturbanceEvents": [
 {
   "date": "2000-10-01",
   "type": "mow",
 }
 // ... other soul and crop disturbance events
]
```

#### Inherited from

[Crop](v4_specification.Crop.md).[soilOrCropDisturbanceEvents](v4_specification.Crop.md#soilorcropdisturbanceevents)

#### Defined in

[v4-specification.ts:1358](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1358)

___

### type

• **type**: ``"annual rye"`` \| ``"annual rye - legume"`` \| ``"annual rye - legume - radish"`` \| ``"barley-radish mix"`` \| ``"cereal rye"`` \| ``"cereal rye-crimson clover mix"`` \| ``"clover/wildflowers"`` \| ``"forage radish"`` \| ``"grass-legume mix"`` \| ``"oilseed radish"`` \| ``"radish-crimson clover-barley-dwarf rape mix"`` \| ``"vetch"`` \| ``"winter clover"``

The COMET equivalent type of the crop.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`example`** When the cover crop was annual rye:

```js
"type": "annual rye"
```

#### Defined in

[v4-specification.ts:1681](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1681)
