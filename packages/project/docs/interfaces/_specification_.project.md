[@nori-dot-com/project](../README.md) › ["specification"](../modules/_specification_.md) › [Project](_specification_.project.md)

# Interface: Project

A supplier project entity which encapsulates a set of fields. This top-level interface defines all necessary properties for a supplier project created manually or via a data import file.

**`example`** <caption>A project that uses specification v 0.1.0 and contains a list of fields:</caption>
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

*Defined in [specification.ts:89](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L89)*

An array of fields defining annual crop management practices.

**`errormessage`** must specify 1-25 fields

**`minitems`** 1

**`maxitems`** 25

**`example`** 

```js
"fields": [
 // ...Field
]
```

___

###  version

• **version**: *string*

*Defined in [specification.ts:71](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L71)*

The specification version. This information is used to determine the logic Nori uses to import a project

**`errormessage`** must use a string value to indicate the version number

**`example`** 

```js
"version": "0.1.0"
```
