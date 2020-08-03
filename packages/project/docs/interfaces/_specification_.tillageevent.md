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
* [type](_specification_.tillageevent.md#type)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:401](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L401)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  type

• **type**: *string*

*Defined in [specification.ts:520](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L520)*

The tillage classification type
