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

• **ajv**: *Ajv* = new Ajv({ useDefaults: 'empty', verbose: true, allErrors: true })

*Defined in [validation.ts:6](https://github.com/nori-dot-eco/nori-dot-com/blob/526533c/packages/project/src/validation.ts#L6)*

___

### `Const` tmp

• **tmp**: *""* = ""

*Defined in [validation.ts:31](https://github.com/nori-dot-eco/nori-dot-com/blob/526533c/packages/project/src/validation.ts#L31)*

___

### `Const` valid

• **valid**: *false | true | PromiseLike‹any›* = ajv.validate(
  schema,
  JSON.parse(JSON.stringify(data), toLowercase)
)

*Defined in [validation.ts:25](https://github.com/nori-dot-eco/nori-dot-com/blob/526533c/packages/project/src/validation.ts#L25)*

## Functions

### `Const` toLowercase

▸ **toLowercase**(`key`: any, `value`: any): *any*

*Defined in [validation.ts:7](https://github.com/nori-dot-eco/nori-dot-com/blob/526533c/packages/project/src/validation.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | any |
`value` | any |

**Returns:** *any*
