[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [GrazingEvent](_specification_.grazingevent.md)

# Interface: GrazingEvent

Grazing event details

## Hierarchy

* **GrazingEvent**

## Index

### Properties

* [endDate](_specification_.grazingevent.md#enddate)
* [restPeriod](_specification_.grazingevent.md#restperiod)
* [startDate](_specification_.grazingevent.md#startdate)
* [utilization](_specification_.grazingevent.md#utilization)

## Properties

###  endDate

• **endDate**: *string*

*Defined in [specification.ts:419](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L419)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The last date that grazing occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  restPeriod

• **restPeriod**: *number*

*Defined in [specification.ts:426](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L426)*

**`minimum`** 0

**`maximum`** 365

The grazing rest period in days

___

###  startDate

• **startDate**: *string*

*Defined in [specification.ts:413](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L413)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The first date that grazing occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  utilization

• **utilization**: *number*

*Defined in [specification.ts:433](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L433)*

**`minimum`** 0

**`maximum`** 100

The grazing utilization percentage
