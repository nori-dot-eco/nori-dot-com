[@nori-dot-com/project](../README.md) / v4-specification

# Module: v4-specification

## About

Nori soil project import file format.

Version: 4.0

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

1. `nullable` - This means that data can be explicitly specified as null in an import file.

2. `?` (AKA optional) - Specifies that a data property can be entirely excluded

3. `default` - Specifies that when the data used for a property is specified as `null`, as an empty string, or excluded, it will be assigned the specified default value.

## Table of contents

### Interfaces

- [Address](../interfaces/v4_specification.Address.md)
- [AnnualCrop](../interfaces/v4_specification.AnnualCrop.md)
- [BurningEvent](../interfaces/v4_specification.BurningEvent.md)
- [ClearingAndRenewalEvent](../interfaces/v4_specification.ClearingAndRenewalEvent.md)
- [ContactInfo](../interfaces/v4_specification.ContactInfo.md)
- [CoverCrop](../interfaces/v4_specification.CoverCrop.md)
- [Crop](../interfaces/v4_specification.Crop.md)
- [CropEvent](../interfaces/v4_specification.CropEvent.md)
- [CropEvents](../interfaces/v4_specification.CropEvents.md)
- [CropYear](../interfaces/v4_specification.CropYear.md)
- [FertilizerEvent](../interfaces/v4_specification.FertilizerEvent.md)
- [Field](../interfaces/v4_specification.Field.md)
- [GrazingEvent](../interfaces/v4_specification.GrazingEvent.md)
- [HarvestEvent](../interfaces/v4_specification.HarvestEvent.md)
- [HistoricCRPLandManagement](../interfaces/v4_specification.HistoricCRPLandManagement.md)
- [HistoricLandManagement](../interfaces/v4_specification.HistoricLandManagement.md)
- [HistoricNonCRPLandManagement](../interfaces/v4_specification.HistoricNonCRPLandManagement.md)
- [IrrigationEvent](../interfaces/v4_specification.IrrigationEvent.md)
- [LimingEvent](../interfaces/v4_specification.LimingEvent.md)
- [OrchardOrVineyardCrop](../interfaces/v4_specification.OrchardOrVineyardCrop.md)
- [OrganicMatterEvent](../interfaces/v4_specification.OrganicMatterEvent.md)
- [PerennialCrop](../interfaces/v4_specification.PerennialCrop.md)
- [PlantingEvent](../interfaces/v4_specification.PlantingEvent.md)
- [PracticeChangesAdopted](../interfaces/v4_specification.PracticeChangesAdopted.md)
- [Project](../interfaces/v4_specification.Project.md)
- [PruningEvent](../interfaces/v4_specification.PruningEvent.md)
- [SlurryOrganicMatterEvent](../interfaces/v4_specification.SlurryOrganicMatterEvent.md)
- [SoilOrCropDisturbanceEvent](../interfaces/v4_specification.SoilOrCropDisturbanceEvent.md)
- [SolidOrganicMatterEvent](../interfaces/v4_specification.SolidOrganicMatterEvent.md)

### Variables

