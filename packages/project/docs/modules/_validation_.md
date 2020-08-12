[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["validation"](_validation_.md)

# Module: "validation"

## Index

### Variables

* [ajvErrors](_validation_.md#ajverrors)

### Functions

* [formatInputData](_validation_.md#const-formatinputdata)
* [validateProjectData](_validation_.md#const-validateprojectdata)

## Variables

###  ajvErrors

• **ajvErrors**: *AjvErrors*

*Defined in [validation.ts:7](https://github.com/nori-dot-eco/nori-dot-com/blob/f7a6776/packages/project/src/validation.ts#L7)*

## Functions

### `Const` formatInputData

▸ **formatInputData**(`data`: [Project](../interfaces/_specification_.project.md)): *[Project](../interfaces/_specification_.project.md)*

*Defined in [validation.ts:9](https://github.com/nori-dot-eco/nori-dot-com/blob/f7a6776/packages/project/src/validation.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Project](../interfaces/_specification_.project.md) |

**Returns:** *[Project](../interfaces/_specification_.project.md)*

___

### `Const` validateProjectData

▸ **validateProjectData**(`data`: [Project](../interfaces/_specification_.project.md)): *object*

*Defined in [validation.ts:31](https://github.com/nori-dot-eco/nori-dot-com/blob/f7a6776/packages/project/src/validation.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Project](../interfaces/_specification_.project.md) |

**Returns:** *object*

* **errors**? : *Ajv.ErrorObject[]*

* **message**? : *string*

* **valid**: *boolean*
