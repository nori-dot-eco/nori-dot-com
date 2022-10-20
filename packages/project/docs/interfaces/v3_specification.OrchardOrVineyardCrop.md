[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / OrchardOrVineyardCrop

# Interface: OrchardOrVineyardCrop

[v3-specification](../modules/v3_specification.md).OrchardOrVineyardCrop

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

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[burningEvent](v3_specification.CropEvents.md#burningevent)

#### Defined in

[v3-specification.ts:1004](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L1004)

___

### classification

• **classification**: ``"orchard"`` \| ``"vineyard"``

#### Defined in

[v3-specification.ts:1061](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L1061)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](v3_specification.FertilizerEvent.md)[]

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[fertilizerEvents](v3_specification.CropEvents.md#fertilizerevents)

#### Defined in

[v3-specification.ts:900](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L900)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](v3_specification.GrazingEvent.md)[]

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[grazingEvents](v3_specification.CropEvents.md#grazingevents)

#### Defined in

[v3-specification.ts:981](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L981)

___

### harvestEvents

• `Optional` **harvestEvents**: ([`AnnualCropHarvestEvent`](v3_specification.AnnualCropHarvestEvent.md) \| [`CropManagementEvent`](v3_specification.CropManagementEvent.md))[]

#### Inherited from

[HarvestableCropEvents](v3_specification.HarvestableCropEvents.md).[harvestEvents](v3_specification.HarvestableCropEvents.md#harvestevents)

#### Defined in

[v3-specification.ts:827](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L827)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](v3_specification.IrrigationEvent.md)[]

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[irrigationEvents](v3_specification.CropEvents.md#irrigationevents)

#### Defined in

[v3-specification.ts:940](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L940)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](v3_specification.LimingEvent.md)[]

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[limingEvents](v3_specification.CropEvents.md#limingevents)

#### Defined in

[v3-specification.ts:960](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L960)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[PlantedCrop](v3_specification.PlantedCrop.md).[name](v3_specification.PlantedCrop.md#name)

#### Defined in

[v3-specification.ts:774](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L774)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](v3_specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](v3_specification.SlurryOrganicMatterEvent.md))[]

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[organicMatterEvents](v3_specification.CropEvents.md#organicmatterevents)

#### Defined in

[v3-specification.ts:923](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L923)

___

### plantingDate

• **plantingDate**: `string`

#### Inherited from

[PlantedCrop](v3_specification.PlantedCrop.md).[plantingDate](v3_specification.PlantedCrop.md#plantingdate)

#### Defined in

[v3-specification.ts:789](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L789)

___

### prune

• **prune**: ``"no"`` \| ``"yes"``

#### Defined in

[v3-specification.ts:1079](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L1079)

___

### renewOrClear

• **renewOrClear**: ``"no"`` \| ``"yes"``

#### Defined in

[v3-specification.ts:1096](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L1096)

___

### soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v3_specification.SoilOrCropDisturbanceEvent.md)[]

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[soilOrCropDisturbanceEvents](v3_specification.CropEvents.md#soilorcropdisturbanceevents)

#### Defined in

[v3-specification.ts:881](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L881)

___

### type

• **type**: ``"avocados"`` \| ``"cherries"`` \| ``"english walnuts"`` \| ``"grape, raisin"`` \| ``"grape, table"`` \| ``"grape, wine (<1390 gdd)"`` \| ``"grape, wine (>1950 gdd)"`` \| ``"grape, wine (1391-1670 gdd)"`` \| ``"grape, wine (1671-1950 gdd)"`` \| ``"grapefruit"`` \| ``"lemons & limes"`` \| ``"olives"`` \| ``"oranges"`` \| ``"peaches and nectarines"`` \| ``"pistachios"`` \| ``"tangerines & mandarins"`` \| ``"almond"``

#### Defined in

[v3-specification.ts:1040](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L1040)
