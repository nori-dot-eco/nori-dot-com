# V4 (May 2022)

 * Adds externalId and id optional fields at every level to make re-imports and synchronization between systems more stable.
 * Moves `plantingDate` to `PlantingEvent.date`
 * Adds `data` to `LimingEvent` and `BurningEvent` for consistency.  The precision of these dates is not critical.
 * Made `burningEvents` an array like the other event types.
 * Switched to ISO8610 Date format throughout (YYYY-MM-DD)
 * Add `pruningEvents` to `CropEvents`
 * Dropped `pruned` and `cleared / renewed` flags from `orchardOrVineyardCrop`.
 * Added a corresponding termination method for clear/renew.
 * Simplified `GrazingEvent` to take a single event date and the number of days grazed on the field on or after that date.
 * Simplified specific crop types to behave more similarly and inherit the same hierarchy.
 * Renamed `PlantedCrop` to `Crop`, made it inherit `CropEvents` and the specific crop types inherit `Crop`.
