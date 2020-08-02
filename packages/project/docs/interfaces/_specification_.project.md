[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [Project](_specification_.project.md)

# Interface: Project

### A supplier project entity which encapsulates a set of fields
This top-level interface defines all necessary properties for a supplier project created manually or via a data import

## Hierarchy

* **Project**

## Index

### Properties

* [fields](_specification_.project.md#fields)
* [version](_specification_.project.md#version)

## Properties

###  fields

• **fields**: *[Field](_specification_.field.md)[]*

*Defined in [specification.ts:65](https://github.com/nori-dot-eco/nori-dot-com/blob/49f839c/packages/project/src/specification.ts#L65)*

An array of fields defining annual crop practices

___

###  version

• **version**: *string*

*Defined in [specification.ts:61](https://github.com/nori-dot-eco/nori-dot-com/blob/49f839c/packages/project/src/specification.ts#L61)*

The specification version. This information is used to determine the logic Nori uses to import a project.
