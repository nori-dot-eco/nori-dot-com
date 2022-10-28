[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / FertilizerEvent

# Interface: FertilizerEvent

[v4-specification](../modules/v4_specification.md).FertilizerEvent

Fertilizer event details.

**`Example`**

```js
{
 "date": "2000-10-01",
 "name": "Joe's fertilizer",
 "type": "mixed blends",
 "lbsOfNPerAcre": 10
}
```

## Hierarchy

- [`CropEvent`](v4_specification.CropEvent.md)

  ↳ **`FertilizerEvent`**

## Table of contents

### Properties

- [date](v4_specification.FertilizerEvent.md#date)
- [externalId](v4_specification.FertilizerEvent.md#externalid)
- [id](v4_specification.FertilizerEvent.md#id)
- [lbsOfNPerAcre](v4_specification.FertilizerEvent.md#lbsofnperacre)
- [name](v4_specification.FertilizerEvent.md#name)
- [source](v4_specification.FertilizerEvent.md#source)
- [type](v4_specification.FertilizerEvent.md#type)

## Properties

### date

• **date**: `string`

The date the crop event happened (formatted as ISO8061 date: YYYY-MM-DD and YYYY > 2000 and YYYY < 2100).

Dates for liming and burning can be approximate or the first day of the crop year.

**`Example`**

<caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "2000-01-01"
```

**`Validation Rules`**

["cropEventDateIsOnOrAfterContainingCropYear"]

**`Format`**

date

**`Error Message`**

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[date](v4_specification.CropEvent.md#date)

#### Defined in

[v4-specification.ts:1844](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1844)

___

### externalId

• `Optional` **externalId**: `string`

External crop event identifier.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`Nullable`**

**`Example`**

```js
"externalId": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[externalId](v4_specification.CropEvent.md#externalid)

#### Defined in

[v4-specification.ts:1859](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1859)

___

### id

• `Optional` **id**: `string`

Nori's internal crop event identifier.

Used to synchronize repeated imports.

**`Nullable`**

External systems pass null or omit the property for new projects.

**`Example`**

```js
"id": "20e75f5e-05e6-4a4d-92a7-9987de55c586"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[id](v4_specification.CropEvent.md#id)

#### Defined in

[v4-specification.ts:1874](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1874)

___

### lbsOfNPerAcre

• **lbsOfNPerAcre**: `number`

Amount of nitrogen applied in lbs/ac.

**`Nullable`**

during import (specify null if you are unsure)

**`Example`**

<caption>When 10 lbs of Nitrogen per acre was applied:</caption>

```js
"lbsOfNPerAcre": 10
```

#### Defined in

[v4-specification.ts:2163](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L2163)

___

### name

• `Optional` **name**: `string`

The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`Todo`**

this property will be deprecated in the future

**`Example`**

<caption>When the name of the fertilizer used on the crop was known to the supplier as "Joe's fertilizer":</caption>

```js
"name": "Joe's fertilizer"
```

#### Defined in

[v4-specification.ts:2134](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L2134)

___

### source

• `Optional` **source**: `string`

Source of the event

Optional field to indicate what system this data point originated from.

**`Nullable`**

**`Example`**

```js
"source": "CDL"
```

**`Example`**

```js
"source": "FMS name"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[source](v4_specification.CropEvent.md#source)

#### Defined in

[v4-specification.ts:1895](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1895)

___

### type

• `Optional` **type**: ``"ammonium nitrate (34-0-0)"`` \| ``"ammonium nitrate phosphate (23-23-00)"`` \| ``"ammonium nitrate phosphate (27-14-00)"`` \| ``"ammonium phosphate sulphate (16-20-00)"`` \| ``"ammonium polyphosphate solution (10-34-00)"`` \| ``"ammonium sulphate (21-00-00)"`` \| ``"ammonium thiosulphate solution (12-00-00)"`` \| ``"anhydrous ammonia (gas) (82-00-00)"`` \| ``"calcium ammonium nitrate"`` \| ``"calcium nitrate"`` \| ``"diammonium phosphate (18-46-00)"`` \| ``"element-n (n)"`` \| ``"element-p (p)"`` \| ``"mixed blends"`` \| ``"monoammonium phosphate (11-55-00)"`` \| ``"monoammonium phosphate (12-51-00)"`` \| ``"phosphate (00-32-00)"`` \| ``"potash (00-00-60)"`` \| ``"potassium nitrate"`` \| ``"urea (46-00-00)"`` \| ``"urea ammonium nitrate (30-00-00)"`` \| ``"urea ammonium phosphate (27-27-00)"`` \| ``"urea ammonium phosphate (34-17-00)"``

The fertilizer classification type.

Note that the fertilizer type does not currently impact quantification as it only impacts n2o emissions.
As such, we default the type to "mixed blends" when this property is excluded/nulled.

**`Default`**

"mixed blends"

**`Example`**

<caption>Potash applied:</caption>

```js
"type": "potash (00-00-60)",
```

#### Defined in

[v4-specification.ts:2150](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L2150)
