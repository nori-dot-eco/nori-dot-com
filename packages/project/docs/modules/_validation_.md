[@nori-dot-com/project](../README.md) › ["validation"](_validation_.md)

# Module: "validation"

## Index

### Variables

* [ajvErrors](_validation_.md#ajverrors)

### Functions

* [validateProjectData](_validation_.md#const-validateprojectdata)

## Variables

###  ajvErrors

• **ajvErrors**: *AjvErrors*

*Defined in [validation.ts:2](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/validation.ts#L2)*

## Functions

### `Const` validateProjectData

▸ **validateProjectData**(`data`: [Project](../interfaces/_specification_.project.md)): *object*

*Defined in [validation.ts:45](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/validation.ts#L45)*

Takes input data and checks whether its contents are valid or not. When the data is not valid, context is provided.

**`example`** <caption>Validating project data using data that has an invalid number of fields defined:</caption>

```js
validateProjectData({version:'1.0.0',fields:[]}); // returns {valid:false, ...errors}
```

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Project](../interfaces/_specification_.project.md) |

**Returns:** *object*

* **errors**? : *Ajv.ErrorObject[]*

* **formattedData**: *[Project](../interfaces/_specification_.project.md)*

* **message**? : *string*

* **valid**: *boolean*
