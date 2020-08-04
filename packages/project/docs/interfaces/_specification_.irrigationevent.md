[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [IrrigationEvent](_specification_.irrigationevent.md)

# Interface: IrrigationEvent

Irrigation event details

**`example`** 

```js
{
 "volume": 1,
 "depth": 100,
 "frequency": 7,
 "startDate": "01/01/2000",
 "endDate": "12/31/2000"
}
```

## Hierarchy

* [CropEventRange](_specification_.cropeventrange.md)

  ↳ **IrrigationEvent**

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

*Defined in [specification.ts:777](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L777)*

The irrigation depth in inches. This should be set to 0 if it was applied at the surface.

___

###  endDate

• **endDate**: *string*

*Inherited from [CropEventRange](_specification_.cropeventrange.md).[endDate](_specification_.cropeventrange.md#enddate)*

*Defined in [specification.ts:479](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L479)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The last date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  frequency

• **frequency**: *number*

*Defined in [specification.ts:781](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L781)*

The frequency that irrigation occurred. For example, if irrigation was applied once per week, then frequency would be set to 7

___

###  startDate

• **startDate**: *string*

*Inherited from [CropEventRange](_specification_.cropeventrange.md).[startDate](_specification_.cropeventrange.md#startdate)*

*Defined in [specification.ts:473](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L473)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The first date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  volume

• **volume**: *number*

*Defined in [specification.ts:773](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L773)*

The irrigation volume in inches
