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

[v4-specification.ts:1513](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1513)

___

### clearingAndRenewalEvents

• `Optional` **clearingAndRenewalEvents**: [`ClearingAndRenewalEvent`](v4_specification.ClearingAndRenewalEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[clearingAndRenewalEvents](v4_specification.CropEvents.md#clearingandrenewalevents)

#### Defined in

[v4-specification.ts:1559](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1559)

___

### externalId

• `Optional` **externalId**: `string`

#### Defined in

[v4-specification.ts:1277](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1277)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](v4_specification.FertilizerEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[fertilizerEvents](v4_specification.CropEvents.md#fertilizerevents)

#### Defined in

[v4-specification.ts:1404](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1404)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](v4_specification.GrazingEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[grazingEvents](v4_specification.CropEvents.md#grazingevents)

#### Defined in

[v4-specification.ts:1490](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1490)

___

### harvestEvents

• `Optional` **harvestEvents**: [`HarvestEvent`](v4_specification.HarvestEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[harvestEvents](v4_specification.CropEvents.md#harvestevents)

#### Defined in

[v4-specification.ts:1580](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1580)

___

### id

• `Optional` **id**: `string`

#### Defined in

[v4-specification.ts:1293](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1293)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](v4_specification.IrrigationEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[irrigationEvents](v4_specification.CropEvents.md#irrigationevents)

#### Defined in

[v4-specification.ts:1446](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1446)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](v4_specification.LimingEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[limingEvents](v4_specification.CropEvents.md#limingevents)

#### Defined in

[v4-specification.ts:1468](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1468)

___

### name

• `Optional` **name**: `string`

#### Defined in

[v4-specification.ts:1255](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1255)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](v4_specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](v4_specification.SlurryOrganicMatterEvent.md))[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[organicMatterEvents](v4_specification.CropEvents.md#organicmatterevents)

#### Defined in

[v4-specification.ts:1427](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1427)

___

### plantingEvents

• `Optional` **plantingEvents**: [`PlantingEvent`](v4_specification.PlantingEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[plantingEvents](v4_specification.CropEvents.md#plantingevents)

#### Defined in

[v4-specification.ts:1361](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1361)

___

### pruningEvents

• `Optional` **pruningEvents**: [`PruningEvent`](v4_specification.PruningEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[pruningEvents](v4_specification.CropEvents.md#pruningevents)

#### Defined in

[v4-specification.ts:1536](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1536)

___

### soilOrCropDisturbanceEvents

• `Optional` **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v4_specification.SoilOrCropDisturbanceEvent.md)[]

#### Inherited from

[CropEvents](v4_specification.CropEvents.md).[soilOrCropDisturbanceEvents](v4_specification.CropEvents.md#soilorcropdisturbanceevents)

#### Defined in

[v4-specification.ts:1383](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1383)
