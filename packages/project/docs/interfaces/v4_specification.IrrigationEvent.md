[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / IrrigationEvent

# Interface: IrrigationEvent

[v4-specification](../modules/v4_specification.md).IrrigationEvent

Irrigation event details.

**`Example`**

```js
{
 "volume": 1,
 "date": "2000-10-01",
}
```

## Hierarchy

- [`CropEvent`](v4_specification.CropEvent.md)

  ↳ **`IrrigationEvent`**

## Table of contents

### Properties

- [date](v4_specification.IrrigationEvent.md#date)
- [externalId](v4_specification.IrrigationEvent.md#externalid)
- [id](v4_specification.IrrigationEvent.md#id)
- [source](v4_specification.IrrigationEvent.md#source)
- [volume](v4_specification.IrrigationEvent.md#volume)

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

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[date](v4_specification.CropEvent.md#date)

#### Defined in

[v4-specification.ts:1605](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1605)

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

[v4-specification.ts:1618](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1618)

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

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[id](v4_specification.CropEvent.md#id)

#### Defined in

[v4-specification.ts:1631](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1631)

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

[v4-specification.ts:1649](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1649)

___

### volume

• **volume**: `number`

The irrigation volume in inches. If volume is 0, simply do not define an irrigation event.

**`Minimum`**

0

**`Example`**

<caption>When 1 inch of volume was applied:</caption>

```js
"volume": 1,
```

#### Defined in

[v4-specification.ts:2058](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L2058)
