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

* **TillageEvent**

## Index

### Properties

* [date](_specification_.tillageevent.md#date)
* [type](_specification_.tillageevent.md#type)

## Properties

###  date

• **date**: *string*

*Defined in [specification.ts:415](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L415)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the tillage event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  type

• **type**: *string*

*Defined in [specification.ts:420](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L420)*

The tillage classification type
