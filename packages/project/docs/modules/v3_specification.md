[@nori-dot-com/project](../README.md) / v3-specification

# Module: v3-specification

## About

Provides the definitions for [Nori project](../interfaces/v3_specification.Project.md) data using typescript interfaces.

## Usage

### Nori [project](../interfaces/v3_specification.Project.md) import JSON files

The [project v3 specification](../interfaces/v3_specification.Project.md) interfaces can be used as a guide to create project imports.
For example, the highest level interface of the specification is the Project interface. Using the properties and types of the project interface, one can begin to define a JSON object that represents a set of supplier fields.

#### Example

You can find an example of a full implementation [here](../../src/example/v3-example.json)

## Navigation

Whilst it is likely easiest to navigate this document by starting at the highest level interface ["Project"](../interfaces/v3_specification.Project.md), you can also find definitions for all of the interfaces for a Nori project listed in the [index section](#index).

## Vocabulary

Throughout this documentation you will come across some vocab that indicate to what extent some data needs to be defined. There are effectively three different terms used here:

1. `nullable` - This means that data can be explicitly specified as null in an import file. However, the implication for nullable values is that unless it is marked as optional (i.e., with the `?` symbol after the property name's definition), AND it does not have an associated `default` value for the property, then the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

2. `?` (AKA optional) - Specifies that a data property can be entirely excluded

3. `default` - Specifies that when the data used for a property is specified as `null`, as an empty string, or excluded, it will be assigned the specified default value.

## Table of contents

### Interfaces

- [AnnualCrop](../interfaces/v3_specification.AnnualCrop.md)
- [AnnualCropHarvestEvent](../interfaces/v3_specification.AnnualCropHarvestEvent.md)
- [BurningEvent](../interfaces/v3_specification.BurningEvent.md)
- [CoverCrop](../interfaces/v3_specification.CoverCrop.md)
- [CropEvent](../interfaces/v3_specification.CropEvent.md)
- [CropEventRange](../interfaces/v3_specification.CropEventRange.md)
- [CropEvents](../interfaces/v3_specification.CropEvents.md)
- [CropManagementEvent](../interfaces/v3_specification.CropManagementEvent.md)
- [CropYear](../interfaces/v3_specification.CropYear.md)
- [FertilizerEvent](../interfaces/v3_specification.FertilizerEvent.md)
- [Field](../interfaces/v3_specification.Field.md)
- [GrazingEvent](../interfaces/v3_specification.GrazingEvent.md)
- [HarvestableCropEvents](../interfaces/v3_specification.HarvestableCropEvents.md)
- [HistoricCRPLandManagement](../interfaces/v3_specification.HistoricCRPLandManagement.md)
- [HistoricLandManagement](../interfaces/v3_specification.HistoricLandManagement.md)
- [HistoricNonCRPLandManagement](../interfaces/v3_specification.HistoricNonCRPLandManagement.md)
- [IrrigationEvent](../interfaces/v3_specification.IrrigationEvent.md)
- [LimingEvent](../interfaces/v3_specification.LimingEvent.md)
- [OrchardOrVineyardCrop](../interfaces/v3_specification.OrchardOrVineyardCrop.md)
- [OrganicMatterEvent](../interfaces/v3_specification.OrganicMatterEvent.md)
- [PerennialCrop](../interfaces/v3_specification.PerennialCrop.md)
- [PlantedCrop](../interfaces/v3_specification.PlantedCrop.md)
- [Project](../interfaces/v3_specification.Project.md)
- [SlurryOrganicMatterEvent](../interfaces/v3_specification.SlurryOrganicMatterEvent.md)
- [SoilOrCropDisturbanceEvent](../interfaces/v3_specification.SoilOrCropDisturbanceEvent.md)
- [SolidOrganicMatterEvent](../interfaces/v3_specification.SolidOrganicMatterEvent.md)

### Variables

- [annualCropTypes](v3_specification.md#annualcroptypes)
- [coverCropTypes](v3_specification.md#covercroptypes)
- [fertilizerTypes](v3_specification.md#fertilizertypes)
- [limingTypes](v3_specification.md#limingtypes)
- [orchardOrVineyardCropTypes](v3_specification.md#orchardorvineyardcroptypes)
- [perennialCropTypes](v3_specification.md#perennialcroptypes)
- [slurryOmadTypes](v3_specification.md#slurryomadtypes)
- [soilOrCropDisturbanceTypes](v3_specification.md#soilorcropdisturbancetypes)
- [solidOmadTypes](v3_specification.md#solidomadtypes)

## Variables

### annualCropTypes

• `Const` **annualCropTypes**: readonly [``"barley"``, ``"broccoli-coast"``, ``"broccoli-desert"``, ``"carrots"``, ``"cauliflower"``, ``"corn"``, ``"corn silage"``, ``"cotton"``, ``"dry field beans"``, ``"dry field pea"``, ``"fallow"``, ``"grass-legume mix"``, ``"lettuce-head"``, ``"lettuce-leaf"``, ``"lettuce-romaine"``, ``"millet"``, ``"oats"``, ``"peanut"``, ``"potato"``, ``"rice - flooded"``, ``"rye"``, ``"sorghum"``, ``"sorghum"``, ``"sorghum silage"``, ``"soybean"``, ``"spring wheat"``, ``"strawberry"``, ``"sugar beets"``, ``"sunflower"``, ``"switchgrass"``, ``"tomatoes, fresh"``, ``"tomatoes, processing"``, ``"winter wheat"``]

#### Defined in

[v3-specification.ts:36](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L36)

___

### coverCropTypes

• `Const` **coverCropTypes**: readonly [``"annual rye"``, ``"annual rye - legume"``, ``"annual rye - legume - radish"``, ``"austrian winter pea"``, ``"cereal rye"``, ``"forage radish"``, ``"oilseed radish"``, ``"vetch"``, ``"winter grain-other"``]

#### Defined in

[v3-specification.ts:72](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L72)

___

### fertilizerTypes

• `Const` **fertilizerTypes**: readonly [``"ammonium nitrate (34-0-0)"``, ``"ammonium nitrate phosphate (23-23-00)"``, ``"ammonium nitrate phosphate (27-14-00)"``, ``"ammonium phosphate sulphate (16-20-00)"``, ``"ammonium polyphosphate solution (10-34-00)"``, ``"ammonium sulphate (21-00-00)"``, ``"ammonium thiosulphate solution (12-00-00)"``, ``"anhydrous ammonia (gas) (82-00-00)"``, ``"calcium ammonium nitrate"``, ``"calcium nitrate"``, ``"diammonium phosphate (18-46-00)"``, ``"element-n (n)"``, ``"element-p (p)"``, ``"mixed blends"``, ``"monoammonium phosphate (11-55-00)"``, ``"monoammonium phosphate (12-51-00)"``, ``"potassium nitrate"``, ``"urea (46-00-00)"``, ``"urea ammonium nitrate (30-00-00)"``, ``"urea ammonium phosphate (27-27-00)"``, ``"urea ammonium phosphate (34-17-00)"``]

#### Defined in

[v3-specification.ts:142](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L142)

___

### limingTypes

• `Const` **limingTypes**: readonly [``"crushed limestone"``, ``"calcitic limestone"``, ``"dolomitic limestone"``, ``"other"``]

#### Defined in

[v3-specification.ts:180](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L180)

___

### orchardOrVineyardCropTypes

• `Const` **orchardOrVineyardCropTypes**: readonly [``"almond"``, ``"avocados"``, ``"cherries"``, ``"english walnuts"``, ``"grape, raisin"``, ``"grape, table"``, ``"grape, wine (<1390 gdd)"``, ``"grape, wine (>1950 gdd)"``, ``"grape, wine (1391-1670 gdd)"``, ``"grape, wine (1671-1950 gdd)"``, ``"grapefruit"``, ``"lemons & limes"``, ``"olives"``, ``"oranges"``, ``"peaches and nectarines"``, ``"pistachios"``, ``"tangerines & mandarins"``]

#### Defined in

[v3-specification.ts:113](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L113)

___

### perennialCropTypes

• `Const` **perennialCropTypes**: readonly [``"alfalfa"``, ``"clover"``, ``"grass"``, ``"grass-legume mix"``, ``"strawberry"``, ``"switchgrass"``]

#### Defined in

[v3-specification.ts:133](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L133)

___

### slurryOmadTypes

• `Const` **slurryOmadTypes**: readonly [``"beef slurry"``, ``"chicken - broiler slurry"``, ``"chicken - layer slurry"``, ``"dairy slurry"``, ``"swine manure, slurry"``]

#### Defined in

[v3-specification.ts:84](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L84)

___

### soilOrCropDisturbanceTypes

• `Const` **soilOrCropDisturbanceTypes**: readonly [``"intensive tillage"``, ``"reduced tillage"``, ``"mulch tillage"``, ``"ridge tillage"``, ``"strip tillage"``, ``"no tillage"``, ``"growing season cultivation"``, ``"mow"``, ``"crimp"``, ``"winter killed"``, ``"broad-spectrum herbicide"``]

#### Defined in

[v3-specification.ts:166](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L166)

___

### solidOmadTypes

• `Const` **solidOmadTypes**: readonly [``"alfalfa meal"``, ``"beef manure, solid"``, ``"blood, dried"``, ``"bone meal"``, ``"chicken - broiler (litter), solid"``, ``"chicken - layer, solid"``, ``"compost or composted manure, solid"``, ``"dairy manure, solid"``, ``"farmyard manure, solid"``, ``"feather meal"``, ``"fish emulsion"``, ``"fish scrap"``, ``"guano"``, ``"horse manure, solid"``, ``"other manure, solid"``, ``"sheep manure, solid"``, ``"soybean meal"``, ``"swine manure, solid"``]

#### Defined in

[v3-specification.ts:92](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L92)
