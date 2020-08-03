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

*Defined in [specification.ts:368](https://github.com/nori-dot-eco/nori-dot-com/blob/ee6dedb/packages/project/src/specification.ts#L368)*

The last date that grazing occurred (formatted as MM/DD/YYYY)

___

###  restPeriod

• **restPeriod**: *number*

*Defined in [specification.ts:374](https://github.com/nori-dot-eco/nori-dot-com/blob/ee6dedb/packages/project/src/specification.ts#L374)*

The grazing rest period in days

**`minimum`** 0

**`maximum`** 365

___

###  startDate

• **startDate**: *string*

*Defined in [specification.ts:364](https://github.com/nori-dot-eco/nori-dot-com/blob/ee6dedb/packages/project/src/specification.ts#L364)*

The first date that grazing occurred (formatted as MM/DD/YYYY)

___

###  utilization

• **utilization**: *number*

*Defined in [specification.ts:380](https://github.com/nori-dot-eco/nori-dot-com/blob/ee6dedb/packages/project/src/specification.ts#L380)*

The grazing utilization percentage

**`minimum`** 0

**`maximum`** 100
