[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / CoverCrop

# Interface: CoverCrop

[v3-specification](../modules/v3_specification.md).CoverCrop

## Hierarchy

- [`CropEvents`](v3_specification.CropEvents.md)

- [`PlantedCrop`](v3_specification.PlantedCrop.md)

  ↳ **`CoverCrop`**

## Table of contents

### Properties

- [burningEvent](v3_specification.CoverCrop.md#burningevent)
- [classification](v3_specification.CoverCrop.md#classification)
- [fertilizerEvents](v3_specification.CoverCrop.md#fertilizerevents)
- [grazingEvents](v3_specification.CoverCrop.md#grazingevents)
- [irrigationEvents](v3_specification.CoverCrop.md#irrigationevents)
- [limingEvents](v3_specification.CoverCrop.md#limingevents)
- [name](v3_specification.CoverCrop.md#name)
- [organicMatterEvents](v3_specification.CoverCrop.md#organicmatterevents)
- [plantingDate](v3_specification.CoverCrop.md#plantingdate)
- [soilOrCropDisturbanceEvents](v3_specification.CoverCrop.md#soilorcropdisturbanceevents)
- [type](v3_specification.CoverCrop.md#type)

## Properties

### burningEvent

• `Optional` **burningEvent**: [`BurningEvent`](v3_specification.BurningEvent.md)

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[burningEvent](v3_specification.CropEvents.md#burningevent)

#### Defined in

[v3-specification.ts:1004](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L1004)

___

### classification

• **classification**: ``"annual cover"``

#### Defined in

[v3-specification.ts:1191](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L1191)

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

### soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v3_specification.SoilOrCropDisturbanceEvent.md)[]

#### Inherited from

[CropEvents](v3_specification.CropEvents.md).[soilOrCropDisturbanceEvents](v3_specification.CropEvents.md#soilorcropdisturbanceevents)

#### Defined in

[v3-specification.ts:881](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L881)

___

### type

• **type**: ``"austrian winter pea"`` \| ``"winter grain-other"`` \| ``"annual rye"`` \| ``"annual rye - legume"`` \| ``"annual rye - legume - radish"`` \| ``"cereal rye"`` \| ``"forage radish"`` \| ``"oilseed radish"`` \| ``"vetch"``

#### Defined in

[v3-specification.ts:1176](https://github.com/nori-dot-eco/nori-dot-com/blob/e34c57a/packages/project/src/v3-specification.ts#L1176)
