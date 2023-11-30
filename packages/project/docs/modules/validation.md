[@nori-dot-com/project](../README.md) / validation

# Module: validation

## Table of contents

### Functions

- [validateProjectData](validation.md#validateprojectdata)

## Functions

### validateProjectData

▸ **validateProjectData**(`data`): `Object`

Takes input data and checks whether its contents are valid or not. When the data is not valid, context is provided.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Project`](../interfaces/v4_specification.Project.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors?` | \{ `error`: `ErrorObject`\<`string`, `Record`\<`string`, `any`\>, `unknown`\> ; `instancePath`: `string` ; `type`: `string`  }[] |
| `formattedData` | [`Project`](../interfaces/v4_specification.Project.md) |
| `message?` | `string` |
| `valid` | `boolean` |

**`Example`**

<caption>Validating project data using data that has an invalid number of fields defined:</caption>

```js
validateProjectData(data); // returns {valid:false, ...errors}
```

#### Defined in

[validation.ts:80](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/validation.ts#L80)
