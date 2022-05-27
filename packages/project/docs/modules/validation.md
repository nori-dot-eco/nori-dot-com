[@nori-dot-com/project](../README.md) / validation

# Module: validation

## Table of contents

### Functions

- [validateProjectData](validation.md#validateprojectdata)

## Functions

### validateProjectData

▸ **validateProjectData**(`data`): `Object`

Takes input data and checks whether its contents are valid or not. When the data is not valid, context is provided.

**`example`** Validating project data using data that has an invalid number of fields defined:

```js
validateProjectData({version:'4.0.0',fields:[]}); // returns {valid:false, ...errors}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Project`](../interfaces/v3_specification.Project.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors?` | { `dataPath`: `string` ; `error`: `ErrorObject`<`string`, `Record`<`string`, `any`\>, `unknown`\> ; `type`: `string`  }[] |
| `formattedData` | [`Project`](../interfaces/v3_specification.Project.md) |
| `message?` | `string` |
| `valid` | `boolean` |

#### Defined in

[validation.ts:85](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/validation.ts#L85)
