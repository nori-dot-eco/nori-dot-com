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

[v4-specification.ts:508](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L508)

___

### admin2

• `Optional` **admin2**: `string`

County or second level subdivision

In the US use FIPS code: https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=nrcs143_013697

**`nullable`**

**`example`** 02130

#### Defined in

[v4-specification.ts:518](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L518)

___

### city

• `Optional` **city**: `string`

city

**`nullable`**

**`example`** Fargo

#### Defined in

[v4-specification.ts:498](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L498)

___

### country

• `Optional` **country**: `string`

ISO3166 Country code

See: https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes

**`nullable`**

**`example`** US

#### Defined in

[v4-specification.ts:528](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L528)

___

### line1

• `Optional` **line1**: `string`

First address line

**`nullable`**

**`example`** 123 Cherry Lane

**`example`** PO Box 56789

#### Defined in

[v4-specification.ts:480](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L480)

___

### line2

• `Optional` **line2**: `string`

Second address line

**`nullable`**

**`example`** 123 Cherry Lane

**`example`** Station 99

#### Defined in

[v4-specification.ts:490](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L490)
