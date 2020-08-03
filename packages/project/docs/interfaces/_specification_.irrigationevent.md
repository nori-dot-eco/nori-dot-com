[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [IrrigationEvent](_specification_.irrigationevent.md)

# Interface: IrrigationEvent

Irrigation event details

## Hierarchy

* **IrrigationEvent**

## Index

### Properties

* [depth](_specification_.irrigationevent.md#depth)
* [endDate](_specification_.irrigationevent.md#enddate)
* [frequency](_specification_.irrigationevent.md#frequency)
* [startDate](_specification_.irrigationevent.md#startdate)
* [volume](_specification_.irrigationevent.md#volume)

## Properties

###  depth

• **depth**: *number*

*Defined in [specification.ts:364](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L364)*

The irrigation depth in inches. This should be set to 0 if it was applied at the surface.

___

###  endDate

• **endDate**: *string*

*Defined in [specification.ts:371](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L371)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date that irrigation ended (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  frequency

• **frequency**: *number*

*Defined in [specification.ts:375](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L375)*

The frequency that irrigation occurred. For example, if irrigation was applied once per week, then frequency would be set to 7

___

###  startDate

• **startDate**: *string*

*Defined in [specification.ts:355](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L355)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date that irrigation began (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  volume

• **volume**: *number*

*Defined in [specification.ts:359](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L359)*

The irrigation volume in inches
