[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / HarvestEvent

# Interface: HarvestEvent

[v4-specification](../modules/v4_specification.md).HarvestEvent

An annual crop's harvest event details.

**`Example`**

<caption>An annual harvest event that yielded 100 bu/ac that took place on October 1st of 2000:</caption>

```js
{
 "date": "2000-10-01",
 "yield": 100,
 "yieldUnit": "bu/ac",
 "grainFruitTuber": "n/a",
 "residueRemoved": 0,
}
```

## Hierarchy

- [`CropEvent`](v4_specification.CropEvent.md)

  ↳ **`HarvestEvent`**

## Table of contents

### Properties

- [date](v4_specification.HarvestEvent.md#date)
- [externalId](v4_specification.HarvestEvent.md#externalid)
- [grainFruitTuber](v4_specification.HarvestEvent.md#grainfruittuber)
- [id](v4_specification.HarvestEvent.md#id)
- [residueRemoved](v4_specification.HarvestEvent.md#residueremoved)
- [source](v4_specification.HarvestEvent.md#source)
- [yield](v4_specification.HarvestEvent.md#yield)
- [yieldUnit](v4_specification.HarvestEvent.md#yieldunit)

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

[v4-specification.ts:1605](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1605)

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

[v4-specification.ts:1618](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1618)

___

### grainFruitTuber

• `Optional` **grainFruitTuber**: `boolean`

Whether the crop was harvest for grain, fruit or tuber.

**`Nullable`**

during import (specify null if you are unsure)

**`Default`**

```ts
no
```

**`Example`**

<caption>Select true if the crop was harvested for grain, fruit, or tuber:</caption>

```js
"grainFruitTuber": true
```

**`Example`**

<caption>Select false if the crop was harvested before maturity for silage or haylage:</caption>

```js
"grainFruitTuber": false
```

#### Defined in

[v4-specification.ts:1725](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1725)

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

[v4-specification.ts:1631](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1631)

___

### residueRemoved

• `Optional` **residueRemoved**: `number`

Crop residue removed.

**`Default`**

```ts
0
```

**`Minimum`**

0

**`Maximum`**

100

**`Example`**

<caption>Enter 0% if the crop was only harvested for grain / fruit / tuber or if it otherwise does not apply:</caption>

```js
"residueRemoved": 0
```

**`Example`**

<caption>Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest:</caption>

```js
"residueRemoved": 5
```

**`Example`**

<caption>Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage:</caption>

```js
"residueRemoved": 10
```

#### Defined in

[v4-specification.ts:1748](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1748)

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

[v4-specification.ts:1649](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1649)

___

### yield

• `Optional` **yield**: `number`

The crop yield.

The current version of quantification does not consider yield when producing estimates. As such, we will default to 0 when left out.

**`Default`**

```ts
0
```

**`Example`**

<caption>When 100 lbs of the crop specified was harvested (using the herein specified `yieldUnit`:</caption>

```js
"yield": 100
```

#### Defined in

[v4-specification.ts:1695](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1695)

___

### yieldUnit

• `Optional` **yieldUnit**: ``"bu/ac"`` \| ``"cwt/ac"`` \| ``"tons/ac"`` \| ``"lbs/ac"``

The crop yield units.

The current version of quantification does not consider yield when producing estimates.

**`Default`**

```ts
"lbs/ac"
```

**`Example`**

<caption>When the unit of the yield is submitted in lbs per acre:</caption>

```js
"yieldUnit": "lbs/ac"
```

#### Defined in

[v4-specification.ts:1708](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1708)
