[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [LimingEvent](_specification_.limingevent.md)

# Interface: LimingEvent

Liming event details.

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

*Defined in [specification.ts:1337](https://github.com/nori-dot-eco/nori-dot-com/blob/72b033e/packages/project/src/specification.ts#L1337)*

// todo guidance date doesnt matter, fi excluded, we will use an assigned date.

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When liming occurred on January 1st of 2000</caption>

```js
"date": "01/01/2000"
```

___

###  tonsPerAcre

• **tonsPerAcre**: *number*

*Defined in [specification.ts:1324](https://github.com/nori-dot-eco/nori-dot-com/blob/72b033e/packages/project/src/specification.ts#L1324)*

The liming amount (in tons per acre).

**`example`** <caption>When 100 tons were user per acre</caption>

```js
"tonsPerAcre": 100
```

___

###  type

• **type**: *"none" | "crushed limestone" | "calcitic limestone" | "dolomitic limestone" | "other"*

*Defined in [specification.ts:1308](https://github.com/nori-dot-eco/nori-dot-com/blob/72b033e/packages/project/src/specification.ts#L1308)*

The liming type.

**`example`** <caption>When crushed limestone was the liming type that was used</caption>

```js
"type": "crushed limestone"
```
