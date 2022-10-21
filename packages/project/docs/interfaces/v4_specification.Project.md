[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / Project

# Interface: Project

[v4-specification](../modules/v4_specification.md).Project

A project encapsulates a set of fields. This is the top-level interface of Nori's Croplands Data Import format.

A project maye represent either a complete farming operation for a single operator or a batch
of fields from a data aggregator.

**`Id`**

https://schema.nori.com/soil/4-0-5

**`Example`**

<caption>A project that uses specification v4.0.5 and contains a list of fields:</caption>
```js
{
 "version": "4.0.5",
 "fields": [
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

[v4-specification.ts:387](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L387)

___

### farmAddress

• `Optional` **farmAddress**: [`Address`](v4_specification.Address.md)

farmAddress Mailing address for the farm in question if the file represents a single operation.

**`Nullable`**

if import file represents a batch rather than an entire project for a single farm.

#### Defined in

[v4-specification.ts:349](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L349)

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

[v4-specification.ts:426](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L426)

___

### id

• `Optional` **id**: `string`

Nori's internal project identifier.

Used to synchronize repeated imports.

**`Nullable`**

External systems leave this blank for new projects.

**`Example`**

```js
"id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
```

#### Defined in

[v4-specification.ts:402](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L402)

___

### primaryContact

• **primaryContact**: [`ContactInfo`](v4_specification.ContactInfo.md)

primaryContact Contact info for the operator or data aggregator preparing this file.

This will be the primary point of contract for verifiers.

#### Defined in

[v4-specification.ts:343](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L343)

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

[v4-specification.ts:373](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L373)

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

[v4-specification.ts:361](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L361)

___

### version

• **version**: `string`

The specification version. This information is used to determine the logic Nori uses to import a project

**`Error Message`**

**`Example`**

```js
"version": "4.0.5"
```

#### Defined in

[v4-specification.ts:336](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L336)
