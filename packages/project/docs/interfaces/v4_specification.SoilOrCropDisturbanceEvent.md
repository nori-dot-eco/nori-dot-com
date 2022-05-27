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

[v4-specification.ts:1744](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1744)

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

[v4-specification.ts:1759](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1759)

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

[v4-specification.ts:1774](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1774)

___

### name

• `Optional` **name**: `string`

The name/alias that the soil or crop disturbance events practice is known by. This property is used in the to-be-deprecated supplier intake sheet.

When defaulting to "no tillage", a default value will also be used for the event data equal to the planting date of the crop.

**`todo`** this property will be deprecated in the future

**`default`** "no tillage"

**`example`** When the name of the soil or crop disturbance used on the crop was known to the supplier as "Joe's tillage method":

```js
"name": "Joe's tillage method"
```

#### Defined in

[v4-specification.ts:1921](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1921)

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
"type": "no tillage"
```

**`example`** Weeds are killed and turned into the soil surface layer:

```js
"type": "growing season cultivation"
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
"type": "winter killed"
```

**`example`** 100% of all plants are killed, including both growing crops (e.g. corn, soy, alfalfa) and weeds:

```js
"type": "broad-spectrum herbicide"
```

#### Defined in

[v4-specification.ts:1994](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1994)
