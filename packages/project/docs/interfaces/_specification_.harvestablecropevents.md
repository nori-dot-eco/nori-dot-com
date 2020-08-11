[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [HarvestableCropEvents](_specification_.harvestablecropevents.md)

# Interface: HarvestableCropEvents

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

  ↳ [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md)

  ↳ [PerennialCrop](_specification_.perennialcrop.md)

  ↳ [AnnualCrop](_specification_.annualcrop.md)

## Index

### Properties

* [harvestEvents](_specification_.harvestablecropevents.md#optional-harvestevents)

## Properties

### `Optional` harvestEvents

• **harvestEvents**? : *[AnnualCropHarvestEvent](_specification_.annualcropharvestevent.md) | [CropManagementEvent](_specification_.cropmanagementevent.md)[]*

*Defined in [specification.ts:672](https://github.com/nori-dot-eco/nori-dot-com/blob/526533c/packages/project/src/specification.ts#L672)*

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
