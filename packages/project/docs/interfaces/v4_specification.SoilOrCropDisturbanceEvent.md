[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / SoilOrCropDisturbanceEvent

# Interface: SoilOrCropDisturbanceEvent

[v4-specification](../modules/v4_specification.md).SoilOrCropDisturbanceEvent

Soil or crop disturbance event event details.

**`example`**

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

• **date**: `Date`

The date the crop event happened (formatted as ISO8061 date: YYYY-MM-DD and YYYY > 2000 and YYYY < 2100).

Dates for liming and burning can be approximate or the first day of the crop year.

**`example`** When the crop event occurred on January 1st of 2000:

```js
"date": "2000-01-01"
```

**`validationrules`** ["cropEventDateIsOnOrAfterContainingCropYear"]

**`format`** date

**`errormessage`**
{
"type": "projectDataError:cropEventDateTypeError",
"validationRules": "projectDataError:cropEventDateValidationRuleViolation"
}

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[date](v4_specification.CropEvent.md#date)

#### Defined in

[v4-specification.ts:1781](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1781)

___

### externalId

• `Optional` **externalId**: `string`

External crop event identifier.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`nullable`**

**`example`**

```js
"externalId": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[externalId](v4_specification.CropEvent.md#externalid)

#### Defined in

[v4-specification.ts:1796](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1796)

___

### id

• `Optional` **id**: `string`

Nori's internal crop event identifier.

Used to synchronize repeated imports.

**`nullable`** External systems leave this blank for new projects.

**`example`**

```js
"id": "20e75f5e-05e6-4a4d-92a7-9987de55c586"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[id](v4_specification.CropEvent.md#id)

#### Defined in

[v4-specification.ts:1811](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1811)

___

### name

• `Optional` **name**: `string`

The name/alias that the soil or crop disturbance events practice is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`example`** When the name of the soil or crop disturbance used on the crop was known to the supplier as "Orange Tiller":

```js
"name": "Orange Tiller"
```

#### Defined in

[v4-specification.ts:1973](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1973)

___

### source

• `Optional` **source**: `string`

Source of the event

Optional field to indicate what system this data point originated from.

**`nullable`**

**`example`**

```js
"source": "CDL"
```

**`example`**

```js
"source": "FMS name"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[source](v4_specification.CropEvent.md#source)

#### Defined in

[v4-specification.ts:1832](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1832)

___

### type

• **type**: ``"bedder/hipper"`` \| ``"chisel plow"`` \| ``"crimp"`` \| ``"cultipacker"`` \| ``"cultivator"`` \| ``"cultivator - field"`` \| ``"cultivator - row"`` \| ``"disk"`` \| ``"finisher"`` \| ``"harrow"`` \| ``"herbicide burn down"`` \| ``"hipper bedder"`` \| ``"intensive tillage"`` \| ``"landstar"`` \| ``"minimum tillage"`` \| ``"moldboard plow"`` \| ``"mow"`` \| ``"mulch tillage"`` \| ``"mulcher"`` \| ``"no-till planting"`` \| ``"reduced tillage"`` \| ``"residue tillage"`` \| ``"ridge tillage"`` \| ``"ripper - disk"`` \| ``"ripper - inline"`` \| ``"roller"`` \| ``"speed till"`` \| ``"strip till"`` \| ``"strip tillage"`` \| ``"tandem disk"`` \| ``"vertical"`` \| ``"zone till"`` \| ``"winter kill"`` \| ``"broad-spectrum herbicide"``

The soil or crop disturbance events classification type.

You can find a list of common equivalents [here](https://go.nori.com/inputs).

**`example`** Little to no crop residue remains on the surface after tillage:

```js
"type": "intensive tillage"
```

**`example`** 15-30% of crop residue remains on the surface after tillage:

```js
"type": "reduced tillage"
```

**`example`** 30% or more of crop residue remains on the surface after tillage:

```js
"type": "mulch tillage"
```

**`example`** 30% or more of crop residue remains on the surface after tillage:

```js
"type": "ridge tillage"
```

**`example`** 75% or more of crop residue remains on the surface after tillage:

```js
"type": "strip tillage"
```

**`example`** 75% or more of crop residue remains on the surface after tillage:

```js
"type": "no-till planting"
```

**`example`** 50-60% of standing live and dead plant biomass is cut and left lying as surface residue. The standing live plant is left alive to continue growing:

```js
"type": "mow"
```

**`example`** 100% of standing live and dead plants are cut, chopped and incorporated into surface residue. The standing live plant is killed in the process:

```js
"type": "crimp"
```

**`example`** Cover crop died in winter:

```js
"type": "winter kill"
```

**`example`** 100% of all plants are killed, including both growing crops (e.g. corn, soy, alfalfa) and weeds:

```js
"type": "broad-spectrum herbicide"
```

#### Defined in

[v4-specification.ts:2040](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L2040)
