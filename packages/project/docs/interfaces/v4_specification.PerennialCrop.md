[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / PerennialCrop

# Interface: PerennialCrop

[v4-specification](../modules/v4_specification.md).PerennialCrop

Perennial crop details.

**`Example`**

<caption>A crop definition for alfalfa managed as a perennial:</caption>

```js
{
 "type": "alfalfa",
 "classification": "perennial",
 // ...CropEvents
}
```

## Hierarchy

- [`Crop`](v4_specification.Crop.md)

  ↳ **`PerennialCrop`**

## Table of contents

### Properties

- [burningEvents](v4_specification.PerennialCrop.md#burningevents)
- [classification](v4_specification.PerennialCrop.md#classification)
- [clearingAndRenewalEvents](v4_specification.PerennialCrop.md#clearingandrenewalevents)
- [externalId](v4_specification.PerennialCrop.md#externalid)
- [fertilizerEvents](v4_specification.PerennialCrop.md#fertilizerevents)
- [grazingEvents](v4_specification.PerennialCrop.md#grazingevents)
- [harvestEvents](v4_specification.PerennialCrop.md#harvestevents)
- [id](v4_specification.PerennialCrop.md#id)
- [irrigationEvents](v4_specification.PerennialCrop.md#irrigationevents)
- [limingEvents](v4_specification.PerennialCrop.md#limingevents)
- [name](v4_specification.PerennialCrop.md#name)
- [organicMatterEvents](v4_specification.PerennialCrop.md#organicmatterevents)
- [plantingEvents](v4_specification.PerennialCrop.md#plantingevents)
- [pruningEvents](v4_specification.PerennialCrop.md#pruningevents)
- [soilOrCropDisturbanceEvents](v4_specification.PerennialCrop.md#soilorcropdisturbanceevents)
- [type](v4_specification.PerennialCrop.md#type)

## Properties

### burningEvents

• `Optional` **burningEvents**: [`BurningEvent`](v4_specification.BurningEvent.md)[]

Burning events, if applicable.

**`Nullable`**

**`Min Items`**

0

**`Additional Items`**

false

**`Default`**

[]

**`Example`**

<caption>When burning occurred after harvesting:</caption>

```js
"burningEvents": [{
 "date": "2010-10-31"
}]
```

**`Example`**

<caption>When no burning occurred:</caption>

```js
"burningEvents": []
```

#### Inherited from

[Crop](v4_specification.Crop.md).[burningEvents](v4_specification.Crop.md#burningevents)

#### Defined in

[v4-specification.ts:1546](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1546)

___

### classification

• **classification**: ``"perennial"``

The crop classification.

You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).

**`Default`**

"perennial"

**`Example`**

```js
"classification": "perennial"
```

#### Defined in

[v4-specification.ts:1714](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1714)

___

### clearingAndRenewalEvents

• `Optional` **clearingAndRenewalEvents**: [`ClearingAndRenewalEvent`](v4_specification.ClearingAndRenewalEvent.md)[]

Clearing and renewal events for orchards and vineyards, if applicable.

**`Nullable`**

**`Min Items`**

0

**`Additional Items`**

false

**`Default`**

[]

**`Example`**

<caption>When clearing occurred after harvesting:</caption>

```js
"clearingAndRenewalEvents": [{
 "date": "2010-10-31"
}]
```

**`Example`**

<caption>When no clearing or removal occurred:</caption>

```js
"clearingAndRenewalEvents": []
```

#### Inherited from

[Crop](v4_specification.Crop.md).[clearingAndRenewalEvents](v4_specification.Crop.md#clearingandrenewalevents)

#### Defined in

[v4-specification.ts:1596](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1596)

___

### externalId

• `Optional` **externalId**: `string`

Crop identifier.  Free form external reference

Used to correlate data back to the originating system and to synchronize repeated imports.

**`Nullable`**

**`Example`**

```js
"externalId": "corn-456"
```

**`Example`**

```js
"externalId": "corn-456-2019"
```

#### Inherited from

[Crop](v4_specification.Crop.md).[externalId](v4_specification.Crop.md#externalid)

#### Defined in

[v4-specification.ts:1294](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1294)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](v4_specification.FertilizerEvent.md)[]

A list of fertilizer events, if applicable.

**`Nullable`**

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some fertilizer events occurred:</caption>

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

[v4-specification.ts:1427](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1427)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](v4_specification.GrazingEvent.md)[]

A list of grazing events, if applicable

**`Nullable`**

**`Min Items`**

0

**`Additional Items`**

false

**`Default`**

[]

**`Example`**

<caption>When some grazing events occurred:</caption>

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

[v4-specification.ts:1521](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1521)

___

### harvestEvents

• `Optional` **harvestEvents**: [`HarvestEvent`](v4_specification.HarvestEvent.md)[]

A list of harvest events, if applicable.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`Nullable`**

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When crop had at least one harvest event:</caption>

```js
 "harvestEvents": [
   // ...list of AnnualCropHarvestEvents or CropManagementEvents
 ]
```

#### Inherited from

[Crop](v4_specification.Crop.md).[harvestEvents](v4_specification.Crop.md#harvestevents)

#### Defined in

[v4-specification.ts:1618](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1618)

___

### id

• `Optional` **id**: `string`

Nori's internal crop identifier.

Used to synchronize repeated imports

**`Nullable`**

External systems pass null or omit the property for new projects.

**`Example`**

```js
"id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
```

#### Inherited from

[Crop](v4_specification.Crop.md).[id](v4_specification.Crop.md#id)

#### Defined in

[v4-specification.ts:1310](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1310)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](v4_specification.IrrigationEvent.md)[]

A list of irrigation events, if applicable.

**`Nullable`**

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some irrigation events occurred:</caption>

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

[v4-specification.ts:1473](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1473)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](v4_specification.LimingEvent.md)[]

A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.

**`Nullable`**

**`Default`**

[]

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some liming events occurred:</caption>

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

[v4-specification.ts:1497](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1497)

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

[Crop](v4_specification.Crop.md).[name](v4_specification.Crop.md#name)

#### Defined in

[v4-specification.ts:1272](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1272)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](v4_specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](v4_specification.SlurryOrganicMatterEvent.md))[]

A list of organic matter and manure application events, if applicable.

**`Nullable`**

during import (explicitly specify null if no organic matter events occurred, otherwise exclude the property or use an empty array `[]`)

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some organic matter was applied:</caption>

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

[v4-specification.ts:1452](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1452)

___

### plantingEvents

• `Optional` **plantingEvents**: [`PlantingEvent`](v4_specification.PlantingEvent.md)[]

The planting event(s) if there were any for the current crop year otherwise empty array or omit property.

This will contain a single event for annuals and none for perennials outside of the planting year.

**`Nullable`**

**`Min Items`**

0

**`Max Items`**

1

**`Additional Items`**

false

**`Example`**

<caption>Planting on 2018-03-20</caption>

```js
"plantingEvents": [{
 "date": "2018-03-20"
}]
```

**`Example`**

<caption>Perennial planted in a prior year.</caption>

```js
"plantingEvents": []
```

#### Inherited from

[Crop](v4_specification.Crop.md).[plantingEvents](v4_specification.Crop.md#plantingevents)

#### Defined in

[v4-specification.ts:1380](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1380)

___

### pruningEvents

• `Optional` **pruningEvents**: [`PruningEvent`](v4_specification.PruningEvent.md)[]

Pruning events, if applicable.

**`Nullable`**

**`Min Items`**

0

**`Additional Items`**

false

**`Default`**

[]

**`Example`**

<caption>When pruning occurred after harvesting:</caption>

```js
"pruningEvents": [{
 "date": "2010-10-31"
}]
```

**`Example`**

<caption>When no pruning occurred:</caption>

```js
"pruningEvents": []
```

#### Inherited from

[Crop](v4_specification.Crop.md).[pruningEvents](v4_specification.Crop.md#pruningevents)

#### Defined in

[v4-specification.ts:1571](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1571)

___

### soilOrCropDisturbanceEvents

• `Optional` **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v4_specification.SoilOrCropDisturbanceEvent.md)[]

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).

All crops will need to define a soil or crop disturbance event <= the associated `PlantingEvent`.

**`Nullable`**

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some soil or crop disturbance events occurred:</caption>

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

[v4-specification.ts:1404](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1404)

___

### type

• **type**: ``"alfalfa"`` \| ``"clover"`` \| ``"clover/wildflowers"`` \| ``"grass-legume mix"`` \| ``"vetch"`` \| ``"asparagus"`` \| ``"grass"`` \| ``"grassland herbaceous"`` \| ``"herbaceous wetlands"`` \| ``"hops"`` \| ``"mint"`` \| ``"other hay/non alfalfa"`` \| ``"pasture/grass"`` \| ``"pasture/hay"`` \| ``"sod/grass seed"`` \| ``"strawberry"`` \| ``"sugarcane"``

The COMET equivalent type of the perennial crop

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`Example`**

<caption>When the perennial crop planted was alfalfa:</caption>

```js
"type": "alfalfa"
```

#### Defined in

[v4-specification.ts:1699](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1699)
