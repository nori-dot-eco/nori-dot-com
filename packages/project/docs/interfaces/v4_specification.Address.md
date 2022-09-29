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

[v4-specification.ts:513](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L513)

___

### admin2

• `Optional` **admin2**: `string`

County or second level subdivision

In the US use FIPS code: https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=nrcs143_013697

**`nullable`**

**`example`** 02130

#### Defined in

[v4-specification.ts:523](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L523)

___

### city

• `Optional` **city**: `string`

city

**`nullable`**

**`example`** Fargo

#### Defined in

[v4-specification.ts:503](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L503)

___

### country

• `Optional` **country**: `string`

ISO3166 Country code

See: https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes

**`nullable`**

**`example`** US

#### Defined in

[v4-specification.ts:533](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L533)

___

### line1

• `Optional` **line1**: `string`

First address line

**`nullable`**

**`example`** 123 Cherry Lane

**`example`** PO Box 56789

#### Defined in

[v4-specification.ts:485](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L485)

___

### line2

• `Optional` **line2**: `string`

Second address line

**`nullable`**

**`example`** 123 Cherry Lane

**`example`** Station 99

#### Defined in

[v4-specification.ts:495](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L495)
