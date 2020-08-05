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

* **LimingEvent**

## Index

### Properties

* [date](_specification_.limingevent.md#optional-date)
* [tonsPerAcre](_specification_.limingevent.md#tonsperacre)
* [type](_specification_.limingevent.md#type)

## Properties

### `Optional` date

• **date**? : *string*

*Defined in [specification.ts:1112](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L1112)*

// todo guidance date doesnt matter, fi excluded, we will use an assigned date

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

___

###  tonsPerAcre

• **tonsPerAcre**: *number*

*Defined in [specification.ts:1105](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L1105)*

The liming amount (in tons per acre)

___

###  type

• **type**: *"none" | "crushed limestone" | "calcitic limestone" | "dolomitic limestone" | "other"*

*Defined in [specification.ts:1096](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L1096)*

The liming type
