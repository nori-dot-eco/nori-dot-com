[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / Project

# Interface: Project

[v3-specification](../modules/v3_specification.md).Project

A supplier project entity which encapsulates a set of fields. This top-level interface defines all necessary properties for a supplier project created manually or via a data import file.

**`Example`**

<caption>A project that uses specification v 0.1.0 and contains a list of fields:</caption>
```js
{
 "version": "0.1.0",
 "fields": [
   // define fields in this array
 ]
}
```

**`Error Message`**

```js
{
"_": "projectDataError:projectUnknownError"
}
```

## Table of contents

### Properties

- [fields](v3_specification.Project.md#fields)
- [version](v3_specification.Project.md#version)

## Properties

### fields

• **fields**: [`Field`](v3_specification.Field.md)[]

An array of fields defining annual crop management practices.

**`Error Message`**

```js
{
"minItems": "projectDataError:projectFieldsMinimumItemsError",
"maxItems": "projectDataError:projectFieldsMaximumItemsError",
"type": "projectDataError:projectFieldsTypeError",
"_": "projectDataError:projectFieldsUnknownError"
}
```

**`Min Items`**

1

**`Max Items`**

25

**`Example`**

```js
"fields": [
 // ...Field
]
```

#### Defined in

[v3-specification.ts:254](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L254)

___

### version

• **version**: `string`

The specification version. This information is used to determine the logic Nori uses to import a project

**`Error Message`**

```js
{
"type": "projectDataError:projectVersionTypeError",
"_": "projectDataError:projectVersionUnknownError"
}
```

**`Example`**

```js
"version": "0.1.0"
```

#### Defined in

[v3-specification.ts:228](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L228)
