[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [LimingEvent](_specification_.limingevent.md)

# Interface: LimingEvent

Liming event details

**`example`** 

```js
{
 "date": "01/01/2000",
 "type": "crushed limestone",
 "tonsPerAcre": 10,
}
```

## Hierarchy

* [CropEvent](_specification_.cropevent.md)

  ↳ **LimingEvent**

## Index

### Properties

* [date](_specification_.limingevent.md#date)
* [tonsPerAcre](_specification_.limingevent.md#tonsperacre)
* [type](_specification_.limingevent.md#type)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:461](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L461)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  tonsPerAcre

• **tonsPerAcre**: *number*

*Defined in [specification.ts:813](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L813)*

The liming amount (in tons per acre)

___

###  type

• **type**: *"none" | "crushed limestone" | "calcitic limestone" | "dolomitic limestone" | "other"*

*Defined in [specification.ts:804](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L804)*

The liming type
