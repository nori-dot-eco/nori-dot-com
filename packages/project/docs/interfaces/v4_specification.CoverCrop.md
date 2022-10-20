[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / CoverCrop

# Interface: CoverCrop

[v4-specification](../modules/v4_specification.md).CoverCrop

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

#### Inherited from

[Crop](v4_specification.Crop.md).[burningEvents](v4_specification.Crop.md#burningevents)

#### Defined in

[v4-specification.ts:1513](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1513)

___

### classification

• **classification**: ``"annual cover"``

#### Defined in

[v4-specification.ts:1721](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1721)

___

### clearingAndRenewalEvents

• `Optional` **clearingAndRenewalEvents**: [`ClearingAndRenewalEvent`](v4_specification.ClearingAndRenewalEvent.md)[]

#### Inherited from

[Crop](v4_specification.Crop.md).[clearingAndRenewalEvents](v4_specification.Crop.md#clearingandrenewalevents)

#### Defined in

[v4-specification.ts:1559](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1559)

___

### externalId

• `Optional` **externalId**: `string`

#### Inherited from

[Crop](v4_specification.Crop.md).[externalId](v4_specification.Crop.md#externalid)

#### Defined in

[v4-specification.ts:1277](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1277)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](v4_specification.FertilizerEvent.md)[]

#### Inherited from

[Crop](v4_specification.Crop.md).[fertilizerEvents](v4_specification.Crop.md#fertilizerevents)

#### Defined in

[v4-specification.ts:1404](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1404)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](v4_specification.GrazingEvent.md)[]

#### Inherited from

[Crop](v4_specification.Crop.md).[grazingEvents](v4_specification.Crop.md#grazingevents)

#### Defined in

[v4-specification.ts:1490](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1490)

___

### harvestEvents

• `Optional` **harvestEvents**: [`HarvestEvent`](v4_specification.HarvestEvent.md)[]

#### Inherited from

[Crop](v4_specification.Crop.md).[harvestEvents](v4_specification.Crop.md#harvestevents)

#### Defined in

[v4-specification.ts:1580](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1580)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[Crop](v4_specification.Crop.md).[id](v4_specification.Crop.md#id)

#### Defined in

[v4-specification.ts:1293](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1293)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](v4_specification.IrrigationEvent.md)[]

#### Inherited from

[Crop](v4_specification.Crop.md).[irrigationEvents](v4_specification.Crop.md#irrigationevents)

#### Defined in

[v4-specification.ts:1446](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1446)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](v4_specification.LimingEvent.md)[]

#### Inherited from

[Crop](v4_specification.Crop.md).[limingEvents](v4_specification.Crop.md#limingevents)

#### Defined in

[v4-specification.ts:1468](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1468)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Crop](v4_specification.Crop.md).[name](v4_specification.Crop.md#name)

#### Defined in

[v4-specification.ts:1255](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1255)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](v4_specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](v4_specification.SlurryOrganicMatterEvent.md))[]

#### Inherited from

[Crop](v4_specification.Crop.md).[organicMatterEvents](v4_specification.Crop.md#organicmatterevents)

#### Defined in

[v4-specification.ts:1427](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1427)

___

### plantingEvents

• `Optional` **plantingEvents**: [`PlantingEvent`](v4_specification.PlantingEvent.md)[]

#### Inherited from

[Crop](v4_specification.Crop.md).[plantingEvents](v4_specification.Crop.md#plantingevents)

#### Defined in

[v4-specification.ts:1361](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1361)

___

### pruningEvents

• `Optional` **pruningEvents**: [`PruningEvent`](v4_specification.PruningEvent.md)[]

#### Inherited from

[Crop](v4_specification.Crop.md).[pruningEvents](v4_specification.Crop.md#pruningevents)

#### Defined in

[v4-specification.ts:1536](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1536)

___

### soilOrCropDisturbanceEvents

• `Optional` **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v4_specification.SoilOrCropDisturbanceEvent.md)[]

#### Inherited from

[Crop](v4_specification.Crop.md).[soilOrCropDisturbanceEvents](v4_specification.Crop.md#soilorcropdisturbanceevents)

#### Defined in

[v4-specification.ts:1383](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1383)

___

### type

• **type**: ``"annual rye"`` \| ``"annual rye - legume"`` \| ``"annual rye - legume - radish"`` \| ``"barley-radish mix"`` \| ``"cereal rye"`` \| ``"cereal rye-crimson clover mix"`` \| ``"clover/wildflowers"`` \| ``"forage radish"`` \| ``"grass-legume mix"`` \| ``"oilseed radish"`` \| ``"radish-crimson clover-barley-dwarf rape mix"`` \| ``"vetch"`` \| ``"winter clover"``

#### Defined in

[v4-specification.ts:1706](https://github.com/nori-dot-eco/nori-dot-com/blob/8e6dd1a/packages/project/src/v4-specification.ts#L1706)
