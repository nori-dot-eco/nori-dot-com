[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / Project

# Interface: Project

[v3-specification](../modules/v3_specification.md).Project

A supplier project entity which encapsulates a set of fields. This top-level interface defines all necessary properties for a supplier project created manually or via a data import file.

**`example`** A project that uses specification v 0.1.0 and contains a list of fields:
```js
{
 "version": "0.1.0",
 "fields": [
   // define fields in this array
 ]
}
```

**`errormessage`**
{
"_": "projectDataError:projectUnknownError"
}

## Table of contents

### Properties

- [fields](v3_specification.Project.md#fields)
- [version](v3_specification.Project.md#version)

## Properties

### fields

• **fields**: [`Field`](v3_specification.Field.md)[]

An array of fields defining annual crop management practices.

**`errormessage`**
{
"minItems": "projectDataError:projectFieldsMinimumItemsError",
"maxItems": "projectDataError:projectFieldsMaximumItemsError",
"type": "projectDataError:projectFieldsTypeError",
"_": "projectDataError:projectFieldsUnknownError"
}

**`minitems`** 1

**`maxitems`** 25

**`example`**

```js
"fields": [
 // ...Field
]
```

#### Defined in

v3-specification.ts:248

___

### version

• **version**: `string`

The specification version. This information is used to determine the logic Nori uses to import a project

**`errormessage`**
{
"type": "projectDataError:projectVersionTypeError",
"_": "projectDataError:projectVersionUnknownError"
}

**`example`**

```js
"version": "0.1.0"
```

#### Defined in

v3-specification.ts:224
