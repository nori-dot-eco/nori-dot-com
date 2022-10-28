[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / IrrigationEvent

# Interface: IrrigationEvent

[v3-specification](../modules/v3_specification.md).IrrigationEvent

Irrigation event details.

**`Example`**

```js
{
 "volume": 1,
 "date": "01/01/2000",
}
```

## Hierarchy

- [`CropEvent`](v3_specification.CropEvent.md)

  ↳ **`IrrigationEvent`**

## Table of contents

### Properties

- [date](v3_specification.IrrigationEvent.md#date)
- [volume](v3_specification.IrrigationEvent.md#volume)

## Properties

### date

• **date**: `string`

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`Nullable`**

during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`Pattern`**

^02/(?:[01]\d|2\d)/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)/(?:[0-2]\d|3[01])/(?:20)\d{2}|(?:0[469]|11)/(?:[0-2]\d|30)/(?:20)\d{2}|02/(?:[0-1]\d|2[0-8])/(?:20)\d{2}$

**`Example`**

<caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

**`Validation Rules`**

["cropEventDateIsOnOrAfterContainingCropYear"]

**`Error Message`**

```js
{
"type": "projectDataError:cropEventDateTypeError",
"validationRules": "projectDataError:cropEventDateValidationRuleViolation"
}
```

#### Inherited from

[CropEvent](v3_specification.CropEvent.md).[date](v3_specification.CropEvent.md#date)

#### Defined in

[v3-specification.ts:1291](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v3-specification.ts#L1291)

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

[v3-specification.ts:1806](https://github.com/nori-dot-eco/nori-dot-com/blob/ba4a1c9/packages/project/src/v3-specification.ts#L1806)
