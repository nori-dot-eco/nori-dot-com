[@nori-dot-com/project](../README.md) / validation

# Module: validation

## Table of contents

### Functions

- [validateProjectData](validation.md#validateprojectdata)

## Functions

### validateProjectData

▸ `Const`**validateProjectData**(`data`: [*Project*](../interfaces/specification.project.md)): *object*

Takes input data and checks whether its contents are valid or not. When the data is not valid, context is provided.

**`example`** <caption>Validating project data using data that has an invalid number of fields defined:</caption>

```js
validateProjectData({version:'1.0.0',fields:[]}); // returns {valid:false, ...errors}
```

#### Parameters:

Name | Type |
:------ | :------ |
`data` | [*Project*](../interfaces/specification.project.md) |

**Returns:** *object*

Name | Type |
:------ | :------ |
`errors`? | ErrorObject[] |
`formattedData` | [*Project*](../interfaces/specification.project.md) |
`message`? | *string* |
`valid` | *boolean* |

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/validation.ts:45](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/validation.ts#L45)
