[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / Project

# Interface: Project

[specification](../modules/specification.md).Project

A supplier project entity which encapsulates a set of fields. This top-level interface defines all necessary properties for a supplier project created manually or via a data import file.

**`example`** A project that uses specification v3.1.0 and contains a list of fields:
```js
{
 "version": "3.1.0",
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

- [fields](specification.Project.md#fields)
- [version](specification.Project.md#version)

## Properties

### fields

• **fields**: [`Field`](specification.Field.md)[]

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

[specification.ts:248](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L248)

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
"version": "3.1.0"
```

#### Defined in

[specification.ts:224](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L224)
