[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / HarvestEvent

# Interface: HarvestEvent

[v4-specification](../modules/v4_specification.md).HarvestEvent

An annual crop's harvest event details.

**`example`** An annual harvest event that yielded 100 bu/ac that took place on October 1st of 2000:

```js
{
 "date": "2000-10-01",
 "yield": 100,
 "yieldUnit": "bu/ac",
 "grainFruitTuber": "n/a",
 "residueRemoved": 0,
}
```

## Table of contents

### Properties

- [grainFruitTuber](v4_specification.HarvestEvent.md#grainfruittuber)
- [residueRemoved](v4_specification.HarvestEvent.md#residueremoved)
- [yield](v4_specification.HarvestEvent.md#yield)
- [yieldUnit](v4_specification.HarvestEvent.md#yieldunit)

## Properties

### grainFruitTuber

• `Optional` **grainFruitTuber**: `boolean`

Whether the crop was harvest for grain, fruit or tuber.

**`nullable`** during import (specify null if you are unsure)

**`default`** no

**`example`** Select true if the crop was harvested for grain, fruit, or tuber:

```js
"grainFruitTuber": true
```

**`example`** Select false if the crop was harvested before maturity for silage or haylage:

```js
"grainFruitTuber": false
```

#### Defined in

[v4-specification.ts:1752](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L1752)

___

### residueRemoved

• `Optional` **residueRemoved**: `number`

Crop residue removed.

**`default`** 0

**`minimum`** 0

**`maximum`** 100

**`example`** Enter 0% if the crop was only harvested for grain / fruit / tuber or if it otherwise does not apply:

```js
"residueRemoved": 0
```

**`example`** Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest:

```js
"residueRemoved": 5
```

**`example`** Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage:

```js
"residueRemoved": 10
```

#### Defined in

[v4-specification.ts:1780](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L1780)

___

### yield

• `Optional` **yield**: `number`

The crop yield.

The current version of quantification does not consider yield when producing estimates. As such, we will default to 0 when left out.

**`default`** 0

**`example`** When 100 lbs of the crop specified was harvested (using the herein specified `yieldUnit`:

```js
"yield": 100
```

#### Defined in

[v4-specification.ts:1716](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L1716)

___

### yieldUnit

• `Optional` **yieldUnit**: ``"bu/ac"`` \| ``"cwt/ac"`` \| ``"tons/ac"`` \| ``"lbs/ac"``

The crop yield units.

The current version of quantification does not consider yield when producing estimates.

**`default`** "lbs/ac"

**`example`** When the unit of the yield is submitted in lbs per acre:

```js
"yieldUnit": "lbs/ac"
```

#### Defined in

[v4-specification.ts:1731](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L1731)
