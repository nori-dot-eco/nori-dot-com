[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)

# Interface: SoilOrCropDisturbanceEvent

Soil or crop disturbance event event details.

**`example`** 

```js
{
 "date": "10/01/2000",
 "type": "mow",
}
```

## Hierarchy

* [CropEvent](_specification_.cropevent.md)

  ↳ **SoilOrCropDisturbanceEvent**

## Index

### Properties

* [date](_specification_.soilorcropdisturbanceevent.md#date)
* [name](_specification_.soilorcropdisturbanceevent.md#optional-name)
* [type](_specification_.soilorcropdisturbanceevent.md#type)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:1170](https://github.com/nori-dot-eco/nori-dot-com/blob/f7a6776/packages/project/src/specification.ts#L1170)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

___

### `Optional` name

• **name**? : *string*

*Defined in [specification.ts:1358](https://github.com/nori-dot-eco/nori-dot-com/blob/f7a6776/packages/project/src/specification.ts#L1358)*

The name/alias that the soil or crop disturbance events practice is known by. This property is used in the to-be-deprecated supplier intake sheet.

When defaulting to "no tillage", a default value will also be used for the event data equal to the planting date of the crop.

**`todo`** this property will be deprecated in the future

**`default`** "no tillage"

**`example`** <caption>When the name of the soil or crop disturbance used on the crop was known to the supplier as "Joe's tillage method":</caption>

```js
"name": "Joe's tillage method"
```

___

###  type

• **type**: *"intensive tillage" | "reduced tillage" | "mulch tillage" | "ridge tillage" | "strip tillage" | "no tillage" | "growing season cultivation" | "mow" | "crimp" | "winter killed" | "broad-spectrum herbicide"*

*Defined in [specification.ts:1431](https://github.com/nori-dot-eco/nori-dot-com/blob/f7a6776/packages/project/src/specification.ts#L1431)*

The soil or crop disturbance events classification type.

You can find a list of common equivalents [here](https://go.nori.com/inputs).

**`example`** <caption>Little to no crop residue remains on the surface after tillage:</caption>

```js
"type": "intensive tillage"
```

**`example`** <caption>15-30% of crop residue remains on the surface after tillage:</caption>

```js
"type": "reduced tillage"
```

**`example`** <caption>30% or more of crop residue remains on the surface after tillage:</caption>

```js
"type": "mulch tillage"
```

**`example`** <caption>30% or more of crop residue remains on the surface after tillage:</caption>

```js
"type": "ridge tillage"
```

**`example`** <caption>75% or more of crop residue remains on the surface after tillage:</caption>

```js
"type": "strip tillage"
```

**`example`** <caption>75% or more of crop residue remains on the surface after tillage:</caption>

```js
"type": "no tillage"
```

**`example`** <caption>Weeds are killed and turned into the soil surface layer:</caption>

```js
"type": "growing season cultivation"
```

**`example`** <caption>50-60% of standing live and dead plant biomass is cut and left lying as surface residue. The standing live plant is left alive to continue growing:</caption>

```js
"type": "mow"
```

**`example`** <caption>100% of standing live and dead plants are cut, chopped and incorporated into surface residue. The standing live plant is killed in the process:</caption>

```js
"type": "crimp"
```

**`example`** <caption>Cover crop died in winter:</caption>

```js
"type": "winter killed"
```

**`example`** <caption>100% of all plants are killed, including both growing crops (e.g. corn, soy, alfalfa) and weeds:</caption>

```js
"type": "broad-spectrum herbicide"
```
