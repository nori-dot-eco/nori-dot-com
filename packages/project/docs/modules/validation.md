[@nori-dot-com/project](../README.md) / validation

# Module: validation

## Table of contents

### Functions

- [validateProjectData](validation.md#validateprojectdata)

## Functions

### validateProjectData

▸ **validateProjectData**(`data`): `Object`

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

[validation.ts:85](https://github.com/nori-dot-eco/nori-dot-com/blob/efae8bc/packages/project/src/validation.ts#L85)
