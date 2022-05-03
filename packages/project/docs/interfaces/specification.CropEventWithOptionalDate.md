[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / CropEventWithOptionalDate

# Interface: CropEventWithOptionalDate

[specification](../modules/specification.md).CropEventWithOptionalDate

## Hierarchy

- [`CropEventIdentifier`](specification.CropEventIdentifier.md)

  ↳ **`CropEventWithOptionalDate`**

  ↳↳ [`LimingEvent`](specification.LimingEvent.md)

  ↳↳ [`BurningEvent`](specification.BurningEvent.md)

## Table of contents

### Properties

- [date](specification.CropEventWithOptionalDate.md#date)
- [externalId](specification.CropEventWithOptionalDate.md#externalid)
- [id](specification.CropEventWithOptionalDate.md#id)

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

#### Defined in

[specification.ts:1394](https://github.com/nori-dot-eco/nori-dot-com/blob/821dfc2/packages/project/src/specification.ts#L1394)

___

### externalId

• `Optional` **externalId**: `string`

Optional external crop event identifier.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`example`**

```js
"externalId": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
```

#### Inherited from

[CropEventIdentifier](specification.CropEventIdentifier.md).[externalId](specification.CropEventIdentifier.md#externalid)

#### Defined in

[specification.ts:1320](https://github.com/nori-dot-eco/nori-dot-com/blob/821dfc2/packages/project/src/specification.ts#L1320)

___

### id

• `Optional` **id**: `string`

Optional Nori's internal crop event identifier.

Used to synchronize repeated imports.  External systems leave this blank.

**`example`**

```js
"id": "20e75f5e-05e6-4a4d-92a7-9987de55c586"
```

#### Inherited from

[CropEventIdentifier](specification.CropEventIdentifier.md).[id](specification.CropEventIdentifier.md#id)

#### Defined in

[specification.ts:1334](https://github.com/nori-dot-eco/nori-dot-com/blob/821dfc2/packages/project/src/specification.ts#L1334)
