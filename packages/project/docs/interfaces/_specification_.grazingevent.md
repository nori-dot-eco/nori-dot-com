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

*Defined in [specification.ts:394](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L394)*

The last date that grazing occurred (formatted as MM/DD/YYYY)

___

###  restPeriod

• **restPeriod**: *number*

*Defined in [specification.ts:401](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L401)*

**`minimum`** 0

**`maximum`** 365

The grazing rest period in days

___

###  startDate

• **startDate**: *string*

*Defined in [specification.ts:390](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L390)*

The first date that grazing occurred (formatted as MM/DD/YYYY)

___

###  utilization

• **utilization**: *number*

*Defined in [specification.ts:408](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L408)*

**`minimum`** 0

**`maximum`** 100

The grazing utilization percentage
