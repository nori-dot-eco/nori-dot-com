[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [GrazingEvent](_specification_.grazingevent.md)

# Interface: GrazingEvent

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

*Defined in [specification.ts:1215](https://github.com/nori-dot-eco/nori-dot-com/blob/526533c/packages/project/src/specification.ts#L1215)*

The last date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the end date of the event range was on December 31st of 2000:</caption>

```js
"endDate": "12/31/2000"
```

___

###  restPeriod

• **restPeriod**: *number*

*Defined in [specification.ts:1813](https://github.com/nori-dot-eco/nori-dot-com/blob/526533c/packages/project/src/specification.ts#L1813)*

The grazing rest period in days.

**`minimum`** 0

**`maximum`** 365

**`example`** <caption>When burning occurred before planting:</caption>

```js
"restPeriod": 0
```

___

###  startDate

• **startDate**: *string*

*Inherited from [CropEventRange](_specification_.cropeventrange.md).[startDate](_specification_.cropeventrange.md#startdate)*

*Defined in [specification.ts:1202](https://github.com/nori-dot-eco/nori-dot-com/blob/526533c/packages/project/src/specification.ts#L1202)*

The first date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the start date of the event range was on January 1st of 2000:</caption>

```js
"startDate": "01/01/2000"
```

___

###  utilization

• **utilization**: *number*

*Defined in [specification.ts:1827](https://github.com/nori-dot-eco/nori-dot-com/blob/526533c/packages/project/src/specification.ts#L1827)*

The percentage of forage consumed by the animals.

**`minimum`** 0

**`maximum`** 100

**`example`** <caption>When burning occurred before planting:</caption>

```js
"utilization": 20
```
