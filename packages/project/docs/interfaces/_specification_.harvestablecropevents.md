[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [HarvestableCropEvents](_specification_.harvestablecropevents.md)

# Interface: HarvestableCropEvents

Crop harvest events

**`example`** 

```js
{
 "harvestEvents": [
   // ...
 ],
}
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

*Defined in [specification.ts:326](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L326)*

A list of harvest events, if applicable. When it is not applicable it can be defined as null.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.
