[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / CropEvent

# Interface: CropEvent

[v3-specification](../modules/v3_specification.md).CropEvent

A crop event that happened on a particular date.

**`example`**

```js
{
 "date": "01/01/2000"
}
```

## Hierarchy

- **`CropEvent`**

  ↳ [`CropManagementEvent`](v3_specification.CropManagementEvent.md)

  ↳ [`SoilOrCropDisturbanceEvent`](v3_specification.SoilOrCropDisturbanceEvent.md)

  ↳ [`FertilizerEvent`](v3_specification.FertilizerEvent.md)

  ↳ [`OrganicMatterEvent`](v3_specification.OrganicMatterEvent.md)

  ↳ [`IrrigationEvent`](v3_specification.IrrigationEvent.md)

## Table of contents

### Properties

- [date](v3_specification.CropEvent.md#date)

## Properties

### date

• **date**: `string`

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

[v3-specification.ts:1279](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L1279)
