[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / PlantedCrop

# Interface: PlantedCrop

[specification](../modules/specification.md).PlantedCrop

Crop properties relevant to planted crops.

**`example`**

```js
{
 "plantingDate": "01/01/2000";
}
```

## Hierarchy

- **`PlantedCrop`**

  ↳ [`OrchardOrVineyardCrop`](specification.OrchardOrVineyardCrop.md)

  ↳ [`PerennialCrop`](specification.PerennialCrop.md)

  ↳ [`CoverCrop`](specification.CoverCrop.md)

  ↳ [`AnnualCrop`](specification.AnnualCrop.md)

## Table of contents

### Properties

- [id](specification.PlantedCrop.md#id)
- [name](specification.PlantedCrop.md#name)
- [plantingDate](specification.PlantedCrop.md#plantingdate)

## Properties

### id

• `Optional` **id**: `string`

Optional crop identifier.  Global crop profile or crop+field+year identifier from exporting system.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`example`**

```js
"id": "corn-456"
```

**`example`**

```js
"id": "corn-456-2019"
```

#### Defined in

[specification.ts:809](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L809)

___

### name

• `Optional` **name**: `string`

The name/alias that the crop is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`**

```js
"name": "Joe's corn"
```

#### Defined in

[specification.ts:774](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L774)

___

### plantingDate

• **plantingDate**: `string`

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`.

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** When the crop was planted on January 1st of year 2000:

```js
"plantingDate": "01/01/2000"
```

#### Defined in

[specification.ts:789](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L789)
