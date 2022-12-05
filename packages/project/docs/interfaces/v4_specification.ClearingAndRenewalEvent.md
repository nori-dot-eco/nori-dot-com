[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / ClearingAndRenewalEvent

# Interface: ClearingAndRenewalEvent

[v4-specification](../modules/v4_specification.md).ClearingAndRenewalEvent

Clearing and renewal event for orchards / vinyards.

**`Example`**

```js
{
 "date": "2008-10-31",
  "percentRenewed": 50
}
```

## Hierarchy

- [`CropEvent`](v4_specification.CropEvent.md)

  ↳ **`ClearingAndRenewalEvent`**

## Table of contents

### Properties

- [date](v4_specification.ClearingAndRenewalEvent.md#date)
- [externalId](v4_specification.ClearingAndRenewalEvent.md#externalid)
- [id](v4_specification.ClearingAndRenewalEvent.md#id)
- [percentRenewed](v4_specification.ClearingAndRenewalEvent.md#percentrenewed)
- [source](v4_specification.ClearingAndRenewalEvent.md#source)

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

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[externalId](v4_specification.CropEvent.md#externalid)

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

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[id](v4_specification.CropEvent.md#id)

#### Defined in

[v4-specification.ts:1739](https://github.com/nori-dot-eco/nori-dot-com/blob/475ed1b/packages/project/src/v4-specification.ts#L1739)

___

### percentRenewed

• **percentRenewed**: `number`

Percentage or orchard or vinyard that was cleared and renewed.

**`Minimum`**

1

**`Maximum`**

100

**`Example`**

<caption>When 50% of the orchard was renewed:</caption>

```js
"percentRenewed": 50
```

#### Defined in

[v4-specification.ts:2361](https://github.com/nori-dot-eco/nori-dot-com/blob/475ed1b/packages/project/src/v4-specification.ts#L2361)

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

[v4-specification.ts:1760](https://github.com/nori-dot-eco/nori-dot-com/blob/475ed1b/packages/project/src/v4-specification.ts#L1760)
