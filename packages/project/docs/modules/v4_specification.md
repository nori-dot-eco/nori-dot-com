[@nori-dot-com/project](../README.md) / v4-specification

# Module: v4-specification

## About

Nori croplands project import file format.

Version: 4.0.5

Provides the definitions for Nori croplands project data import using typescript interfaces.

## Usage

This croplands project data import specification defines Nori's requirements for receipt of project import data.

Nori requires complete data as follows:
* Historical best practices from 2000 to three years prior to the switch year.
* Detailed management practices from three years prior to the switch year to the present.
* Ten years of projected future practices.

#### Example

You can find an example of a full implementation [here](../../src/example/v4-example.json)

## Navigation

[Project](../interfaces/v4_specification.Project.md) is the top level entrypoint of the file format.
You can find definitions for all of the interfaces in Nori croplands project from the [index](#index).

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

• `Const` **annualCropTypes**: readonly [``"alfalfa"``, ``"austrian winter pea"``, ``"barley"``, ``"barley-bin run wheat mix"``, ``"black beans"``, ``"broccoli"``, ``"broccoli-coast"``, ``"broccoli-desert"``, ``"buckwheat"``, ``"cabbage"``, ``"camelina"``, ``"canola"``, ``"cantaloupes"``, ``"carrots"``, ``"cauliflower"``, ``"celery"``, ``"chick peas"``, ``"clover"``, ``"corn"``, ``"corn silage"``, ``"cotton"``, ``"cucumbers"``, ``"dry beans"``, ``"dry field beans"``, ``"dry field pea"``, ``"durum wheat"``, ``"eggplants"``, ``"fallow"``, ``"flaxseed"``, ``"garbanzo beans"``, ``"garlic"``, ``"gourds"``, ``"greens"``, ``"hemp (for fiber)"``, ``"hemp (for flowers)"``, ``"hemp (for seed)"``, ``"herbs"``, ``"honeydew melons"``, ``"lentils"``, ``"lettuce"``, ``"lettuce-head"``, ``"lettuce-leaf"``, ``"lettuce-romaine"``, ``"millet"``, ``"misc vegs & fruits"``, ``"mustard"``, ``"navy beans"``, ``"oats"``, ``"onions"``, ``"other small grains"``, ``"peanuts"``, ``"peas"``, ``"peppers"``, ``"pinto beans"``, ``"pop or om corn"``, ``"potatoes"``, ``"pumpkins"``, ``"radishes"``, ``"rapeseed"``, ``"rice"``, ``"rice - flooded"``, ``"rye"``, ``"safflower"``, ``"sorghum"``, ``"sorghum silage"``, ``"soybeans"``, ``"speltz"``, ``"spring wheat"``, ``"squash"``, ``"strawberries"``, ``"sugarbeets"``, ``"sunflower"``, ``"sweet corn"``, ``"sweet potatoes"``, ``"switchgrass"``, ``"tobacco"``, ``"tomatoes"``, ``"tomatoes, fresh"``, ``"tomatoes, processing"``, ``"triticale"``, ``"turnips"``, ``"watermelons"``, ``"wheat"``, ``"winter barley"``, ``"winter grain-other"``, ``"winter oats"``, ``"winter wheat"``]

#### Defined in

[v4-specification.ts:33](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L33)

___

### coverCropTypes

• `Const` **coverCropTypes**: readonly [``"annual rye"``, ``"annual rye - legume"``, ``"annual rye - legume - radish"``, ``"barley-radish mix"``, ``"cereal rye"``, ``"cereal rye-crimson clover mix"``, ``"clover/wildflowers"``, ``"forage radish"``, ``"grass-legume mix"``, ``"oilseed radish"``, ``"radish-crimson clover-barley-dwarf rape mix"``, ``"vetch"``, ``"winter clover"``]

#### Defined in

[v4-specification.ts:123](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L123)

___

### fertilizerTypes

• `Const` **fertilizerTypes**: readonly [``"ammonium nitrate (34-0-0)"``, ``"ammonium nitrate phosphate (23-23-00)"``, ``"ammonium nitrate phosphate (27-14-00)"``, ``"ammonium phosphate sulphate (16-20-00)"``, ``"ammonium polyphosphate solution (10-34-00)"``, ``"ammonium sulphate (21-00-00)"``, ``"ammonium thiosulphate solution (12-00-00)"``, ``"anhydrous ammonia (gas) (82-00-00)"``, ``"calcium ammonium nitrate"``, ``"calcium nitrate"``, ``"diammonium phosphate (18-46-00)"``, ``"element-n (n)"``, ``"element-p (p)"``, ``"mixed blends"``, ``"monoammonium phosphate (11-55-00)"``, ``"monoammonium phosphate (12-51-00)"``, ``"phosphate (00-32-00)"``, ``"potash (00-00-60)"``, ``"potassium nitrate"``, ``"urea (46-00-00)"``, ``"urea ammonium nitrate (30-00-00)"``, ``"urea ammonium phosphate (27-27-00)"``, ``"urea ammonium phosphate (34-17-00)"``]

#### Defined in

[v4-specification.ts:226](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L226)

___

### limingTypes

• `Const` **limingTypes**: readonly [``"crushed limestone"``, ``"calcitic limestone"``, ``"dolomitic limestone"``, ``"other"``]

#### Defined in

[v4-specification.ts:289](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L289)

___

### orchardOrVineyardCropTypes

• `Const` **orchardOrVineyardCropTypes**: readonly [``"almonds"``, ``"apples"``, ``"apricots"``, ``"avocados"``, ``"blueberries"``, ``"caneberries"``, ``"cherries"``, ``"citrus"``, ``"cranberries"``, ``"english walnuts"``, ``"grape, raisin"``, ``"grape, table"``, ``"grape, wine (<1390 gdd)"``, ``"grape, wine (>1950 gdd)"``, ``"grape, wine (1391-1670 gdd)"``, ``"grape, wine (1671-1950 gdd)"``, ``"grapefruit"``, ``"grapes"``, ``"hazelnuts"``, ``"lemons"``, ``"lemons & limes"``, ``"limes"``, ``"nectarines"``, ``"olives"``, ``"oranges"``, ``"peaches"``, ``"peaches and nectarines"``, ``"pears"``, ``"pecans"``, ``"pistachios"``, ``"plums"``, ``"pomegranates"``, ``"prunes"``, ``"tangerines & mandarins"``, ``"walnuts"``]

#### Defined in

[v4-specification.ts:168](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L168)

___

### perennialCropTypes

• `Const` **perennialCropTypes**: readonly [``"alfalfa"``, ``"asparagus"``, ``"clover"``, ``"clover/wildflowers"``, ``"grass"``, ``"grass-legume mix"``, ``"grassland herbaceous"``, ``"herbaceous wetlands"``, ``"hops"``, ``"mint"``, ``"other hay/non alfalfa"``, ``"pasture/grass"``, ``"pasture/hay"``, ``"sod/grass seed"``, ``"strawberry"``, ``"sugarcane"``, ``"vetch"``]

#### Defined in

[v4-specification.ts:206](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L206)

___

### slurryOmadTypes

• `Const` **slurryOmadTypes**: readonly [``"beef slurry"``, ``"chicken - broiler slurry"``, ``"chicken - layer slurry"``, ``"dairy slurry"``, ``"swine manure, slurry"``]

#### Defined in

[v4-specification.ts:139](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L139)

___

### soilOrCropDisturbanceTypes

• `Const` **soilOrCropDisturbanceTypes**: readonly [``"bedder/hipper"``, ``"chisel plow"``, ``"crimp"``, ``"cultipacker"``, ``"cultivator"``, ``"cultivator - field"``, ``"cultivator - row"``, ``"disk"``, ``"finisher"``, ``"harrow"``, ``"herbicide burn down"``, ``"hipper bedder"``, ``"intensive tillage"``, ``"landstar"``, ``"minimum tillage"``, ``"moldboard plow"``, ``"mow"``, ``"mulch tillage"``, ``"mulcher"``, ``"no-till planting"``, ``"reduced tillage"``, ``"residue tillage"``, ``"ridge tillage"``, ``"ripper - disk"``, ``"ripper - inline"``, ``"roller"``, ``"speed till"``, ``"strip till"``, ``"strip tillage"``, ``"tandem disk"``, ``"vertical"``, ``"zone till"``, ``"winter kill"``, ``"broad-spectrum herbicide"``]

#### Defined in

[v4-specification.ts:252](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L252)

___

### solidOmadTypes

• `Const` **solidOmadTypes**: readonly [``"alfalfa meal"``, ``"beef manure, solid"``, ``"blood, dried"``, ``"bone meal"``, ``"chicken - broiler (litter), solid"``, ``"chicken - layer, solid"``, ``"compost or composted manure, solid"``, ``"dairy manure, solid"``, ``"farmyard manure, solid"``, ``"feather meal"``, ``"fish emulsion"``, ``"fish scrap"``, ``"guano"``, ``"horse manure, solid"``, ``"other manure, solid"``, ``"sheep manure, solid"``, ``"soybean meal"``, ``"swine manure, solid"``]

#### Defined in

[v4-specification.ts:147](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v4-specification.ts#L147)
