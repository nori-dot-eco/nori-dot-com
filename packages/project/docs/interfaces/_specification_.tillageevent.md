[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [TillageEvent](_specification_.tillageevent.md)

# Interface: TillageEvent

Tillage event details

## Hierarchy

* **TillageEvent**

## Index

### Properties

* [date](_specification_.tillageevent.md#date)
* [type](_specification_.tillageevent.md#type)

## Properties

###  date

• **date**: *string*

*Defined in [specification.ts:281](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L281)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the tillage event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  type

• **type**: *string*

*Defined in [specification.ts:286](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L286)*

The tillage classification type
