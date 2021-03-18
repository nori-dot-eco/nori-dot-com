[@nori-dot-com/project](../README.md) › ["specification"](_specification_.md)

# Module: "specification"

## About

Provides the definitions for [Nori project](../interfaces/_specification_.project.md) data using typescript interfaces.

## Usage

### Nori [project](../interfaces/_specification_.project.md) import JSON files

The [project specification](../interfaces/_specification_.project.md) interfaces can be used as a guide to create project imports.
For example, the highest level interface of the specification is the Project interface. Using the properties and types of the project interface, one can begin to define a JSON object that represents a set of supplier fields.

#### Example

You can find an example of a full implementation [here](../../src/example/example.json)

## Navigation

Whilst it is likely easiest to navigate this document by starting at the highest level interface ["Project"](../interfaces/_specification_.project.md), you can also find definitions for all of the interfaces for a Nori project listed in the [index section](#index).

## Vocabulary

Throughout this documentation you will come across some vocab that indicate to what extent some data needs to be defined. There are effectively three different terms used here:

1. `nullable` - This means that data can be explicitly specified as null in an import file. However, the implication for nullable values is that unless it is marked as optional (i.e., with the `?` symbol after the property name's definition), AND it does not have an associated `default` value for the property, then the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

2. `?` (AKA optional) - Specifies that a data property can be entirely excluded

3. `default` - Specifies that when the data used for a property is specified as `null`, as an empty string, or excluded, it will be assigned the specified default value.

## Index

### Interfaces

* [AnnualCrop](../interfaces/_specification_.annualcrop.md)
* [AnnualCropHarvestEvent](../interfaces/_specification_.annualcropharvestevent.md)
* [BurningEvent](../interfaces/_specification_.burningevent.md)
* [CoverCrop](../interfaces/_specification_.covercrop.md)
* [CropEvent](../interfaces/_specification_.cropevent.md)
* [CropEventRange](../interfaces/_specification_.cropeventrange.md)
* [CropEvents](../interfaces/_specification_.cropevents.md)
* [CropManagementEvent](../interfaces/_specification_.cropmanagementevent.md)
* [CropYear](../interfaces/_specification_.cropyear.md)
* [FertilizerEvent](../interfaces/_specification_.fertilizerevent.md)
* [Field](../interfaces/_specification_.field.md)
* [GrazingEvent](../interfaces/_specification_.grazingevent.md)
* [HarvestableCropEvents](../interfaces/_specification_.harvestablecropevents.md)
* [HistoricCRPLandManagement](../interfaces/_specification_.historiccrplandmanagement.md)
* [HistoricLandManagement](../interfaces/_specification_.historiclandmanagement.md)
* [HistoricNonCRPLandManagement](../interfaces/_specification_.historicnoncrplandmanagement.md)
* [IrrigationEvent](../interfaces/_specification_.irrigationevent.md)
* [LimingEvent](../interfaces/_specification_.limingevent.md)
* [OrchardOrVineyardCrop](../interfaces/_specification_.orchardorvineyardcrop.md)
* [OrganicMatterEvent](../interfaces/_specification_.organicmatterevent.md)
* [PerennialCrop](../interfaces/_specification_.perennialcrop.md)
* [PlantedCrop](../interfaces/_specification_.plantedcrop.md)
* [Project](../interfaces/_specification_.project.md)
* [SlurryOrganicMatterEvent](../interfaces/_specification_.slurryorganicmatterevent.md)
* [SoilOrCropDisturbanceEvent](../interfaces/_specification_.soilorcropdisturbanceevent.md)
* [SolidOrganicMatterEvent](../interfaces/_specification_.solidorganicmatterevent.md)

### Variables

* [annualCropTypes](_specification_.md#const-annualcroptypes)
* [coverCropTypes](_specification_.md#const-covercroptypes)
* [orchardOrVineyardCropTypes](_specification_.md#const-orchardorvineyardcroptypes)
* [perennialCropTypes](_specification_.md#const-perennialcroptypes)
* [slurryOmadTypes](_specification_.md#const-slurryomadtypes)
* [solidOmadTypes](_specification_.md#const-solidomadtypes)

## Variables

### `Const` annualCropTypes

• **annualCropTypes**: *["barley", "broccoli-coast", "broccoli-desert", "carrots", "cauliflower", "corn", "corn silage", "cotton", "dry field beans", "dry field pea", "fallow", "grass-legume mix", "lettuce-head", "lettuce-leaf", "lettuce-romaine", "millet", "oats", "peanut", "potato", "rice - flooded", "rye", "sorghum", "sorghum", "sorghum silage", "soybean", "spring wheat", "strawberry", "sugar beets", "sunflower", "switchgrass", "tomatoes, fresh", "tomatoes, processing", "winter wheat"]* = [
  'barley',
  'broccoli-coast',
  'broccoli-desert',
  'carrots',
  'cauliflower',
  'corn',
  'corn silage',
  'cotton',
  'dry field beans',
  'dry field pea',
  'fallow',
  'grass-legume mix',
  'lettuce-head',
  'lettuce-leaf',
  'lettuce-romaine',
  'millet',
  'oats',
  'peanut',
  'potato',
  'rice - flooded',
  'rye',
  'sorghum',
  'sorghum',
  'sorghum silage',
  'soybean',
  'spring wheat',
  'strawberry',
  'sugar beets',
  'sunflower',
  'switchgrass',
  'tomatoes, fresh',
  'tomatoes, processing',
  'winter wheat',
] as const

*Defined in [specification.ts:36](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L36)*

___

### `Const` coverCropTypes

• **coverCropTypes**: *["annual rye", "annual rye - legume", "annual rye - legume - radish", "austrian winter pea", "cereal rye", "forage radish", "oilseed radish", "vetch", "winter grain-other"]* = [
  'annual rye',
  'annual rye - legume',
  'annual rye - legume - radish',
  'austrian winter pea',
  'cereal rye',
  'forage radish',
  'oilseed radish',
  'vetch',
  'winter grain-other',
] as const

*Defined in [specification.ts:74](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L74)*

___

### `Const` orchardOrVineyardCropTypes

• **orchardOrVineyardCropTypes**: *["almond", "avocados", "cherries", "english walnuts", "grape, raisin", "grape, table", "grape, wine (<1390 gdd)", "grape, wine (>1950 gdd)", "grape, wine (1391-1670 gdd)", "grape, wine (1671-1950 gdd)", "grapefruit", "lemons & limes", "olives", "oranges", "peaches and nectarines", "pistachios", "tangerines & mandarins"]* = [
  'almond',
  'avocados',
  'cherries',
  'english walnuts',
  'grape, raisin',
  'grape, table',
  'grape, wine (<1390 gdd)',
  'grape, wine (>1950 gdd)',
  'grape, wine (1391-1670 gdd)',
  'grape, wine (1671-1950 gdd)',
  'grapefruit',
  'lemons & limes',
  'olives',
  'oranges',
  'peaches and nectarines',
  'pistachios',
  'tangerines & mandarins',
] as const

*Defined in [specification.ts:115](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L115)*

___

### `Const` perennialCropTypes

• **perennialCropTypes**: *["alfalfa", "clover", "grass"]* = ['alfalfa', 'clover', 'grass'] as const

*Defined in [specification.ts:72](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L72)*

___

### `Const` slurryOmadTypes

• **slurryOmadTypes**: *["beef slurry", "chicken - broiler slurry", "chicken - layer slurry", "dairy slurry", "swine manure, slurry"]* = [
  'beef slurry',
  'chicken - broiler slurry',
  'chicken - layer slurry',
  'dairy slurry',
  'swine manure, slurry',
] as const

*Defined in [specification.ts:86](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L86)*

___

### `Const` solidOmadTypes

• **solidOmadTypes**: *["alfalfa meal", "beef manure, solid", "blood, dried", "bone meal", "chicken - broiler (litter), solid", "chicken - layer, solid", "compost or composted manure, solid", "dairy manure, solid", "farmyard manure, solid", "feather meal", "fish emulsion", "fish scrap", "guano", "horse manure, solid", "other manure, solid", "sheep manure, solid", "soybean meal", "swine manure, solid"]* = [
  'alfalfa meal',
  'beef manure, solid',
  'blood, dried',
  'bone meal',
  'chicken - broiler (litter), solid',
  'chicken - layer, solid',
  'compost or composted manure, solid',
  'dairy manure, solid',
  'farmyard manure, solid',
  'feather meal',
  'fish emulsion',
  'fish scrap',
  'guano',
  'horse manure, solid',
  'other manure, solid',
  'sheep manure, solid',
  'soybean meal',
  'swine manure, solid',
] as const

*Defined in [specification.ts:94](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L94)*
