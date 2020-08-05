[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [FertilizerEvent](_specification_.fertilizerevent.md)

# Interface: FertilizerEvent

Fertilizer event details

**`example`** 

```js
{
 "date": "10/01/2000",
 "productName": "Joe's fertilizer",
 "type": "mixed blends",
 "lbsOfNPerAcre": 10
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

*Defined in [specification.ts:591](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L591)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  lbsOfNPerAcre

• **lbsOfNPerAcre**: *number*

*Defined in [specification.ts:829](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L829)*

Amount of nitrogen applied in lbs/ac

___

### `Optional` productName

• **productName**? : *string*

*Defined in [specification.ts:816](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L816)*

The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.

___

### `Optional` type

• **type**? : *string*

*Defined in [specification.ts:825](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L825)*

**`default`** "mixed blends"

The fertilizer classification type

Note that the fertilizer type does not currently impact quantification as it only impacts n2o emissions. As such, we default the type to "mixed blends" when this property is excluded/nulled
