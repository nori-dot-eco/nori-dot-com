[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / SoilOrCropDisturbanceEvent

# Interface: SoilOrCropDisturbanceEvent

[v4-specification](../modules/v4_specification.md).SoilOrCropDisturbanceEvent

Soil or crop disturbance event event details.

**`Example`**

```js
{
 "date": "2000-10-01",
 "type": "mow",
}
```

## Hierarchy

- [`CropEvent`](v4_specification.CropEvent.md)

  ↳ **`SoilOrCropDisturbanceEvent`**

## Table of contents

### Properties

- [date](v4_specification.SoilOrCropDisturbanceEvent.md#date)
- [externalId](v4_specification.SoilOrCropDisturbanceEvent.md#externalid)
- [id](v4_specification.SoilOrCropDisturbanceEvent.md#id)
- [name](v4_specification.SoilOrCropDisturbanceEvent.md#name)
- [source](v4_specification.SoilOrCropDisturbanceEvent.md#source)
- [type](v4_specification.SoilOrCropDisturbanceEvent.md#type)

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

### name

• `Optional` **name**: `string`

The name/alias that the soil or crop disturbance events practice is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`Example`**

<caption>When the name of the soil or crop disturbance used on the crop was known to the supplier as "Orange Tiller":</caption>

```js
"name": "Orange Tiller"
```

#### Defined in

[v4-specification.ts:1773](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1773)

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

### type

• **type**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"mulch tillage"`` \| ``"ridge tillage"`` \| ``"strip tillage"`` \| ``"mow"`` \| ``"crimp"`` \| ``"broad-spectrum herbicide"`` \| ``"bedder/hipper"`` \| ``"chisel plow"`` \| ``"cultipacker"`` \| ``"cultivator"`` \| ``"cultivator - field"`` \| ``"cultivator - row"`` \| ``"disk"`` \| ``"finisher"`` \| ``"harrow"`` \| ``"herbicide burn down"`` \| ``"hipper bedder"`` \| ``"landstar"`` \| ``"minimum tillage"`` \| ``"moldboard plow"`` \| ``"mulcher"`` \| ``"no-till planting"`` \| ``"residue tillage"`` \| ``"ripper - disk"`` \| ``"ripper - inline"`` \| ``"roller"`` \| ``"speed till"`` \| ``"strip till"`` \| ``"tandem disk"`` \| ``"vertical"`` \| ``"zone till"`` \| ``"winter kill"``

The soil or crop disturbance events classification type.

You can find a list of common equivalents [here](https://go.nori.com/inputs).

**`Example`**

<caption>Little to no crop residue remains on the surface after tillage:</caption>

```js
"type": "intensive tillage"
```

**`Example`**

<caption>15-30% of crop residue remains on the surface after tillage:</caption>

```js
"type": "reduced tillage"
```

**`Example`**

<caption>30% or more of crop residue remains on the surface after tillage:</caption>

```js
"type": "mulch tillage"
```

**`Example`**

<caption>30% or more of crop residue remains on the surface after tillage:</caption>

```js
"type": "ridge tillage"
```

**`Example`**

<caption>75% or more of crop residue remains on the surface after tillage:</caption>

```js
"type": "strip tillage"
```

**`Example`**

<caption>75% or more of crop residue remains on the surface after tillage:</caption>

```js
"type": "no-till planting"
```

**`Example`**

<caption>50-60% of standing live and dead plant biomass is cut and left lying as surface residue. The standing live plant is left alive to continue growing:</caption>

```js
"type": "mow"
```

**`Example`**

<caption>100% of standing live and dead plants are cut, chopped and incorporated into surface residue. The standing live plant is killed in the process:</caption>

```js
"type": "crimp"
```

**`Example`**

<caption>Cover crop died in winter:</caption>

```js
"type": "winter kill"
```

**`Example`**

<caption>100% of all plants are killed, including both growing crops (e.g. corn, soy, alfalfa) and weeds:</caption>

```js
"type": "broad-spectrum herbicide"
```

#### Defined in

[v4-specification.ts:1830](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1830)
