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

- [`CropEventIdentifier`](specification.CropEventIdentifier.md)

  ↳ **`CropEventRange`**

  ↳↳ [`GrazingEvent`](specification.GrazingEvent.md)

## Table of contents

### Properties

- [endDate](specification.CropEventRange.md#enddate)
- [id](specification.CropEventRange.md#id)
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

[specification.ts:1381](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1381)

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

[CropEventIdentifier](specification.CropEventIdentifier.md).[id](specification.CropEventIdentifier.md#id)

#### Defined in

[specification.ts:1279](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1279)

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

[specification.ts:1368](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1368)
