[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [Project](_specification_.project.md)

# Interface: Project

A supplier project entity which encapsulates a set of fields. This top-level interface defines all necessary properties for a supplier project created manually or via a data import

**`example`** 
```js
{
 "version": "0.1.0",
 "fields": [
   // define fields in this array
 ]
}
```

## Hierarchy

* **Project**

## Index

### Properties

* [fields](_specification_.project.md#fields)
* [version](_specification_.project.md#version)

## Properties

###  fields

• **fields**: *[Field](_specification_.field.md)[]*

*Defined in [specification.ts:72](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L72)*

An array of fields defining annual crop management practices

___

###  version

• **version**: *string*

*Defined in [specification.ts:68](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L68)*

The specification version. This information is used to determine the logic Nori uses to import a project.
