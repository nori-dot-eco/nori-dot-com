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

## Table of contents

### Properties

- [fields](v3_specification.Project.md#fields)
- [version](v3_specification.Project.md#version)

## Properties

### fields

• **fields**: [`Field`](v3_specification.Field.md)[]

An array of fields defining annual crop management practices.

**`Error Message`**

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

[v3-specification.ts:248](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L248)

___

### version

• **version**: `string`

The specification version. This information is used to determine the logic Nori uses to import a project

**`Error Message`**

**`Example`**

```js
"version": "0.1.0"
```

#### Defined in

[v3-specification.ts:224](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L224)