- [annualCropTypes](v4_specification.md#annualcroptypes)
- [coverCropTypes](v4_specification.md#covercroptypes)
- [fertilizerTypes](v4_specification.md#fertilizertypes)
- [limingTypes](v4_specification.md#limingtypes)
- [orchardOrVineyardCropTypes](v4_specification.md#orchardorvineyardcroptypes)
- [perennialCropTypes](v4_specification.md#perennialcroptypes)
- [slurryOmadTypes](v4_specification.md#slurryomadtypes)
- [soilOrCropDisturbanceTypes](v4_specification.md#soilorcropdisturbancetypes)
- [solidOmadTypes](v4_specification.md#solidomadtypes)

## Variables

### annualCropTypes

• `Const` **annualCropTypes**: readonly [``"barley"``, ``"broccoli-coast"``, ``"broccoli-desert"``, ``"carrots"``, ``"cauliflower"``, ``"corn"``, ``"corn silage"``, ``"cotton"``, ``"dry field beans"``, ``"dry field pea"``, ``"fallow"``, ``"grass-legume mix"``, ``"lettuce-head"``, ``"lettuce-leaf"``, ``"lettuce-romaine"``, ``"millet"``, ``"oats"``, ``"peanut"``, ``"potato"``, ``"rice - flooded"``, ``"rye"``, ``"sorghum"``, ``"sorghum"``, ``"sorghum silage"``, ``"soybean"``, ``"spring wheat"``, ``"strawberry"``, ``"sugar beets"``, ``"sunflower"``, ``"switchgrass"``, ``"tomatoes, fresh"``, ``"tomatoes, processing"``, ``"winter wheat"``]

#### Defined in

[v4-specification.ts:41](https://github.com/nori-dot-eco/nori-dot-com/blob/36162c5/packages/project/src/v4-specification.ts#L41)

___

### coverCropTypes

• `Const` **coverCropTypes**: readonly [``"annual rye"``, ``"annual rye - legume"``, ``"annual rye - legume - radish"``, ``"austrian winter pea"``, ``"cereal rye"``, ``"forage radish"``, ``"oilseed radish"``, ``"vetch"``, ``"winter grain-other"``]

#### Defined in

[v4-specification.ts:77](https://github.com/nori-dot-eco/nori-dot-com/blob/36162c5/packages/project/src/v4-specification.ts#L77)

___

### fertilizerTypes

• `Const` **fertilizerTypes**: readonly [``"ammonium nitrate (34-0-0)"``, ``"ammonium nitrate phosphate (23-23-00)"``, ``"ammonium nitrate phosphate (27-14-00)"``, ``"ammonium phosphate sulphate (16-20-00)"``, ``"ammonium polyphosphate solution (10-34-00)"``, ``"ammonium sulphate (21-00-00)"``, ``"ammonium thiosulphate solution (12-00-00)"``, ``"anhydrous ammonia (gas) (82-00-00)"``, ``"calcium ammonium nitrate"``, ``"calcium nitrate"``, ``"diammonium phosphate (18-46-00)"``, ``"element-n (n)"``, ``"element-p (p)"``, ``"mixed blends"``, ``"monoammonium phosphate (11-55-00)"``, ``"monoammonium phosphate (12-51-00)"``, ``"potassium nitrate"``, ``"urea (46-00-00)"``, ``"urea ammonium nitrate (30-00-00)"``, ``"urea ammonium phosphate (27-27-00)"``, ``"urea ammonium phosphate (34-17-00)"``]

#### Defined in

[v4-specification.ts:147](https://github.com/nori-dot-eco/nori-dot-com/blob/36162c5/packages/project/src/v4-specification.ts#L147)

___

### limingTypes

• `Const` **limingTypes**: readonly [``"crushed limestone"``, ``"calcitic limestone"``, ``"dolomitic limestone"``, ``"other"``]

#### Defined in

[v4-specification.ts:185](https://github.com/nori-dot-eco/nori-dot-com/blob/36162c5/packages/project/src/v4-specification.ts#L185)

___

### orchardOrVineyardCropTypes

• `Const` **orchardOrVineyardCropTypes**: readonly [``"almond"``, ``"avocados"``, ``"cherries"``, ``"english walnuts"``, ``"grape, raisin"``, ``"grape, table"``, ``"grape, wine (<1390 gdd)"``, ``"grape, wine (>1950 gdd)"``, ``"grape, wine (1391-1670 gdd)"``, ``"grape, wine (1671-1950 gdd)"``, ``"grapefruit"``, ``"lemons & limes"``, ``"olives"``, ``"oranges"``, ``"peaches and nectarines"``, ``"pistachios"``, ``"tangerines & mandarins"``]

#### Defined in

[v4-specification.ts:118](https://github.com/nori-dot-eco/nori-dot-com/blob/36162c5/packages/project/src/v4-specification.ts#L118)

___

### perennialCropTypes

• `Const` **perennialCropTypes**: readonly [``"alfalfa"``, ``"clover"``, ``"grass"``, ``"grass-legume mix"``, ``"strawberry"``, ``"switchgrass"``]

#### Defined in

[v4-specification.ts:138](https://github.com/nori-dot-eco/nori-dot-com/blob/36162c5/packages/project/src/v4-specification.ts#L138)

___

### slurryOmadTypes

• `Const` **slurryOmadTypes**: readonly [``"beef slurry"``, ``"chicken - broiler slurry"``, ``"chicken - layer slurry"``, ``"dairy slurry"``, ``"swine manure, slurry"``]

#### Defined in

[v4-specification.ts:89](https://github.com/nori-dot-eco/nori-dot-com/blob/36162c5/packages/project/src/v4-specification.ts#L89)

___

### soilOrCropDisturbanceTypes

• `Const` **soilOrCropDisturbanceTypes**: readonly [``"intensive tillage"``, ``"reduced tillage"``, ``"mulch tillage"``, ``"ridge tillage"``, ``"strip tillage"``, ``"no tillage"``, ``"growing season cultivation"``, ``"mow"``, ``"crimp"``, ``"winter killed"``, ``"broad-spectrum herbicide"``]

#### Defined in

[v4-specification.ts:171](https://github.com/nori-dot-eco/nori-dot-com/blob/36162c5/packages/project/src/v4-specification.ts#L171)

___

### solidOmadTypes

• `Const` **solidOmadTypes**: readonly [``"alfalfa meal"``, ``"beef manure, solid"``, ``"blood, dried"``, ``"bone meal"``, ``"chicken - broiler (litter), solid"``, ``"chicken - layer, solid"``, ``"compost or composted manure, solid"``, ``"dairy manure, solid"``, ``"farmyard manure, solid"``, ``"feather meal"``, ``"fish emulsion"``, ``"fish scrap"``, ``"guano"``, ``"horse manure, solid"``, ``"other manure, solid"``, ``"sheep manure, solid"``, ``"soybean meal"``, ``"swine manure, solid"``]

#### Defined in

[v4-specification.ts:97](https://github.com/nori-dot-eco/nori-dot-com/blob/36162c5/packages/project/src/v4-specification.ts#L97)
