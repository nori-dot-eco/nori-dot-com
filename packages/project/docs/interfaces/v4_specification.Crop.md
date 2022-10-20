[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / Crop

# Interface: Crop

[v4-specification](../modules/v4_specification.md).Crop

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

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[burningEvents](v4_specification.CropEvents.md#burningevents)

#### Defined in

[v4-specification.ts:1511](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1511)

___

### clearingAndRenewalEvents

• `Optional` **clearingAndRenewalEvents**: [`ClearingAndRenewalEvent`](v4_specification.ClearingAndRenewalEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[clearingAndRenewalEvents](v4_specification.CropEvents.md#clearingandrenewalevents)

#### Defined in

[v4-specification.ts:1557](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1557)

___

### externalId

• `Optional` **externalId**: `string`

#### Defined in

[v4-specification.ts:1275](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1275)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](v4_specification.FertilizerEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[fertilizerEvents](v4_specification.CropEvents.md#fertilizerevents)

#### Defined in

[v4-specification.ts:1402](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1402)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](v4_specification.GrazingEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[grazingEvents](v4_specification.CropEvents.md#grazingevents)

#### Defined in

[v4-specification.ts:1488](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1488)

___

### harvestEvents

• `Optional` **harvestEvents**: [`HarvestEvent`](v4_specification.HarvestEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[harvestEvents](v4_specification.CropEvents.md#harvestevents)

#### Defined in

[v4-specification.ts:1578](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1578)

___

### id

• `Optional` **id**: `string`

#### Defined in

[v4-specification.ts:1291](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1291)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](v4_specification.IrrigationEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[irrigationEvents](v4_specification.CropEvents.md#irrigationevents)

#### Defined in

[v4-specification.ts:1444](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1444)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](v4_specification.LimingEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[limingEvents](v4_specification.CropEvents.md#limingevents)

#### Defined in

[v4-specification.ts:1466](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1466)

___

### name

• `Optional` **name**: `string`

#### Defined in

[v4-specification.ts:1253](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1253)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](v4_specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](v4_specification.SlurryOrganicMatterEvent.md))[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[organicMatterEvents](v4_specification.CropEvents.md#organicmatterevents)

#### Defined in

[v4-specification.ts:1425](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1425)

___

### plantingEvents

• `Optional` **plantingEvents**: [`PlantingEvent`](v4_specification.PlantingEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[plantingEvents](v4_specification.CropEvents.md#plantingevents)

#### Defined in

[v4-specification.ts:1359](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1359)

___

### pruningEvents

• `Optional` **pruningEvents**: [`PruningEvent`](v4_specification.PruningEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[pruningEvents](v4_specification.CropEvents.md#pruningevents)

#### Defined in

[v4-specification.ts:1534](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1534)

___

### soilOrCropDisturbanceEvents

• `Optional` **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v4_specification.SoilOrCropDisturbanceEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[soilOrCropDisturbanceEvents](v4_specification.CropEvents.md#soilorcropdisturbanceevents)

#### Defined in

[v4-specification.ts:1381](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v4-specification.ts#L1381)
