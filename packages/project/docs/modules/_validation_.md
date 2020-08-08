[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["validation"](_validation_.md)

# Module: "validation"

## Index

### Variables

* [ajv](_validation_.md#const-ajv)
* [tmp](_validation_.md#const-tmp)
* [valid](_validation_.md#const-valid)

### Functions

* [toLowercase](_validation_.md#const-tolowercase)

## Variables

### `Const` ajv

• **ajv**: *Ajv* = new Ajv({ allErrors: true })

*Defined in [validation.ts:7](https://github.com/nori-dot-eco/nori-dot-com/blob/a109103/packages/project/src/validation.ts#L7)*

___

### `Const` tmp

• **tmp**: *""* = ""

*Defined in [validation.ts:32](https://github.com/nori-dot-eco/nori-dot-com/blob/a109103/packages/project/src/validation.ts#L32)*

___

### `Const` valid

• **valid**: *false | true | PromiseLike‹any›* = ajv.validate(
  schema,
  JSON.parse(JSON.stringify(data), toLowercase)
)

*Defined in [validation.ts:26](https://github.com/nori-dot-eco/nori-dot-com/blob/a109103/packages/project/src/validation.ts#L26)*

## Functions

### `Const` toLowercase

▸ **toLowercase**(`key`: any, `value`: any): *any*

*Defined in [validation.ts:8](https://github.com/nori-dot-eco/nori-dot-com/blob/a109103/packages/project/src/validation.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | any |
`value` | any |

**Returns:** *any*
