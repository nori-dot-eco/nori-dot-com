[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / HarvestableCropEvents

# Interface: HarvestableCropEvents

[specification](../modules/specification.md).HarvestableCropEvents

Crop harvest events.

**`example`** When an annual crop had a harvest event:

```js
 "harvestEvents": [
   {
     "date": "10/01/2000",
     "yield": 100,
     "yieldUnit": "bu/ac",
     "grainFruitTuber": "n/a",
   }
 ]
```

## Hierarchy

- **`HarvestableCropEvents`**

  ↳ [`OrchardOrVineyardCrop`](specification.OrchardOrVineyardCrop.md)

  ↳ [`PerennialCrop`](specification.PerennialCrop.md)

  ↳ [`AnnualCrop`](specification.AnnualCrop.md)

## Table of contents

### Properties

- [harvestEvents](specification.HarvestableCropEvents.md#harvestevents)

## Properties

### harvestEvents

• `Optional` **harvestEvents**: ([`AnnualCropHarvestEvent`](specification.AnnualCropHarvestEvent.md) \| [`CropManagementEvent`](specification.CropManagementEvent.md))[]

A list of harvest events, if applicable.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`example`** When crop had at least one harvest event:

```js
 "harvestEvents": [
   // ...list of AnnualCropHarvestEvents or CropManagementEvents
 ]
```

#### Defined in

[specification.ts:847](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L847)
