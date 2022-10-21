[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / HarvestableCropEvents

# Interface: HarvestableCropEvents

[v3-specification](../modules/v3_specification.md).HarvestableCropEvents

Crop harvest events.

**`Example`**

<caption>When an annual crop had a harvest event:</caption>

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

  ↳ [`OrchardOrVineyardCrop`](v3_specification.OrchardOrVineyardCrop.md)

  ↳ [`PerennialCrop`](v3_specification.PerennialCrop.md)

  ↳ [`AnnualCrop`](v3_specification.AnnualCrop.md)

## Table of contents

### Properties

- [harvestEvents](v3_specification.HarvestableCropEvents.md#harvestevents)

## Properties

### harvestEvents

• `Optional` **harvestEvents**: ([`AnnualCropHarvestEvent`](v3_specification.AnnualCropHarvestEvent.md) \| [`CropManagementEvent`](v3_specification.CropManagementEvent.md))[]

A list of harvest events, if applicable.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`Example`**

<caption>When crop had at least one harvest event:</caption>

```js
 "harvestEvents": [
   // ...list of AnnualCropHarvestEvents or CropManagementEvents
 ]
```

#### Defined in

[v3-specification.ts:837](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L837)
