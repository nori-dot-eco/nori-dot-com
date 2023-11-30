[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / Address

# Interface: Address

[v4-specification](../modules/v4_specification.md).Address

**`Example`**

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

**`Nullable`**

**`Example`**

```ts
US-ND
```

#### Defined in

[v4-specification.ts:527](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L527)

___

### admin2

• `Optional` **admin2**: `string`

County or second level subdivision

In the US use FIPS code: https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=nrcs143_013697

**`Nullable`**

**`Example`**

```ts
02130
```

#### Defined in

[v4-specification.ts:536](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L536)

___

### city

• `Optional` **city**: `string`

city

**`Nullable`**

**`Example`**

```ts
Fargo
```

#### Defined in

[v4-specification.ts:518](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L518)

___

### country

• `Optional` **country**: `string`

ISO3166 Country code

See: https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes

**`Nullable`**

**`Example`**

```ts
US
```

#### Defined in

[v4-specification.ts:545](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L545)

___

### line1

• `Optional` **line1**: `string`

First address line

**`Nullable`**

**`Example`**

```ts
123 Cherry Lane
```

**`Example`**

```ts
PO Box 56789
```

#### Defined in

[v4-specification.ts:503](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L503)

___

### line2

• `Optional` **line2**: `string`

Second address line

**`Nullable`**

**`Example`**

```ts
123 Cherry Lane
```

**`Example`**

```ts
Station 99
```

#### Defined in

[v4-specification.ts:511](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L511)
