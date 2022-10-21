[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / BurningEvent

# Interface: BurningEvent

[v4-specification](../modules/v4_specification.md).BurningEvent

Burning event details.

**`Example`**

```js
{
 "date": "2008-10-31"
}
```

## Hierarchy

- [`CropEvent`](v4_specification.CropEvent.md)

  ↳ **`BurningEvent`**

## Table of contents

### Properties

- [date](v4_specification.BurningEvent.md#date)
- [externalId](v4_specification.BurningEvent.md#externalid)
- [id](v4_specification.BurningEvent.md#id)
- [source](v4_specification.BurningEvent.md#source)

## Properties

### date

• **date**: `Date`

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

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[date](v4_specification.CropEvent.md#date)

#### Defined in

[v4-specification.ts:1805](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L1805)

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

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[externalId](v4_specification.CropEvent.md#externalid)

#### Defined in

[v4-specification.ts:1820](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L1820)

___

### id

• `Optional` **id**: `string`

Nori's internal crop event identifier.

Used to synchronize repeated imports.

**`Nullable`**

External systems leave this blank for new projects.

**`Example`**

```js
"id": "20e75f5e-05e6-4a4d-92a7-9987de55c586"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[id](v4_specification.CropEvent.md#id)

#### Defined in

[v4-specification.ts:1835](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L1835)

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

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[source](v4_specification.CropEvent.md#source)

#### Defined in

[v4-specification.ts:1856](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L1856)
