[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / GrazingEvent

# Interface: GrazingEvent

[specification](../modules/specification.md).GrazingEvent

Grazing event details.

**`example`**

```js
{
 "restPeriod": 0,
 "utilization": 20,
 "startDate": "01/01/2000",
 "endDate": "12/31/2000"
}
```

## Hierarchy

- [`CropEventRange`](specification.CropEventRange.md)

  ↳ **`GrazingEvent`**

## Table of contents

### Properties

- [endDate](specification.GrazingEvent.md#enddate)
- [id](specification.GrazingEvent.md#id)
- [restPeriod](specification.GrazingEvent.md#restperiod)
- [startDate](specification.GrazingEvent.md#startdate)
- [utilization](specification.GrazingEvent.md#utilization)

## Properties

### endDate

• **endDate**: `string`

The last date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** When the end date of the event range was on December 31st of 2000:

```js
"endDate": "12/31/2000"
```

#### Inherited from

[CropEventRange](specification.CropEventRange.md).[endDate](specification.CropEventRange.md#enddate)

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

[CropEventRange](specification.CropEventRange.md).[id](specification.CropEventRange.md#id)

#### Defined in

[specification.ts:1279](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1279)

___

### restPeriod

• **restPeriod**: `number`

The grazing rest period in days.

Zero and one are equivalent and indicate continuous grazing.

**`minimum`** 0

**`maximum`** 365

**`example`** When animals are grazing continuously:

```js
"restPeriod": 0
```

**`example`** When animals are on the field or in each paddock within the field every 30 days:

```js
"restPeriod": 30
```

#### Defined in

[specification.ts:1939](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1939)

___

### startDate

• **startDate**: `string`

The first date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** When the start date of the event range was on January 1st of 2000:

```js
"startDate": "01/01/2000"
```

#### Inherited from

[CropEventRange](specification.CropEventRange.md).[startDate](specification.CropEventRange.md#startdate)

#### Defined in

[specification.ts:1368](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1368)

___

### utilization

• **utilization**: `number`

The percentage of forage consumed by the animals per rest period days.

**`minimum`** 0

**`maximum`** 100

**`example`** When 20% of the forage was consumed per period:

```js
"utilization": 20
```

#### Defined in

[specification.ts:1953](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1953)
