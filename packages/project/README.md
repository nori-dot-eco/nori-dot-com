# `@nori-dot-com/project`

Schema and utilities for [nori](https://nori.com) supplier projects

## Installation

via yarn

```bash
yarn add @nori-dot-com/project
```

or via npm

```bash
npm i @nori-dot-com/project
```

## Docs

- [Nori Croplands Project Specification v4](./docs/modules/v4_specification.md) - Nori "v4" croplands project data import specification documentation

- [Nori Croplands Project specification v3](./docs/modules/v3_specification.md) - Nori "v3" project data specification documentation lives here

- [validation](./docs/modules/validation.md) - documentation on how to use the validation module to validate Nori project data (i.e. data that was exported from a data platform to conform with the latest project data specification)

- [convertFromV3ToV4](./docs/modules/utils_convertfromv3tov4.md) - Basic conversion logic to transform v3 files to v4.  Not thorougly tested yet.

- [convertFromV2ToV1](./docs/modules/utils_convertfromv2tov1.md) - documentation on how to use the script to convert "v2" project data files into "v1" project data files (neither version are what is specified in the specification files as that is referred to as "v3")

---

## Validation CLI

There is a very simple CLI entrypoint to the V4 project schema validation that's used as follows:

```bash
yarn validate < myV4Import.json
```

## Developers

### Summary

This module consists of three primary artifacts (a TypeScript specification, a JSON schema, and validation functions), all of which depend on one another.

#### The TypeScript specification

This is the most important file in the module. This file accomplishes a few things:

##### TypeScript interface declarations

These interfaces are exported for use in TS/JS applications

##### Inline documentation, examples, and validation parameter definitions

- This module makes use of [TypeDoc](https://typedoc.org/) to define documentation and examples.

- It then makes use of [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown) to auto-generate documentation (i.e., those found in the [docs](docs) folder)

Documentation for the spec such as why certain fields are optional, when they're optional. Such documentation is auto-generated from the specification's inline JSDoc style comments so as to prevent the documentation from becoming out of sync with the specification itself.

#### The JSON schema

This module makes use of [typescript-json-schema](https://github.com/YousefED/typescript-json-schema) to parse the typescript interfaces (and associated comments) into JSON schema format. This is eventually and primarily consumed by the validation functions

#### Validation functions

These functions contain a validation functions that makes use of [AJV](https://github.com/ajv-validator/ajv) to create extremely robust validation functions.

The validation functions allow partners and data managers to start creating import files prior to us having the full import flow finished and integrated in the app. This way, once the new specification is supported in the app, partners and data managers can be confident that importing their files won't result in an error.

The validation functions can be used to validate project data in a given file. If the data is valid, the validation functions will say such. If the data is invalid, the functions will not only say that the data is invalid, but it will give detailed information as to why the data is invalid.

### Development

#### Generate docs

```bash
yarn make:docs
```

#### Generate JSON schema

```bash
yarn make:schema
```

#### Run tests

From the root of the [nori-dot-com](../../README.md) monorepo

```bash
yarn run test
```
