[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / IrrigationEvent

# Interface: IrrigationEvent

[specification](../modules/specification.md).IrrigationEvent

Irrigation event details.

**`example`** 

```js
{
 "volume": 1,
 "date": "01/01/2000",
}
```

## Hierarchy

* [*CropEvent*](specification.cropevent.md)

  ↳ **IrrigationEvent**

## Table of contents

### Properties

- [date](specification.irrigationevent.md#date)
- [volume](specification.irrigationevent.md#volume)

## Properties

### date

• **date**: *string*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`nullable`** during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

Inherited from: [CropEvent](specification.cropevent.md).[date](specification.cropevent.md#date)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1194](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1194)

___

### volume

• **volume**: *number*

The irrigation volume in inches. If volume is 0, simply do not define an irrigation event.

**`minimum`** 0

**`example`** <caption>When 1 inch of volume was applied:</caption>

```js
"volume": 1,
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1741](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1741)
