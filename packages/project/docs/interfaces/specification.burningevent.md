[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / BurningEvent

# Interface: BurningEvent

[specification](../modules/specification.md).BurningEvent

Burning event details.

**`example`**

```js
{
 "type": "before planting"
}
```

## Hierarchy

- [`CropEventWithOptionalDate`](specification.CropEventWithOptionalDate.md)

  ↳ **`BurningEvent`**

## Table of contents

### Properties

- [date](specification.BurningEvent.md#date)
- [id](specification.BurningEvent.md#id)
- [type](specification.BurningEvent.md#type)

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

### type

• **type**: ``"before planting"`` \| ``"after harvesting"``

The type of burning, if applicable.

**`example`** When burning occurred before planting:

```js
"type": "before planting"
```

**`example`** When burning occurred after harvesting:

```js
"type": "after harvesting"
```

#### Defined in

[specification.ts:1985](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1985)
