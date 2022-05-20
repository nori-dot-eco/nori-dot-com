[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / CropEventRange

# Interface: CropEventRange

[specification](../modules/specification.md).CropEventRange

A crop event that has a start and end date.

**`example`**

```js
{
 "startDate": "01/01/2000",
 "endDate": "12/31/2000"
}
```

## Hierarchy

- **`CropEventRange`**

  ↳ [`GrazingEvent`](specification.GrazingEvent.md)

## Table of contents

### Properties

- [endDate](specification.CropEventRange.md#enddate)
- [startDate](specification.CropEventRange.md#startdate)

## Properties

### endDate

• **endDate**: `string`

The last date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** When the end date of the event range was on December 31st of 2000:

```js
"endDate": "12/31/2000"
```

#### Defined in

[specification.ts:1321](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1321)

___

### startDate

• **startDate**: `string`

The first date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** When the start date of the event range was on January 1st of 2000:

```js
"startDate": "01/01/2000"
```

#### Defined in

[specification.ts:1308](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1308)
