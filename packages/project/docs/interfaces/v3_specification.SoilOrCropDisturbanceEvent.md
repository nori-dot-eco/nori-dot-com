[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / SoilOrCropDisturbanceEvent

# Interface: SoilOrCropDisturbanceEvent

[v3-specification](../modules/v3_specification.md).SoilOrCropDisturbanceEvent

Soil or crop disturbance event event details.

**`example`**

```js
{
 "date": "10/01/2000",
 "type": "mow",
}
```

## Hierarchy

- [`CropEvent`](v3_specification.CropEvent.md)

  ↳ **`SoilOrCropDisturbanceEvent`**

## Table of contents

### Properties

- [date](v3_specification.SoilOrCropDisturbanceEvent.md#date)
- [name](v3_specification.SoilOrCropDisturbanceEvent.md#name)
- [type](v3_specification.SoilOrCropDisturbanceEvent.md#type)

## Properties

### date

• **date**: `string`

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`nullable`** during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** When the crop event occurred on January 1st of 2000:

```js
"date": "01/01/2000"
```

**`validationrules`** ["cropEventDateIsOnOrAfterContainingCropYear"]

**`errormessage`**
{
"type": "projectDataError:cropEventDateTypeError",
"validationRules": "projectDataError:cropEventDateValidationRuleViolation"
}

#### Inherited from

[CropEvent](v3_specification.CropEvent.md).[date](v3_specification.CropEvent.md#date)

#### Defined in

v3-specification.ts:1279

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

v3-specification.ts:1467

___

### type

• **type**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"mulch tillage"`` \| ``"ridge tillage"`` \| ``"strip tillage"`` \| ``"no tillage"`` \| ``"growing season cultivation"`` \| ``"mow"`` \| ``"crimp"`` \| ``"winter killed"`` \| ``"broad-spectrum herbicide"``

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

v3-specification.ts:1540
