[@nori-dot-com/project](../README.md) › ["specification"](../modules/_specification_.md) › [FertilizerEvent](_specification_.fertilizerevent.md)

# Interface: FertilizerEvent

Fertilizer event details.

**`example`** 

```js
{
 "date": "10/01/2000",
 "name": "Joe's fertilizer",
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
* [name](_specification_.fertilizerevent.md#optional-name)
* [type](_specification_.fertilizerevent.md#optional-type)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:1160](https://github.com/nori-dot-eco/nori-dot-com/blob/1131583/packages/project/src/specification.ts#L1160)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`nullable`** during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

___

###  lbsOfNPerAcre

• **lbsOfNPerAcre**: *number*

*Defined in [specification.ts:1512](https://github.com/nori-dot-eco/nori-dot-com/blob/1131583/packages/project/src/specification.ts#L1512)*

Amount of nitrogen applied in lbs/ac.

**`nullable`** during import (specify null if you are unsure)

**`example`** <caption>When 10 lbs of Nitrogen per acre was applied:</caption>

```js
"lbsOfNPerAcre": 150
```

___

### `Optional` name

• **name**? : *string*

*Defined in [specification.ts:1463](https://github.com/nori-dot-eco/nori-dot-com/blob/1131583/packages/project/src/specification.ts#L1463)*

The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`** <caption>When the name of the fertilizer used on the crop was known to the supplier as "Joe's fertilizer":</caption>

```js
"name": "Joe's fertilizer"
```

___

### `Optional` type

• **type**? : *"ammonium nitrate (34-0-0)" | "ammonium nitrate phosphate (23-23-00)" | "ammonium nitrate phosphate (27-14-00)" | "ammonium phosphate sulphate (16-20-00)" | "ammonium polyphosphate solution (10-34-00)" | "ammonium sulphate (21-00-00)" | "ammonium thiosulphate solution (12-00-00)" | "anhydrous ammonia (gas) (82-00-00)" | "calcium ammonium nitrate" | "calcium nitrate" | "diammonium phosphate (18-46-00)" | "element-n (n)" | "element-p (p)" | "mixed blends" | "monoammonium phosphate (11-55-00)" | "monoammonium phosphate (12-51-00)" | "potassium nitrate" | "urea (46-00-00)" | "urea ammonium nitrate (30-00-00)" | "urea ammonium phosphate (27-27-00)" | "urea ammonium phosphate (34-17-00)"*

*Defined in [specification.ts:1478](https://github.com/nori-dot-eco/nori-dot-com/blob/1131583/packages/project/src/specification.ts#L1478)*

The fertilizer classification type.

Note that the fertilizer type does not currently impact quantification as it only impacts n2o emissions. As such, we default the type to "mixed blends" when this property is excluded/nulled.

**`default`** "mixed blends"

**`example`** <caption>When the fertilizer type can be classified as mixed blends:</caption>

```js
"type": "mixed blends",
```
