[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / Project

# Interface: Project

[v4-specification](../modules/v4_specification.md).Project

A project encapsulates a set of fields. This is the top-level interface of Nori's Croplands Data Import format.

A project maye represent either a complete farming operation for a single operator or a batch
of fields from a data aggregator.

**`id`** https://schema.nori.com/soil/4-0-4

**`example`** A project that uses specification v4.0.4 and contains a list of fields:
```js
{
 "version": "4.0.4",
 "fields": [
 ]
}
```

**`errormessage`**
{
"_": "projectDataError:projectUnknownError"
}

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

**`nullable`**

**`example`**

```js
"externalId": "blue-hill-201"
```

#### Defined in

[v4-specification.ts:386](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L386)

___

### farmAddress

• `Optional` **farmAddress**: [`Address`](v4_specification.Address.md)

farmAddress Mailing address for the farm in question if the file represents a single operation.

**`nullable`** if import file represents a batch rather than an entire project for a single farm.

#### Defined in

[v4-specification.ts:348](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L348)

___

### fields

• **fields**: [`Field`](v4_specification.Field.md)[]

An array of fields defining annual crop management practices.

**`errormessage`**
{
"minItems": "projectDataError:projectFieldsMinimumItemsError",
"maxItems": "projectDataError:projectFieldsMaximumItemsError",
"type": "projectDataError:projectFieldsTypeError",
"_": "projectDataError:projectFieldsUnknownError"
}

**`minitems`** 1

**`maxitems`** 200

**`example`**

```js
"fields": [
 // ...Field
]
```

#### Defined in

[v4-specification.ts:425](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L425)

___

### id

• `Optional` **id**: `string`

Nori's internal project identifier.

Used to synchronize repeated imports.

**`nullable`** External systems leave this blank for new projects.

**`example`**

```js
"id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
```

#### Defined in

[v4-specification.ts:401](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L401)

___

### primaryContact

• **primaryContact**: [`ContactInfo`](v4_specification.ContactInfo.md)

primaryContact Contact info for the operator or data aggregator preparing this file.

This will be the primary point of contract for verifiers.

#### Defined in

[v4-specification.ts:342](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L342)

___

### totalCroppedAcres

• `Optional` **totalCroppedAcres**: `number`

totalCroppedAcres

**`nullable`** if import file represents a batch rather than an entire project for a single farm.

**`example`**

```js
"totalCroppedAcres": 2456
```

#### Defined in

[v4-specification.ts:372](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L372)

___

### totalFarmAcres

• `Optional` **totalFarmAcres**: `number`

totalFarmAcres

**`nullable`** if import file represents a batch rather than an entire project for a single farm.

**`example`**

```js
"totalFarmAcres": 3490
```

#### Defined in

[v4-specification.ts:360](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L360)

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
"version": "4.0.4"
```

#### Defined in

[v4-specification.ts:335](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L335)
