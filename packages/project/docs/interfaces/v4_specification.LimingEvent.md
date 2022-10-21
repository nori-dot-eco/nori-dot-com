[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / LimingEvent

# Interface: LimingEvent

[v4-specification](../modules/v4_specification.md).LimingEvent

Liming event details.

NOTE: The date that the liming occurred. Currently, liming dates do not impact quantification.
As such, we will default to a reasonable date when this property is left out.

**`Example`**

```js
{
 "date": "2000-01-01",
 "type": "crushed limestone",
 "tonsPerAcre": 10,
}
```

## Hierarchy

- [`CropEvent`](v4_specification.CropEvent.md)

  ↳ **`LimingEvent`**

## Table of contents

### Properties

- [date](v4_specification.LimingEvent.md#date)
- [externalId](v4_specification.LimingEvent.md#externalid)
- [id](v4_specification.LimingEvent.md#id)
- [source](v4_specification.LimingEvent.md#source)
- [tonsPerAcre](v4_specification.LimingEvent.md#tonsperacre)
- [type](v4_specification.LimingEvent.md#type)

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

```js
{
"type": "projectDataError:cropEventDateTypeError",
"validationRules": "projectDataError:cropEventDateValidationRuleViolation"
}
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[date](v4_specification.CropEvent.md#date)

#### Defined in

[v4-specification.ts:1817](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L1817)

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

[v4-specification.ts:1832](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L1832)

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

[v4-specification.ts:1847](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L1847)

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

[v4-specification.ts:1868](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L1868)

___

### tonsPerAcre

• **tonsPerAcre**: `number`

The liming amount (in tons per acre).

**`Minimum`**

0

**`Example`**

<caption>When 100 tons were user per acre:</caption>

```js
"tonsPerAcre": 100
```

#### Defined in

[v4-specification.ts:2380](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L2380)

___

### type

• **type**: ``"crushed limestone"`` \| ``"calcitic limestone"`` \| ``"dolomitic limestone"`` \| ``"other"``

The liming type.

**`Example`**

<caption>When crushed limestone was the liming type that was used:</caption>

```js
"type": "crushed limestone"
```

#### Defined in

[v4-specification.ts:2367](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L2367)
