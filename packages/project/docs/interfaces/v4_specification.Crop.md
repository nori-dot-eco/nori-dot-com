[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / Crop

# Interface: Crop

[v4-specification](../modules/v4_specification.md).Crop

Crop properties relevant to planted crops.

**`Example`**

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

## Table of contents

### Properties

- [burningEvents](v4_specification.Crop.md#burningevents)
- [classification](v4_specification.Crop.md#classification)
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
- [type](v4_specification.Crop.md#type)

## Properties

### burningEvents

• `Optional` **burningEvents**: [`BurningEvent`](v4_specification.BurningEvent.md)[]

Burning events, if applicable.

**`Default`**

[]

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

[CropEvents](v4_specification.CropEvents.md).[burningEvents](v4_specification.CropEvents.md#burningevents)

#### Defined in

[v4-specification.ts:1581](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1581)

___

### classification

• **classification**: ``"annual crop"`` \| ``"perennial"`` \| ``"annual cover"`` \| ``"orchard"`` \| ``"vineyard"``

The crop classification.

You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).

**`Default`**

"annual crop"

**`Example`**

```js
"classification": "annual crop"
```

#### Defined in

[v4-specification.ts:1344](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1344)

___

### clearingAndRenewalEvents

• `Optional` **clearingAndRenewalEvents**: [`ClearingAndRenewalEvent`](v4_specification.ClearingAndRenewalEvent.md)[]

Clearing and renewal events for orchards and vineyards, if applicable.

**`Default`**

[]

**`Min Items`**

0

**`Additional Items`**

false

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

[CropEvents](v4_specification.CropEvents.md).[clearingAndRenewalEvents](v4_specification.CropEvents.md#clearingandrenewalevents)

#### Defined in

[v4-specification.ts:1627](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1627)

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

#### Defined in

[v4-specification.ts:1293](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1293)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](v4_specification.FertilizerEvent.md)[]

A list of fertilizer events, if applicable.

**`Default`**

[]

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

[CropEvents](v4_specification.CropEvents.md).[fertilizerEvents](v4_specification.CropEvents.md#fertilizerevents)

#### Defined in

[v4-specification.ts:1466](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1466)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](v4_specification.GrazingEvent.md)[]

A list of grazing events, if applicable

**`Default`**

[]

**`Min Items`**

0

**`Additional Items`**

false

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

[CropEvents](v4_specification.CropEvents.md).[grazingEvents](v4_specification.CropEvents.md#grazingevents)

#### Defined in

[v4-specification.ts:1556](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1556)

___

### harvestEvents

• `Optional` **harvestEvents**: [`HarvestEvent`](v4_specification.HarvestEvent.md)[]

A list of harvest events, if applicable.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`Default`**

[]

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

[CropEvents](v4_specification.CropEvents.md).[harvestEvents](v4_specification.CropEvents.md#harvestevents)

#### Defined in

[v4-specification.ts:1649](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1649)

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

#### Defined in

[v4-specification.ts:1310](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1310)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](v4_specification.IrrigationEvent.md)[]

A list of irrigation events, if applicable.

**`Default`**

[]

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

[CropEvents](v4_specification.CropEvents.md).[irrigationEvents](v4_specification.CropEvents.md#irrigationevents)

#### Defined in

[v4-specification.ts:1512](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1512)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](v4_specification.LimingEvent.md)[]

A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.

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

[CropEvents](v4_specification.CropEvents.md).[limingEvents](v4_specification.CropEvents.md#limingevents)

#### Defined in

[v4-specification.ts:1534](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1534)

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

#### Defined in

[v4-specification.ts:1271](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1271)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](v4_specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](v4_specification.SlurryOrganicMatterEvent.md))[]

A list of organic matter and manure application events, if applicable.

**`Default`**

[]

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

[CropEvents](v4_specification.CropEvents.md).[organicMatterEvents](v4_specification.CropEvents.md#organicmatterevents)

#### Defined in

[v4-specification.ts:1491](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1491)

___

### plantingEvents

• `Optional` **plantingEvents**: [`PlantingEvent`](v4_specification.PlantingEvent.md)[]

The planting event(s) if there were any for the current crop year otherwise empty array or omit property.

This will contain a single event for annuals and none for perennials outside of the planting year.

**`Default`**

[]

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

[CropEvents](v4_specification.CropEvents.md).[plantingEvents](v4_specification.CropEvents.md#plantingevents)

#### Defined in

[v4-specification.ts:1419](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1419)

___

### pruningEvents

• `Optional` **pruningEvents**: [`PruningEvent`](v4_specification.PruningEvent.md)[]

Pruning events, if applicable.

**`Default`**

[]

**`Min Items`**

0

**`Additional Items`**

false

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

[CropEvents](v4_specification.CropEvents.md).[pruningEvents](v4_specification.CropEvents.md#pruningevents)

#### Defined in

[v4-specification.ts:1604](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1604)

___

### soilOrCropDisturbanceEvents

• `Optional` **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v4_specification.SoilOrCropDisturbanceEvent.md)[]

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).

All crops will need to define a soil or crop disturbance event <= the associated `PlantingEvent`.

**`Default`**

[]

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

[CropEvents](v4_specification.CropEvents.md).[soilOrCropDisturbanceEvents](v4_specification.CropEvents.md#soilorcropdisturbanceevents)

#### Defined in

[v4-specification.ts:1443](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1443)

___

### type

• **type**: ``"alfalfa"`` \| ``"austrian winter pea"`` \| ``"barley"`` \| ``"barley-bin run wheat mix"`` \| ``"black beans"`` \| ``"broccoli"`` \| ``"broccoli-coast"`` \| ``"broccoli-desert"`` \| ``"buckwheat"`` \| ``"cabbage"`` \| ``"camelina"`` \| ``"canola"`` \| ``"cantaloupes"`` \| ``"carrots"`` \| ``"cauliflower"`` \| ``"celery"`` \| ``"chick peas"`` \| ``"clover"`` \| ``"corn"`` \| ``"corn silage"`` \| ``"cotton"`` \| ``"cucumbers"`` \| ``"dry beans"`` \| ``"dry field beans"`` \| ``"dry field pea"`` \| ``"durum wheat"`` \| ``"eggplants"`` \| ``"fallow"`` \| ``"flaxseed"`` \| ``"garbanzo beans"`` \| ``"garlic"`` \| ``"gourds"`` \| ``"greens"`` \| ``"hemp (for fiber)"`` \| ``"hemp (for flowers)"`` \| ``"hemp (for seed)"`` \| ``"herbs"`` \| ``"honeydew melons"`` \| ``"lentils"`` \| ``"lettuce"`` \| ``"lettuce-head"`` \| ``"lettuce-leaf"`` \| ``"lettuce-romaine"`` \| ``"millet"`` \| ``"misc vegs & fruits"`` \| ``"mustard"`` \| ``"navy beans"`` \| ``"oats"`` \| ``"onions"`` \| ``"other small grains"`` \| ``"peanuts"`` \| ``"peas"`` \| ``"peppers"`` \| ``"pinto beans"`` \| ``"pop or om corn"`` \| ``"potatoes"`` \| ``"pumpkins"`` \| ``"radishes"`` \| ``"rapeseed"`` \| ``"rice"`` \| ``"rice - flooded"`` \| ``"rye"`` \| ``"safflower"`` \| ``"sorghum"`` \| ``"sorghum silage"`` \| ``"soybeans"`` \| ``"speltz"`` \| ``"spring wheat"`` \| ``"squash"`` \| ``"strawberries"`` \| ``"sugarbeets"`` \| ``"sunflower"`` \| ``"sweet corn"`` \| ``"sweet potatoes"`` \| ``"switchgrass"`` \| ``"tobacco"`` \| ``"tomatoes"`` \| ``"tomatoes, fresh"`` \| ``"tomatoes, processing"`` \| ``"triticale"`` \| ``"turnips"`` \| ``"watermelons"`` \| ``"wheat"`` \| ``"winter barley"`` \| ``"winter grain-other"`` \| ``"winter oats"`` \| ``"winter wheat"`` \| ``"annual rye"`` \| ``"annual rye - legume"`` \| ``"annual rye - legume - radish"`` \| ``"barley-radish mix"`` \| ``"cereal rye"`` \| ``"cereal rye-crimson clover mix"`` \| ``"clover/wildflowers"`` \| ``"forage radish"`` \| ``"grass-legume mix"`` \| ``"oilseed radish"`` \| ``"radish-crimson clover-barley-dwarf rape mix"`` \| ``"sugar beets"`` \| ``"vetch"`` \| ``"winter clover"`` \| ``"almonds"`` \| ``"apples"`` \| ``"apricots"`` \| ``"avocados"`` \| ``"blueberries"`` \| ``"caneberries"`` \| ``"cherries"`` \| ``"citrus"`` \| ``"cranberries"`` \| ``"english walnuts"`` \| ``"grape, raisin"`` \| ``"grape, table"`` \| ``"grape, wine (<1390 gdd)"`` \| ``"grape, wine (>1950 gdd)"`` \| ``"grape, wine (1391-1670 gdd)"`` \| ``"grape, wine (1671-1950 gdd)"`` \| ``"grapefruit"`` \| ``"grapes"`` \| ``"hazelnuts"`` \| ``"lemons"`` \| ``"lemons & limes"`` \| ``"limes"`` \| ``"nectarines"`` \| ``"olives"`` \| ``"oranges"`` \| ``"peaches"`` \| ``"peaches and nectarines"`` \| ``"pears"`` \| ``"pecans"`` \| ``"pistachios"`` \| ``"plums"`` \| ``"pomegranates"`` \| ``"prunes"`` \| ``"tangerines & mandarins"`` \| ``"walnuts"`` \| ``"asparagus"`` \| ``"grass"`` \| ``"grassland herbaceous"`` \| ``"herbaceous wetlands"`` \| ``"hops"`` \| ``"mint"`` \| ``"other hay/non alfalfa"`` \| ``"pasture/grass"`` \| ``"pasture/hay"`` \| ``"sod/grass seed"`` \| ``"strawberry"`` \| ``"sugarcane"``

Crop type name from Nori's known crop names.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`Error Message`**

must specify one of the allowed crop types=

**`Example`**

<caption>When the crop is corn:</caption>

```js
"type": "corn"
```

#### Defined in

[v4-specification.ts:1326](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v4-specification.ts#L1326)
