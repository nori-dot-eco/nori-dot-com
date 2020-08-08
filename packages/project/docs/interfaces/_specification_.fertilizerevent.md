[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [FertilizerEvent](_specification_.fertilizerevent.md)

# Interface: FertilizerEvent

Fertilizer event details.

**`example`** 

```js
{
 "date": "10/01/2000",
 "productName": "Joe's fertilizer",
 "type": "mixed blends",
 "lbsOfNPerAcre": 150
}
```

## Hierarchy

* [CropEvent](_specification_.cropevent.md)

  ↳ **FertilizerEvent**

## Index

### Properties

* [date](_specification_.fertilizerevent.md#date)
* [lbsOfNPerAcre](_specification_.fertilizerevent.md#lbsofnperacre)
* [productName](_specification_.fertilizerevent.md#optional-productname)
* [type](_specification_.fertilizerevent.md#optional-type)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:1144](https://github.com/nori-dot-eco/nori-dot-com/blob/a109103/packages/project/src/specification.ts#L1144)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

___

###  lbsOfNPerAcre

• **lbsOfNPerAcre**: *number*

*Defined in [specification.ts:1470](https://github.com/nori-dot-eco/nori-dot-com/blob/a109103/packages/project/src/specification.ts#L1470)*

Amount of nitrogen applied in lbs/ac.

**`example`** <caption>When 10 lbs of Nitrogen per acre was applied:</caption>

```js
"lbsOfNPerAcre": 150
```

___

### `Optional` productName

• **productName**? : *string*

*Defined in [specification.ts:1445](https://github.com/nori-dot-eco/nori-dot-com/blob/a109103/packages/project/src/specification.ts#L1445)*

The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`** <caption>When the name of the fertilizer used on the crop was known to the supplier as "Joe's fertilizer":</caption>

```js
"productName": "Joe's fertilizer"
```

___

### `Optional` type

• **type**? : *string*

*Defined in [specification.ts:1459](https://github.com/nori-dot-eco/nori-dot-com/blob/a109103/packages/project/src/specification.ts#L1459)*

The fertilizer classification type.

Note that the fertilizer type does not currently impact quantification as it only impacts n2o emissions. As such, we default the type to "mixed blends" when this property is excluded/nulled.

**`default`** "mixed blends"

**`example`** <caption>When the fertilizer type can be classified as mixed blends:</caption>

```js
"type": "mixed blends",
```
