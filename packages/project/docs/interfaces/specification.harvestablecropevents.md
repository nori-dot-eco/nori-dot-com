[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / HarvestableCropEvents

# Interface: HarvestableCropEvents

[specification](../modules/specification.md).HarvestableCropEvents

Crop harvest events.

**`example`** <caption>When an annual crop had a harvest event:</caption>

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

* **HarvestableCropEvents**

  ↳ [*OrchardOrVineyardCrop*](specification.orchardorvineyardcrop.md)

  ↳ [*PerennialCrop*](specification.perennialcrop.md)

  ↳ [*AnnualCrop*](specification.annualcrop.md)

## Table of contents

### Properties

- [harvestEvents](specification.harvestablecropevents.md#harvestevents)

## Properties

### harvestEvents

• `Optional` **harvestEvents**: ([*AnnualCropHarvestEvent*](specification.annualcropharvestevent.md) \| [*CropManagementEvent*](specification.cropmanagementevent.md))[]

A list of harvest events, if applicable.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`example`** <caption>When crop had at least one harvest event:</caption>

```js
 "harvestEvents": [
   // ...list of AnnualCropHarvestEvents or CropManagementEvents
 ]
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:748](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L748)
