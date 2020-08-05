[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropEventRange](_specification_.cropeventrange.md)

# Interface: CropEventRange

A crop event that has a start and end date

## Hierarchy

* **CropEventRange**

  ↳ [IrrigationEvent](_specification_.irrigationevent.md)

  ↳ [GrazingEvent](_specification_.grazingevent.md)

## Index

### Properties

* [endDate](_specification_.cropeventrange.md#enddate)
* [startDate](_specification_.cropeventrange.md#startdate)

## Properties

###  endDate

• **endDate**: *string*

*Defined in [specification.ts:609](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L609)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The last date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  startDate

• **startDate**: *string*

*Defined in [specification.ts:603](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L603)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The first date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
