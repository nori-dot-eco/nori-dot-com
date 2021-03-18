[@nori-dot-com/project](../README.md) / specification

# Module: specification

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

## Table of contents

### Interfaces

- [AnnualCrop](../interfaces/specification.annualcrop.md)
- [AnnualCropHarvestEvent](../interfaces/specification.annualcropharvestevent.md)
- [BurningEvent](../interfaces/specification.burningevent.md)
- [CoverCrop](../interfaces/specification.covercrop.md)
- [CropEvent](../interfaces/specification.cropevent.md)
- [CropEventRange](../interfaces/specification.cropeventrange.md)
- [CropEvents](../interfaces/specification.cropevents.md)
- [CropManagementEvent](../interfaces/specification.cropmanagementevent.md)
- [CropYear](../interfaces/specification.cropyear.md)
- [FertilizerEvent](../interfaces/specification.fertilizerevent.md)
- [Field](../interfaces/specification.field.md)
- [GrazingEvent](../interfaces/specification.grazingevent.md)
- [HarvestableCropEvents](../interfaces/specification.harvestablecropevents.md)
- [HistoricCRPLandManagement](../interfaces/specification.historiccrplandmanagement.md)
- [HistoricLandManagement](../interfaces/specification.historiclandmanagement.md)
- [HistoricNonCRPLandManagement](../interfaces/specification.historicnoncrplandmanagement.md)
- [IrrigationEvent](../interfaces/specification.irrigationevent.md)
- [LimingEvent](../interfaces/specification.limingevent.md)
- [OrchardOrVineyardCrop](../interfaces/specification.orchardorvineyardcrop.md)
- [OrganicMatterEvent](../interfaces/specification.organicmatterevent.md)
- [PerennialCrop](../interfaces/specification.perennialcrop.md)
- [PlantedCrop](../interfaces/specification.plantedcrop.md)
- [Project](../interfaces/specification.project.md)
- [SlurryOrganicMatterEvent](../interfaces/specification.slurryorganicmatterevent.md)
- [SoilOrCropDisturbanceEvent](../interfaces/specification.soilorcropdisturbanceevent.md)
- [SolidOrganicMatterEvent](../interfaces/specification.solidorganicmatterevent.md)

### Variables

- [annualCropTypes](specification.md#annualcroptypes)
- [coverCropTypes](specification.md#covercroptypes)
- [orchardOrVineyardCropTypes](specification.md#orchardorvineyardcroptypes)
- [perennialCropTypes](specification.md#perennialcroptypes)
- [slurryOmadTypes](specification.md#slurryomadtypes)
- [solidOmadTypes](specification.md#solidomadtypes)

## Variables

### annualCropTypes

• `Const` **annualCropTypes**: readonly [*barley*, *broccoli-coast*, *broccoli-desert*, *carrots*, *cauliflower*, *corn*, *corn silage*, *cotton*, *dry field beans*, *dry field pea*, *fallow*, *grass-legume mix*, *lettuce-head*, *lettuce-leaf*, *lettuce-romaine*, *millet*, *oats*, *peanut*, *potato*, *rice - flooded*, *rye*, *sorghum*, *sorghum*, *sorghum silage*, *soybean*, *spring wheat*, *strawberry*, *sugar beets*, *sunflower*, *switchgrass*, *tomatoes, fresh*, *tomatoes, processing*, *winter wheat*]

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:36](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L36)

___

### coverCropTypes

• `Const` **coverCropTypes**: readonly [*annual rye*, *annual rye - legume*, *annual rye - legume - radish*, *austrian winter pea*, *cereal rye*, *forage radish*, *oilseed radish*, *vetch*, *winter grain-other*]

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:74](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L74)

___

### orchardOrVineyardCropTypes

• `Const` **orchardOrVineyardCropTypes**: readonly [*almond*, *avocados*, *cherries*, *english walnuts*, *grape, raisin*, *grape, table*, *grape, wine (<1390 gdd)*, *grape, wine (>1950 gdd)*, *grape, wine (1391-1670 gdd)*, *grape, wine (1671-1950 gdd)*, *grapefruit*, *lemons & limes*, *olives*, *oranges*, *peaches and nectarines*, *pistachios*, *tangerines & mandarins*]

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:115](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L115)

___

### perennialCropTypes

• `Const` **perennialCropTypes**: readonly [*alfalfa*, *clover*, *grass*]

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:72](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L72)

___

### slurryOmadTypes

• `Const` **slurryOmadTypes**: readonly [*beef slurry*, *chicken - broiler slurry*, *chicken - layer slurry*, *dairy slurry*, *swine manure, slurry*]

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:86](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L86)

___

### solidOmadTypes

• `Const` **solidOmadTypes**: readonly [*alfalfa meal*, *beef manure, solid*, *blood, dried*, *bone meal*, *chicken - broiler (litter), solid*, *chicken - layer, solid*, *compost or composted manure, solid*, *dairy manure, solid*, *farmyard manure, solid*, *feather meal*, *fish emulsion*, *fish scrap*, *guano*, *horse manure, solid*, *other manure, solid*, *sheep manure, solid*, *soybean meal*, *swine manure, solid*]

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:94](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L94)
