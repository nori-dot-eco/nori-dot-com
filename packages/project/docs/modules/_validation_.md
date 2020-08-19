[@nori-dot-com/project](../README.md) › ["validation"](_validation_.md)

# Module: "validation"

## Index

### Functions

* [validateProjectData](_validation_.md#const-validateprojectdata)

## Functions

### `Const` validateProjectData

▸ **validateProjectData**(`data`: [Project](../interfaces/_specification_.project.md)): *object*

*Defined in [validation.ts:47](https://github.com/nori-dot-eco/nori-dot-com/blob/93df903/packages/project/src/validation.ts#L47)*

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

* **message**? : *string*

* **valid**: *boolean*
