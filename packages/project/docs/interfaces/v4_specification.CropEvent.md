[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / CropEvent

# Interface: CropEvent

[v4-specification](../modules/v4_specification.md).CropEvent

A crop event that happened on a particular date.

**`Example`**

```js
{
 "date": "2000-01-01",
 "externalId": "f1-corn1-1234",
 "id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
}
```

## Hierarchy

- **`CropEvent`**

  ↳ [`PlantingEvent`](v4_specification.PlantingEvent.md)

  ↳ [`HarvestEvent`](v4_specification.HarvestEvent.md)

  ↳ [`SoilOrCropDisturbanceEvent`](v4_specification.SoilOrCropDisturbanceEvent.md)

  ↳ [`FertilizerEvent`](v4_specification.FertilizerEvent.md)

  ↳ [`OrganicMatterEvent`](v4_specification.OrganicMatterEvent.md)

  ↳ [`IrrigationEvent`](v4_specification.IrrigationEvent.md)

  ↳ [`LimingEvent`](v4_specification.LimingEvent.md)

  ↳ [`GrazingEvent`](v4_specification.GrazingEvent.md)

  ↳ [`PruningEvent`](v4_specification.PruningEvent.md)

  ↳ [`ClearingAndRenewalEvent`](v4_specification.ClearingAndRenewalEvent.md)

  ↳ [`BurningEvent`](v4_specification.BurningEvent.md)

## Table of contents

### Properties

- [date](v4_specification.CropEvent.md#date)
- [externalId](v4_specification.CropEvent.md#externalid)
- [id](v4_specification.CropEvent.md#id)
- [source](v4_specification.CropEvent.md#source)

## Properties

### date

• **date**: `string`

The date the crop event happened (formatted as ISO8061 date: YYYY-MM-DD and YYYY > 2000 and YYYY < 2100).

Dates for liming and burning can be approximate or the first day of the crop year.

**`Example`**

<caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "2000-01-01"
```

**`Validation Rules`**

["cropEventDateIsOnOrAfterContainingCropYear"]

**`Format`**

date

**`Error Message`**

#### Defined in

[v4-specification.ts:1709](https://github.com/nori-dot-eco/nori-dot-com/blob/475ed1b/packages/project/src/v4-specification.ts#L1709)

___

### externalId

• `Optional` **externalId**: `string`

External crop event identifier.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`Nullable`**

**`Example`**

```js
"externalId": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
```

#### Defined in

[v4-specification.ts:1724](https://github.com/nori-dot-eco/nori-dot-com/blob/475ed1b/packages/project/src/v4-specification.ts#L1724)

___

### id

• `Optional` **id**: `string`

Nori's internal crop event identifier.

Used to synchronize repeated imports.

**`Nullable`**

External systems pass null or omit the property for new projects.

**`Example`**

```js
"id": "20e75f5e-05e6-4a4d-92a7-9987de55c586"
```

#### Defined in

[v4-specification.ts:1739](https://github.com/nori-dot-eco/nori-dot-com/blob/475ed1b/packages/project/src/v4-specification.ts#L1739)

___

### source

• `Optional` **source**: `string`

Source of the event

Optional field to indicate what system this data point originated from.

**`Nullable`**

**`Example`**

```js
"source": "CDL"
```

**`Example`**

```js
"source": "FMS name"
```

#### Defined in

[v4-specification.ts:1760](https://github.com/nori-dot-eco/nori-dot-com/blob/475ed1b/packages/project/src/v4-specification.ts#L1760)
