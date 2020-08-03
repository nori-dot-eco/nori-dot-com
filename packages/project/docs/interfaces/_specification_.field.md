[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [Field](_specification_.field.md)

# Interface: Field

A field defining annual crop management practices. Fields are defined by geographic boundaries that contain crop management practices that are identical across the whole of that boundary.

**`example`** 
```js
{
 "fieldName": "Pumpkin Pines",
 "acres": 100,
 "geojson": {},
 "cropYears": [] // a list of annual crop management practices
}
```

## Hierarchy

* **Field**

## Index

### Properties

* [acres](_specification_.field.md#acres)
* [cropYears](_specification_.field.md#cropyears)
* [fieldName](_specification_.field.md#fieldname)
* [geojson](_specification_.field.md#geojson)

## Properties

###  acres

• **acres**: *number*

*Defined in [specification.ts:102](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L102)*

**`nullable`** 
The number of acres that use the herein defined crop management practices (via `cropYears`).
When acres is defined as null in an import file it will instead be inferred from the geojson.

___

###  cropYears

• **cropYears**: *[CropYear](_specification_.cropyear.md)[]*

*Defined in [specification.ts:110](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L110)*

A list of crop management details grouped by the crop planting year.

___

###  fieldName

• **fieldName**: *string*

*Defined in [specification.ts:96](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L96)*

The name of the field

**`example`** 
```js
"fieldName": "PumpkinPines"
```

___

###  geojson

• **geojson**: *GeoJSON*

*Defined in [specification.ts:106](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L106)*

The geographic boundaries (defined as GeoJSON) associated with crop management practices.
