[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [TillageEvent](_specification_.tillageevent.md)

# Interface: TillageEvent

Tillage event details

**`example`** 

```js
{
 "date": "10/01/2000",
 "type": "mow",
}
```

## Hierarchy

* [CropEvent](_specification_.cropevent.md)

  ↳ **TillageEvent**

## Index

### Properties

* [date](_specification_.tillageevent.md#date)
* [name](_specification_.tillageevent.md#optional-name)
* [type](_specification_.tillageevent.md#type)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:591](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L591)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

### `Optional` name

• **name**? : *string*

*Defined in [specification.ts:778](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L778)*

The name/alias that the tillage practice is known by. This property is used in the to-be-deprecated supplier intake sheet.

___

###  type

• **type**: *"Reduced Tillage" | "Mulch Tillage" | "Ridge Tillage" | "Strip Tillage" | "No Tillage" | "Growing Season Cultivation" | "Mow" | "Crimp" | "Broad-spectrum herbicide"*

*Defined in [specification.ts:785](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L785)*

The tillage classification type

You can find a list of common equivalents [here](go.nori.com/inputs)
