[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / LimingEvent

# Interface: LimingEvent

[specification](../modules/specification.md).LimingEvent

Liming event details.

NOTE: The date that the liming occurred. Currently, liming dates do not impact quantification.
As such, we will default to a reasonable date when this property is left out.

**`example`**

```js
{
 "date": "01/01/2000",
 "type": "crushed limestone",
 "tonsPerAcre": 10,
}
```

## Hierarchy

- [`CropEventWithOptionalDate`](specification.CropEventWithOptionalDate.md)

  ↳ **`LimingEvent`**

## Table of contents

### Properties

- [date](specification.LimingEvent.md#date)
- [id](specification.LimingEvent.md#id)
- [tonsPerAcre](specification.LimingEvent.md#tonsperacre)
- [type](specification.LimingEvent.md#type)

## Properties

### date

• `Optional` **date**: `string`

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`nullable`** during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** When the crop event occurred on January 1st of 2000:

```js
"date": "01/01/2000"
```

**`validationrules`** ["cropEventDateIsOnOrAfterContainingCropYear"]

**`errormessage`**
{
"type": "projectDataError:cropEventDateTypeError",
"validationRules": "projectDataError:cropEventDateValidationRuleViolation"
}

#### Inherited from

[CropEventWithOptionalDate](specification.CropEventWithOptionalDate.md).[date](specification.CropEventWithOptionalDate.md#date)

#### Defined in

[specification.ts:1339](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1339)

___

### id

• `Optional` **id**: `string`

Optional external crop event identifier.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`example`**

```js
"id": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
```

#### Inherited from

[CropEventWithOptionalDate](specification.CropEventWithOptionalDate.md).[id](specification.CropEventWithOptionalDate.md#id)

#### Defined in

[specification.ts:1279](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1279)

___

### tonsPerAcre

• **tonsPerAcre**: `number`

The liming amount (in tons per acre).

**`minimum`** 0

**`example`** When 100 tons were user per acre:

```js
"tonsPerAcre": 100
```

#### Defined in

[specification.ts:1899](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1899)

___

### type

• **type**: ``"crushed limestone"`` \| ``"calcitic limestone"`` \| ``"dolomitic limestone"`` \| ``"other"``

The liming type.

**`example`** When crushed limestone was the liming type that was used:

```js
"type": "crushed limestone"
```

#### Defined in

[specification.ts:1886](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1886)
