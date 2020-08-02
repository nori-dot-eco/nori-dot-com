[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [Field](_specification_.field.md)

# Interface: Field

A field defining annual crop practices. Fields are defined by geographic boundaries that contain crop practices that are identical across the whole of that boundary.

**`example`** 
```json
{
 "fieldName": "Pumpkin Pines",
 "acres": 100,
 "geojson": {},
 "cropYears": [] // a list of annual crop practices
}
```

## Hierarchy

* **Field**

## Index

### Properties

* [acres](_specification_.field.md#optional-acres)
* [cropYears](_specification_.field.md#cropyears)
* [fieldName](_specification_.field.md#fieldname)
* [geojson](_specification_.field.md#geojson)

## Properties

### `Optional` acres

• **acres**? : *number*

*Defined in [specification.ts:83](https://github.com/nori-dot-eco/nori-dot-com/blob/49f839c/packages/project/src/specification.ts#L83)*

**`nullable`** 

___

###  cropYears

• **cropYears**: *[CropYear](_specification_.cropyear.md)[]*

*Defined in [specification.ts:88](https://github.com/nori-dot-eco/nori-dot-com/blob/49f839c/packages/project/src/specification.ts#L88)*

___

###  fieldName

• **fieldName**: *string*

*Defined in [specification.ts:81](https://github.com/nori-dot-eco/nori-dot-com/blob/49f839c/packages/project/src/specification.ts#L81)*

___

###  geojson

• **geojson**: *object*

*Defined in [specification.ts:86](https://github.com/nori-dot-eco/nori-dot-com/blob/49f839c/packages/project/src/specification.ts#L86)*

**`nullable`**
