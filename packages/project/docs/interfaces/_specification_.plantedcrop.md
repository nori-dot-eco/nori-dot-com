[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [PlantedCrop](_specification_.plantedcrop.md)

# Interface: PlantedCrop

Crop properties relevant to planted crops.

**`example`** 

```js
{
 "plantingDate": "01/01/2000";
}
```

## Hierarchy

* **PlantedCrop**

  ↳ [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md)

  ↳ [PerennialCrop](_specification_.perennialcrop.md)

  ↳ [CoverCrop](_specification_.covercrop.md)

  ↳ [AnnualCrop](_specification_.annualcrop.md)

## Index

### Properties

* [plantingDate](_specification_.plantedcrop.md#plantingdate)

## Properties

###  plantingDate

• **plantingDate**: *string*

*Defined in [specification.ts:583](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L583)*

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`.

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop was planted on January 1st of year 2000:</caption>

```js
"plantingDate": "01/01/2000"
```