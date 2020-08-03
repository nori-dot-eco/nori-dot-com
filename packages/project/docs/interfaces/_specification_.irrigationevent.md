[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [IrrigationEvent](_specification_.irrigationevent.md)

# Interface: IrrigationEvent

Irrigation event details

## Hierarchy

* **IrrigationEvent**

## Index

### Properties

* [date](_specification_.irrigationevent.md#date)
* [depth](_specification_.irrigationevent.md#depth)
* [endDate](_specification_.irrigationevent.md#enddate)
* [frequency](_specification_.irrigationevent.md#frequency)
* [volume](_specification_.irrigationevent.md#volume)

## Properties

###  date

• **date**: *string*

*Defined in [specification.ts:338](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L338)*

The date that irrigation began (formatted as MM/DD/YYYY)

___

###  depth

• **depth**: *number*

*Defined in [specification.ts:347](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L347)*

The irrigation depth in inches. This should be set to 0 if it was applied at the surface.

___

###  endDate

• **endDate**: *string*

*Defined in [specification.ts:352](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L352)*

The date that irrigation ended (formatted as MM/DD/YYYY)

___

###  frequency

• **frequency**: *number*

*Defined in [specification.ts:356](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L356)*

The frequency that irrigation occurred. For example, if irrigation was applied once per week, then frequency would be set to 7

___

###  volume

• **volume**: *number*

*Defined in [specification.ts:342](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L342)*

The irrigation volume in inches
