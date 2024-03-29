[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / Project

# Interface: Project

[v4-specification](../modules/v4_specification.md).Project

A project encapsulates a set of fields. This is the top-level interface of Nori's Croplands Data Import format.

A project may represent either a complete farming operation for a single operator or a batch
of fields from a data aggregator.

@$id https://schema.nori.com/soil/4-2-0

**`Example`**

<caption>A project that uses specification v4.2.1 and contains a list of fields:</caption>

```js
{
 "version": "4.2.1",
 "fields": [
   ...fields
 ]
}
```

**`Error Message`**

## Table of contents

### Properties

- [externalId](v4_specification.Project.md#externalid)
- [farmAddress](v4_specification.Project.md#farmaddress)
- [fields](v4_specification.Project.md#fields)
- [id](v4_specification.Project.md#id)
- [primaryContact](v4_specification.Project.md#primarycontact)
- [projectName](v4_specification.Project.md#projectname)
- [supplierId](v4_specification.Project.md#supplierid)
- [totalCroppedAcres](v4_specification.Project.md#totalcroppedacres)
- [totalFarmAcres](v4_specification.Project.md#totalfarmacres)
- [version](v4_specification.Project.md#version)

## Properties

### externalId

• `Optional` **externalId**: `string`

Project identifier from external system.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`Nullable`**

**`Example`**

```js
"externalId": "blue-hill-201"
```

#### Defined in

[v4-specification.ts:390](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L390)

___

### farmAddress

• `Optional` **farmAddress**: [`Address`](v4_specification.Address.md)

farmAddress Mailing address for the farm in question if the file represents a single operation.

**`Nullable`**

if import file represents a batch rather than an entire project for a single farm.

**`Example`**

```ts

```

#### Defined in

[v4-specification.ts:355](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L355)

___

### fields

• **fields**: [`Field`](v4_specification.Field.md)[]

An array of fields defining annual crop management practices.

**`Error Message`**

**`Min Items`**

1

**`Max Items`**

200

**`Example`**

```js
"fields": [
 // ...Field
]
```

#### Defined in

[v4-specification.ts:444](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L444)

___

### id

• `Optional` **id**: `string`

Nori's internal project identifier.

Used to synchronize repeated imports.

**`Nullable`**

External systems pass null or omit the property for new projects.

**`Example`**

```js
"id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
```

#### Defined in

[v4-specification.ts:403](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L403)

___

### primaryContact

• **primaryContact**: [`ContactInfo`](v4_specification.ContactInfo.md)

primaryContact Contact info for the operator or data aggregator preparing this file.

This will be the primary point of contract for verifiers.

**`Example`**

```ts

```

#### Defined in

[v4-specification.ts:348](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L348)

___

### projectName

• `Optional` **projectName**: `string`

The name for the project to be created.

**`Nullable`**

External systems leave this null.

**`Example`**

```ts

```

#### Defined in

[v4-specification.ts:423](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L423)

___

### supplierId

• `Optional` **supplierId**: `string`

Nori's internal supplier identifier.

Used to correlate projects / batches to a supplier.

**`Nullable`**

External systems leave this null.

**`Example`**

```js
"id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
```

#### Defined in

[v4-specification.ts:416](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L416)

___

### totalCroppedAcres

• `Optional` **totalCroppedAcres**: `number`

totalCroppedAcres

**`Nullable`**

if import file represents a batch rather than an entire project for a single farm.

**`Example`**

```js
"totalCroppedAcres": 2456
```

#### Defined in

[v4-specification.ts:377](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L377)

___

### totalFarmAcres

• `Optional` **totalFarmAcres**: `number`

totalFarmAcres

**`Nullable`**

if import file represents a batch rather than an entire project for a single farm.

**`Example`**

```js
"totalFarmAcres": 3490
```

#### Defined in

[v4-specification.ts:366](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L366)

___

### version

• **version**: `string`

The specification version. This information is used to determine the logic Nori uses to import a project

**`Error Message`**

**`Example`**

```js
"version": "4.2.1"
```

#### Defined in

[v4-specification.ts:340](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L340)
