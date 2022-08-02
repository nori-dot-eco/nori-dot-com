[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / Crop

# Interface: Crop

[v4-specification](../modules/v4_specification.md).Crop

Crop properties relevant to planted crops.

**`example`**

```js
{
 "name": "Corn1",
 "externalId": "f1-corn1",
 "id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
}
```

## Hierarchy

- [`CropEvents`](v4_specification.CropEvents.md)

  ↳ **`Crop`**

  ↳↳ [`OrchardOrVineyardCrop`](v4_specification.OrchardOrVineyardCrop.md)

  ↳↳ [`PerennialCrop`](v4_specification.PerennialCrop.md)

  ↳↳ [`CoverCrop`](v4_specification.CoverCrop.md)

  ↳↳ [`AnnualCrop`](v4_specification.AnnualCrop.md)

## Table of contents

### Properties

- [burningEvents](v4_specification.Crop.md#burningevents)
- [clearingAndRenewalEvents](v4_specification.Crop.md#clearingandrenewalevents)
- [externalId](v4_specification.Crop.md#externalid)
- [fertilizerEvents](v4_specification.Crop.md#fertilizerevents)
- [grazingEvents](v4_specification.Crop.md#grazingevents)
- [harvestEvents](v4_specification.Crop.md#harvestevents)
- [id](v4_specification.Crop.md#id)
- [irrigationEvents](v4_specification.Crop.md#irrigationevents)
- [limingEvents](v4_specification.Crop.md#limingevents)
- [name](v4_specification.Crop.md#name)
- [organicMatterEvents](v4_specification.Crop.md#organicmatterevents)
- [plantingEvents](v4_specification.Crop.md#plantingevents)
- [pruningEvents](v4_specification.Crop.md#pruningevents)
- [soilOrCropDisturbanceEvents](v4_specification.Crop.md#soilorcropdisturbanceevents)

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

[CropEvents](v4_specification.CropEvents.md).[burningEvents](v4_specification.CropEvents.md#burningevents)

#### Defined in

[v4-specification.ts:1463](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1463)

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

[CropEvents](v4_specification.CropEvents.md).[clearingAndRenewalEvents](v4_specification.CropEvents.md#clearingandrenewalevents)

#### Defined in

[v4-specification.ts:1509](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1509)

___

### externalId

• `Optional` **externalId**: `string`

Crop identifier.  Global crop profile or crop+field+year identifier from exporting system.

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

#### Defined in

[v4-specification.ts:1227](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1227)

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

[CropEvents](v4_specification.CropEvents.md).[fertilizerEvents](v4_specification.CropEvents.md#fertilizerevents)

#### Defined in

[v4-specification.ts:1354](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1354)

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

[CropEvents](v4_specification.CropEvents.md).[grazingEvents](v4_specification.CropEvents.md#grazingevents)

#### Defined in

[v4-specification.ts:1440](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1440)

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

[CropEvents](v4_specification.CropEvents.md).[harvestEvents](v4_specification.CropEvents.md#harvestevents)

#### Defined in

[v4-specification.ts:1530](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1530)

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

#### Defined in

[v4-specification.ts:1243](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1243)

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

[CropEvents](v4_specification.CropEvents.md).[irrigationEvents](v4_specification.CropEvents.md#irrigationevents)

#### Defined in

[v4-specification.ts:1396](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1396)

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

[CropEvents](v4_specification.CropEvents.md).[limingEvents](v4_specification.CropEvents.md#limingevents)

#### Defined in

[v4-specification.ts:1418](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1418)

___

### name

• `Optional` **name**: `string`

The name/alias that the crop is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`**

```js
"name": "Joe's corn"
```

#### Defined in

[v4-specification.ts:1205](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1205)

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

[CropEvents](v4_specification.CropEvents.md).[organicMatterEvents](v4_specification.CropEvents.md#organicmatterevents)

#### Defined in

[v4-specification.ts:1377](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1377)

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

[CropEvents](v4_specification.CropEvents.md).[plantingEvents](v4_specification.CropEvents.md#plantingevents)

#### Defined in

[v4-specification.ts:1311](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1311)

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

[CropEvents](v4_specification.CropEvents.md).[pruningEvents](v4_specification.CropEvents.md#pruningevents)

#### Defined in

[v4-specification.ts:1486](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1486)

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

[CropEvents](v4_specification.CropEvents.md).[soilOrCropDisturbanceEvents](v4_specification.CropEvents.md#soilorcropdisturbanceevents)

#### Defined in

[v4-specification.ts:1333](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L1333)
