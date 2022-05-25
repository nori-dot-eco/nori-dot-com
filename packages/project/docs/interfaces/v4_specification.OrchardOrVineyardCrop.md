[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / OrchardOrVineyardCrop

# Interface: OrchardOrVineyardCrop

[v4-specification](../modules/v4_specification.md).OrchardOrVineyardCrop

Crop management details and events for orchard and vineyard crops.

**`example`** A crop definition for an orchard that was:

```js
{
 "type": "oranges",
 "classification": "orchard",
 // ...CropEvents
}
```

## Hierarchy

- [`Crop`](v4_specification.Crop.md)

  ↳ **`OrchardOrVineyardCrop`**

## Table of contents

### Properties

- [burningEvents](v4_specification.OrchardOrVineyardCrop.md#burningevents)
- [classification](v4_specification.OrchardOrVineyardCrop.md#classification)
- [clearingAndRenewalEvents](v4_specification.OrchardOrVineyardCrop.md#clearingandrenewalevents)
- [externalId](v4_specification.OrchardOrVineyardCrop.md#externalid)
- [fertilizerEvents](v4_specification.OrchardOrVineyardCrop.md#fertilizerevents)
- [grazingEvents](v4_specification.OrchardOrVineyardCrop.md#grazingevents)
- [harvestEvents](v4_specification.OrchardOrVineyardCrop.md#harvestevents)
- [id](v4_specification.OrchardOrVineyardCrop.md#id)
- [irrigationEvents](v4_specification.OrchardOrVineyardCrop.md#irrigationevents)
- [limingEvents](v4_specification.OrchardOrVineyardCrop.md#limingevents)
- [name](v4_specification.OrchardOrVineyardCrop.md#name)
- [organicMatterEvents](v4_specification.OrchardOrVineyardCrop.md#organicmatterevents)
- [plantingEvents](v4_specification.OrchardOrVineyardCrop.md#plantingevents)
- [pruningEvents](v4_specification.OrchardOrVineyardCrop.md#pruningevents)
- [soilOrCropDisturbanceEvents](v4_specification.OrchardOrVineyardCrop.md#soilorcropdisturbanceevents)
- [type](v4_specification.OrchardOrVineyardCrop.md#type)

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

[v4-specification.ts:1451](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1451)

___

### classification

• **classification**: ``"orchard"`` \| ``"vineyard"``

The crop classification.

You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).

Note: if a crop ever changes classifications during the lifetime of the field (i.e. From an annual crop to a perennial), define the crop as a new crop in a new `CropYear` object and assign it the `plantingYear` that the crop switched types. In addition, if the crop is switching types, a harvest or kill event must be defined to signal the end of the life of this crop being the initial crop `type`.

**`example`** When the crop is an orchard:

```js
"classification": "orchard"
```

**`example`** When the crop is a vineyard:

```js
"classification": "vineyard"
```

#### Defined in

[v4-specification.ts:1569](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1569)

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

[v4-specification.ts:1497](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1497)

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

#### Inherited from

[Crop](v4_specification.Crop.md).[externalId](v4_specification.Crop.md#externalid)

#### Defined in

[v4-specification.ts:1215](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1215)

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

[v4-specification.ts:1342](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1342)

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

[v4-specification.ts:1428](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1428)

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

[v4-specification.ts:1518](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1518)

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

[v4-specification.ts:1231](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1231)

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

[v4-specification.ts:1384](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1384)

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

[v4-specification.ts:1406](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1406)

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

[v4-specification.ts:1193](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1193)

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

[v4-specification.ts:1365](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1365)

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

[v4-specification.ts:1299](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1299)

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

[v4-specification.ts:1474](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1474)

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

[v4-specification.ts:1321](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1321)

___

### type

• **type**: ``"almonds"`` \| ``"apples"`` \| ``"apricots"`` \| ``"avocados"`` \| ``"blueberries"`` \| ``"caneberries"`` \| ``"cherries"`` \| ``"citrus"`` \| ``"cranberries"`` \| ``"english walnuts"`` \| ``"grape, raisin"`` \| ``"grape, table"`` \| ``"grape, wine (<1390 gdd)"`` \| ``"grape, wine (>1950 gdd)"`` \| ``"grape, wine (1391-1670 gdd)"`` \| ``"grape, wine (1671-1950 gdd)"`` \| ``"grapefruit"`` \| ``"grapes"`` \| ``"hazelnuts"`` \| ``"lemons"`` \| ``"lemons & limes"`` \| ``"limes"`` \| ``"nectarines"`` \| ``"olives"`` \| ``"oranges"`` \| ``"peaches"`` \| ``"peaches and nectarines"`` \| ``"pears"`` \| ``"pecans"`` \| ``"pistachios"`` \| ``"plums"`` \| ``"pomegranates"`` \| ``"prunes"`` \| ``"tangerines & mandarins"`` \| ``"walnuts"``

The COMET equivalent type of the orchard or vineyard crop.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`example`** When the crop planted is "oranges":

```js
"type": "oranges"
```

#### Defined in

[v4-specification.ts:1548](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1548)
