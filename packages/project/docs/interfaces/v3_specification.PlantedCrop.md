[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / PlantedCrop

# Interface: PlantedCrop

[v3-specification](../modules/v3_specification.md).PlantedCrop

Crop properties relevant to planted crops.

**`Example`**

```js
{
 "plantingDate": "01/01/2000";
}
```

## Hierarchy

- **`PlantedCrop`**

  ↳ [`OrchardOrVineyardCrop`](v3_specification.OrchardOrVineyardCrop.md)

  ↳ [`PerennialCrop`](v3_specification.PerennialCrop.md)

  ↳ [`CoverCrop`](v3_specification.CoverCrop.md)

  ↳ [`AnnualCrop`](v3_specification.AnnualCrop.md)

## Table of contents

### Properties

- [name](v3_specification.PlantedCrop.md#name)
- [plantingDate](v3_specification.PlantedCrop.md#plantingdate)

## Properties

### name

• `Optional` **name**: `string`

The name/alias that the crop is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`Todo`**

this property will be deprecated in the future

**`Example`**

```js
"name": "Joe's corn"
```

#### Defined in

[v3-specification.ts:784](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v3-specification.ts#L784)

___

### plantingDate

• **plantingDate**: `string`

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`.

**`Pattern`**

^02/(?:[01]\d|2\d)/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)/(?:[0-2]\d|3[01])/(?:20)\d{2}|(?:0[469]|11)/(?:[0-2]\d|30)/(?:20)\d{2}|02/(?:[0-1]\d|2[0-8])/(?:20)\d{2}$

**`Example`**

<caption>When the crop was planted on January 1st of year 2000:</caption>

```js
"plantingDate": "01/01/2000"
```

#### Defined in

[v3-specification.ts:799](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v3-specification.ts#L799)
