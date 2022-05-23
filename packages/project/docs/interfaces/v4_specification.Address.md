[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / Address

# Interface: Address

[v4-specification](../modules/v4_specification.md).Address

**`example`**

```js
{
 "line1": "123 Cherry Lane",
 "line2": "#99",
 "city": "Bushing",
 "admin1": "MA",
 "country": "US"
}
```

## Table of contents

### Properties

- [admin1](v4_specification.Address.md#admin1)
- [admin2](v4_specification.Address.md#admin2)
- [city](v4_specification.Address.md#city)
- [country](v4_specification.Address.md#country)
- [line1](v4_specification.Address.md#line1)
- [line2](v4_specification.Address.md#line2)

## Properties

### admin1

• `Optional` **admin1**: `string`

State or Province ISO3166-2 Code

In the US see: https://en.wikipedia.org/wiki/ISO_3166-2:US

**`nullable`**

**`example`** US-ND

#### Defined in

[v4-specification.ts:400](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L400)

___

### admin2

• `Optional` **admin2**: `string`

County or second level subdivision

In the US use FIPS code: https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=nrcs143_013697

**`nullable`**

**`example`** 02130

#### Defined in

[v4-specification.ts:410](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L410)

___

### city

• `Optional` **city**: `string`

city

**`nullable`**

**`example`** Fargo

#### Defined in

[v4-specification.ts:390](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L390)

___

### country

• `Optional` **country**: `string`

ISO3166 Country code

See: https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes

**`nullable`**

**`example`** US

#### Defined in

[v4-specification.ts:420](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L420)

___

### line1

• `Optional` **line1**: `string`

First address line

**`nullable`**

**`example`** 123 Cherry Lane

**`example`** PO Box 56789

#### Defined in

[v4-specification.ts:372](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L372)

___

### line2

• `Optional` **line2**: `string`

Second address line

**`nullable`**

**`example`** 123 Cherry Lane

**`example`** Station 99

#### Defined in

[v4-specification.ts:382](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L382)
