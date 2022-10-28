[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / OrchardOrVineyardCrop

# Interface: OrchardOrVineyardCrop

[v4-specification](../modules/v4_specification.md).OrchardOrVineyardCrop

Crop management details and events for orchard and vineyard crops.

**`Example`**

<caption>A crop definition for an orchard that was:</caption>

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

[v4-specification.ts:1546](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1546)

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

[v4-specification.ts:1669](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1669)

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

[v4-specification.ts:1596](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1596)

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

[v4-specification.ts:1294](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1294)

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

[v4-specification.ts:1427](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1427)

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

[v4-specification.ts:1521](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1521)

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

[v4-specification.ts:1618](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1618)

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

[v4-specification.ts:1310](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1310)

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

[v4-specification.ts:1473](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1473)

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

[v4-specification.ts:1497](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1497)

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

[v4-specification.ts:1272](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1272)

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

[v4-specification.ts:1452](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1452)

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

[v4-specification.ts:1380](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1380)

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

[v4-specification.ts:1571](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1571)

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

[v4-specification.ts:1404](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1404)

___

### type

• **type**: ``"almonds"`` \| ``"apples"`` \| ``"apricots"`` \| ``"avocados"`` \| ``"blueberries"`` \| ``"caneberries"`` \| ``"cherries"`` \| ``"citrus"`` \| ``"cranberries"`` \| ``"english walnuts"`` \| ``"grape, raisin"`` \| ``"grape, table"`` \| ``"grape, wine (<1390 gdd)"`` \| ``"grape, wine (>1950 gdd)"`` \| ``"grape, wine (1391-1670 gdd)"`` \| ``"grape, wine (1671-1950 gdd)"`` \| ``"grapefruit"`` \| ``"grapes"`` \| ``"hazelnuts"`` \| ``"lemons"`` \| ``"lemons & limes"`` \| ``"limes"`` \| ``"nectarines"`` \| ``"olives"`` \| ``"oranges"`` \| ``"peaches"`` \| ``"peaches and nectarines"`` \| ``"pears"`` \| ``"pecans"`` \| ``"pistachios"`` \| ``"plums"`` \| ``"pomegranates"`` \| ``"prunes"`` \| ``"tangerines & mandarins"`` \| ``"walnuts"``

The COMET equivalent type of the orchard or vineyard crop.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`Example`**

<caption>When the crop planted is "oranges":</caption>

```js
"type": "oranges"
```

#### Defined in

[v4-specification.ts:1648](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v4-specification.ts#L1648)
