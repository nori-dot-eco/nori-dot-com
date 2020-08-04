[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [GrazingEvent](_specification_.grazingevent.md)

# Interface: GrazingEvent

Grazing event details

**`example`** 

```js
{
 "restPeriod": 0,
 "utilization": 100,
 "startDate": "01/01/2000",
 "endDate": "12/31/2000"
}
```

## Hierarchy

* [CropEventRange](_specification_.cropeventrange.md)

  ↳ **GrazingEvent**

## Index

### Properties

* [endDate](_specification_.grazingevent.md#enddate)
* [restPeriod](_specification_.grazingevent.md#restperiod)
* [startDate](_specification_.grazingevent.md#startdate)
* [utilization](_specification_.grazingevent.md#utilization)

## Properties

###  endDate

• **endDate**: *string*

*Inherited from [CropEventRange](_specification_.cropeventrange.md).[endDate](_specification_.cropeventrange.md#enddate)*

*Defined in [specification.ts:479](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L479)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The last date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  restPeriod

• **restPeriod**: *number*

*Defined in [specification.ts:839](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L839)*

**`minimum`** 0

**`maximum`** 365

The grazing rest period in days

___

###  startDate

• **startDate**: *string*

*Inherited from [CropEventRange](_specification_.cropeventrange.md).[startDate](_specification_.cropeventrange.md#startdate)*

*Defined in [specification.ts:473](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L473)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The first date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  utilization

• **utilization**: *number*

*Defined in [specification.ts:846](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L846)*

**`minimum`** 0

**`maximum`** 100

The grazing utilization percentage
