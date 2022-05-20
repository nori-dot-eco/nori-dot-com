[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / Project

# Interface: Project

[v4-specification](../modules/v4_specification.md).Project

A supplier project entity which encapsulates a set of fields. This top-level interface defines all necessary properties for a supplier project created manually or via a data import file.

**`id`** https://schema.nori.com/soil/4-0-0

**`example`** A project that uses specification v4.0.0 and contains a list of fields:
```js
{
 "version": "4.0.0",
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

[v4-specification.ts:273](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L273)

___

### farmAddress

• `Optional` **farmAddress**: [`Address`](v4_specification.Address.md)

farmAddress

**`nullable`**

#### Defined in

[v4-specification.ts:235](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L235)

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

**`maxitems`** 25

**`example`**

```js
"fields": [
 // ...Field
]
```

#### Defined in

[v4-specification.ts:312](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L312)

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

[v4-specification.ts:288](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L288)

___

### primaryContact

• `Optional` **primaryContact**: [`ContactInfo`](v4_specification.ContactInfo.md)

primaryContact Contact info for verifiers and other entities involved in the project

**`ullable`**

#### Defined in

[v4-specification.ts:229](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L229)

___

### totalCroppedAcres

• `Optional` **totalCroppedAcres**: `number`

totalCroppedAcres

**`nullable`**

**`example`**

```js
"totalCroppedAcres": 2456
```

#### Defined in

[v4-specification.ts:259](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L259)

___

### totalFarmAcres

• `Optional` **totalFarmAcres**: `number`

totalFarmAcres

**`nullable`**

**`example`**

```js
"totalFarmAcres": 3490
```

#### Defined in

[v4-specification.ts:247](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L247)

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
"version": "4.0.0"
```

#### Defined in

[v4-specification.ts:223](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L223)