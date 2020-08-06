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

*Defined in [specification.ts:1617](https://github.com/nori-dot-eco/nori-dot-com/blob/227c0d6/packages/project/src/specification.ts#L1617)*

The date that the liming occurred. Currently, liming dates do not impact quantification. As such, we will default to a reasonable date when this property is left out.

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When liming occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

___

###  tonsPerAcre

• **tonsPerAcre**: *number*

*Defined in [specification.ts:1604](https://github.com/nori-dot-eco/nori-dot-com/blob/227c0d6/packages/project/src/specification.ts#L1604)*

The liming amount (in tons per acre).

**`minimum`** 0

**`example`** <caption>When 100 tons were user per acre:</caption>

```js
"tonsPerAcre": 100
```

___

###  type

• **type**: *"crushed limestone" | "calcitic limestone" | "dolomitic limestone" | "other"*

*Defined in [specification.ts:1587](https://github.com/nori-dot-eco/nori-dot-com/blob/227c0d6/packages/project/src/specification.ts#L1587)*

The liming type.

**`example`** <caption>When crushed limestone was the liming type that was used:</caption>

```js
"type": "crushed limestone"
```
