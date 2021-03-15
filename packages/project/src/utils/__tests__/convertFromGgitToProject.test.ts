import type { Input } from '@nori-dot-com/ggit';

import {
  TRANSLATIONS,
  isSlurryOrganicMatterEvent,
  isSolidOrganicMatterEvent,
  isAnnualCrop,
  isOrchardOrVineyardCrop,
  isPerennialCrop,
  isCoverCrop,
  extractGeometryData,
  extractFieldName,
  buildHistoricCrpLandManagement,
  buildHistoricNonCrpLandManagement,
  buildHistoricLandManagement,
  separateCurrentAndFutureScenarios,
  extractRegenerativeSwitchYear,
  translateFertilizerEvent,
  translateFertilizerEvents,
  translateOrganicMatterEvent,
  translateOrganicMatterEvents,
  translateIrrigationEvent,
  translateIrrigationEvents,
  translateLimingEvents,
  translateBurningEvent,
  translateGrazingEvent,
  translateGrazingEvents,
  translateCropHarvestEvent,
  translateCropHarvestEvents,
  translateSoilOrCropDisturbanceEvent,
  translateSoilOrCropDisturbanceEvents,
  translateCoverCrop,
  translateOrchardOrVineyardCrop,
  translateAnnualCrop,
  translatePerennialCrop,
  translateCropEvent,
  extractCrops,
  extractCropYears,
  extractCroplandsAndScenarios,
  shiftCropsTaggedAsContinueFromPreviousYear,
  convertFromGgitToProject,
} from '../../index';

import { ggitInputData, v3Data } from './fixtures';

describe('convertFromGgitToProject', () => {
  it('should convert v2 to v1 project data', () => {
    expect(convertFromGgitToProject({ ggitInputData })).toStrictEqual<
      ReturnType<typeof convertFromGgitToProject>
    >(v3Data);
  });
});

describe('TRANSLATIONS', () => {
  it('should translate the GGIT event to an equivalent project event', () => {
    const translation =
      TRANSLATIONS.historicNonCrpLandManagement.preYear1980[
        'upland non-irrigated (pre 1980s)'
      ];
    expect(translation).toStrictEqual<typeof translation>(
      'upland non-irrigated'
    );
  });
});

describe('isSlurryOrganicMatterEvent', () => {
  it('will return false when the event is not a slurry OMAD event', () => {
    expect(
      isSlurryOrganicMatterEvent({
        OMADType: ('not a slurry OMAD type' as unknown) as Input.OMADType,
        OMADApplicationDate: null,
        OMADCNRatio: null,
        OMADPercentN: null,
        OMADAmount: null,
      })
    ).toStrictEqual<ReturnType<typeof isSlurryOrganicMatterEvent>>(false);
  });
  it('will return true when the event is a slurry OMAD event', () => {
    expect(
      isSlurryOrganicMatterEvent({
        OMADType: 'alfalfa meal',
        OMADApplicationDate: null,
        OMADCNRatio: null,
        OMADPercentN: null,
        OMADAmount: null,
      })
    ).toStrictEqual<ReturnType<typeof isSlurryOrganicMatterEvent>>(true);
  });
});

describe('isSolidOrganicMatterEvent', () => {
  it('will return false when the event is not a solid OMAD event', () => {
    expect(
      isSolidOrganicMatterEvent({
        OMADType: ('not a solid OMAD type' as unknown) as Input.OMADType,
        OMADApplicationDate: null,
        OMADCNRatio: null,
        OMADPercentN: null,
        OMADAmount: null,
      })
    ).toStrictEqual<ReturnType<typeof isSolidOrganicMatterEvent>>(false);
  });
  it('will return true when the event is a solid OMAD event', () => {
    expect(
      isSolidOrganicMatterEvent({
        OMADType: 'alfalfa meal',
        OMADApplicationDate: null,
        OMADCNRatio: null,
        OMADPercentN: null,
        OMADAmount: null,
      })
    ).toStrictEqual<ReturnType<typeof isSolidOrganicMatterEvent>>(true);
  });
});

describe('isAnnualCrop', () => {
  it('will return false crop is not an annual crop', () => {
    expect(
      isAnnualCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: ('not an annual crop' as unknown) as Input.CropName,
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isAnnualCrop>>(false);
  });
  it('will return true crop is an annual crop', () => {
    expect(
      isAnnualCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: 'corn',
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isAnnualCrop>>(true);
  });
});

describe('isOrchardOrVineyardCrop', () => {
  it('will return false crop is not a orchard/vineyard crop', () => {
    expect(
      isOrchardOrVineyardCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: ('not an orchard or vineyard crop' as unknown) as Input.CropName,
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isOrchardOrVineyardCrop>>(false);
  });
  it('will return true crop is an orchard/vineyard crop', () => {
    expect(
      isOrchardOrVineyardCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: 'oranges',
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isOrchardOrVineyardCrop>>(true);
  });
});

describe('isPerennialCrop', () => {
  it('will return false crop is not a a perennial crop', () => {
    expect(
      isPerennialCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: ('not a perennial crop' as unknown) as Input.CropName,
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isPerennialCrop>>(false);
  });
  it('will return true crop is a perennial crop', () => {
    expect(
      isPerennialCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: 'alfalfa',
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isPerennialCrop>>(true);
  });
});

describe('isCoverCrop', () => {
  it('will return false crop is not a a cover crop', () => {
    expect(
      isCoverCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: ('not a cover crop' as unknown) as Input.CropName,
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isCoverCrop>>(false);
  });
  it('will return true crop is a cover crop', () => {
    expect(
      isCoverCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: 'annual rye',
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isCoverCrop>>(true);
  });
});

describe('extractGeometryData', () => {
  it('will extract the geometry from a single polygon input', () => {
    expect(
      extractGeometryData({
        croplands: [
          {
            '@Name': null,
            GEOM: {
              '@SRID': '4326',
              '@AREA': 0,
              '#text':
                'POLYGON((-102.025696361448 41.1624569193335, -102.024237239744 41.1631353976904, -102.022520625974 41.1635554045818, -102.020460689451 41.1632646308668, -102.019044483091 41.1625861538478, -102.01822909155 41.1617784339522, -102.017542446043 41.1607122284469, -102.017585361387 41.1594844551661, -102.01771410742 41.1587413180595, -102.01822909155 41.1579658616607, -102.019301975156 41.1571257735422, -102.020589435484 41.1566734139417, -102.021962726499 41.1563826096929, -102.023336017515 41.1564795445859, -102.024880969907 41.1570611509333, -102.025996768858 41.15790123988, -102.026554668333 41.1586120759635, -102.026812160398 41.1597752456533, -102.026683414365 41.161035322856, -102.026168430235 41.1618430519102, -102.025696361448 41.1624569193335))',
            },
            'Pre-1980': null,
            CRP: null,
            CRPType: null,
            'Year1980-2000': null,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Year1980-2000_Tillage': null,
            CRPStartYear: null,
            CRPEndYear: null,
            PreCRPManagement: null,
            PreCRPTillage: null,
            PostCRPManagement: null,
            PostCRPTillage: null,
            CropScenario: null,
          },
        ],
      })
    ).toStrictEqual<ReturnType<typeof extractGeometryData>>({
      acres: 0,
      geojson: {
        features: [
          {
            geometry: {
              coordinates: [
                [
                  [-102.025696361448, 41.1624569193335],
                  [-102.024237239744, 41.1631353976904],
                  [-102.022520625974, 41.1635554045818],
                  [-102.020460689451, 41.1632646308668],
                  [-102.019044483091, 41.1625861538478],
                  [-102.01822909155, 41.1617784339522],
                  [-102.017542446043, 41.1607122284469],
                  [-102.017585361387, 41.1594844551661],
                  [-102.01771410742, 41.1587413180595],
                  [-102.01822909155, 41.1579658616607],
                  [-102.019301975156, 41.1571257735422],
                  [-102.020589435484, 41.1566734139417],
                  [-102.021962726499, 41.1563826096929],
                  [-102.023336017515, 41.1564795445859],
                  [-102.024880969907, 41.1570611509333],
                  [-102.025996768858, 41.15790123988],
                  [-102.026554668333, 41.1586120759635],
                  [-102.026812160398, 41.1597752456533],
                  [-102.026683414365, 41.161035322856],
                  [-102.026168430235, 41.1618430519102],
                  [-102.025696361448, 41.1624569193335],
                ],
              ],
              type: 'Polygon',
            },
            properties: {},
            type: 'Feature',
          },
        ],
        type: 'FeatureCollection',
      },
    });
  });

  it('will extract the geometry from a multi polygon input', () => {
    expect(
      extractGeometryData({
        croplands: [
          {
            '@Name': null,
            GEOM: {
              '@SRID': '4326',
              '@AREA': 0,
              '#text':
                'POLYGON((-102.025696361448 41.1624569193335, -102.024237239744 41.1631353976904, -102.022520625974 41.1635554045818, -102.020460689451 41.1632646308668, -102.019044483091 41.1625861538478, -102.01822909155 41.1617784339522, -102.017542446043 41.1607122284469, -102.017585361387 41.1594844551661, -102.01771410742 41.1587413180595, -102.01822909155 41.1579658616607, -102.019301975156 41.1571257735422, -102.020589435484 41.1566734139417, -102.021962726499 41.1563826096929, -102.023336017515 41.1564795445859, -102.024880969907 41.1570611509333, -102.025996768858 41.15790123988, -102.026554668333 41.1586120759635, -102.026812160398 41.1597752456533, -102.026683414365 41.161035322856, -102.026168430235 41.1618430519102, -102.025696361448 41.1624569193335))',
            },
            'Pre-1980': null,
            CRP: null,
            CRPType: null,
            'Year1980-2000': null,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Year1980-2000_Tillage': null,
            CRPStartYear: null,
            CRPEndYear: null,
            PreCRPManagement: null,
            PreCRPTillage: null,
            PostCRPManagement: null,
            PostCRPTillage: null,
            CropScenario: null,
          },
          {
            '@Name': null,
            GEOM: {
              '@SRID': '4326',
              '@AREA': 0,
              '#text':
                'POLYGON((-90.025696361448 41.1624569193335, -90.024237239744 41.1631353976904, -90.022520625974 41.1635554045818, -90.020460689451 41.1632646308668, -90.019044483091 41.1625861538478, -90.01822909155 41.1617784339522, -90.017542446043 41.1607122284469, -90.017585361387 41.1594844551661, -90.01771410742 41.1587413180595, -90.01822909155 41.1579658616607, -90.019301975156 41.1571257735422, -90.020589435484 41.1566734139417, -90.021962726499 41.1563826096929, -90.023336017515 41.1564795445859, -90.024880969907 41.1570611509333, -90.025996768858 41.15790123988, -90.026554668333 41.1586120759635, -90.026812160398 41.1597752456533, -90.026683414365 41.161035322856, -90.026168430235 41.161843051990, -90.025696361448 41.1624569193335))',
            },
            'Pre-1980': null,
            CRP: null,
            CRPType: null,
            'Year1980-2000': null,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Year1980-2000_Tillage': null,
            CRPStartYear: null,
            CRPEndYear: null,
            PreCRPManagement: null,
            PreCRPTillage: null,
            PostCRPManagement: null,
            PostCRPTillage: null,
            CropScenario: null,
          },
        ],
      })
    ).toStrictEqual<ReturnType<typeof extractGeometryData>>({
      acres: 0,
      geojson: {
        features: [
          {
            geometry: {
              coordinates: [
                [
                  [-90.025696361448, 41.1624569193335],
                  [-90.024237239744, 41.1631353976904],
                  [-90.022520625974, 41.1635554045818],
                  [-90.020460689451, 41.1632646308668],
                  [-90.019044483091, 41.1625861538478],
                  [-90.01822909155, 41.1617784339522],
                  [-90.017542446043, 41.1607122284469],
                  [-90.017585361387, 41.1594844551661],
                  [-90.01771410742, 41.1587413180595],
                  [-90.01822909155, 41.1579658616607],
                  [-90.019301975156, 41.1571257735422],
                  [-90.020589435484, 41.1566734139417],
                  [-90.021962726499, 41.1563826096929],
                  [-90.023336017515, 41.1564795445859],
                  [-90.024880969907, 41.1570611509333],
                  [-90.025996768858, 41.15790123988],
                  [-90.026554668333, 41.1586120759635],
                  [-90.026812160398, 41.1597752456533],
                  [-90.026683414365, 41.161035322856],
                  [-90.026168430235, 41.16184305199],
                  [-90.025696361448, 41.1624569193335],
                ],
              ],
              type: 'Polygon',
            },
            properties: {},
            type: 'Feature',
          },
          {
            geometry: {
              coordinates: [
                [
                  [-102.025696361448, 41.1624569193335],
                  [-102.024237239744, 41.1631353976904],
                  [-102.022520625974, 41.1635554045818],
                  [-102.020460689451, 41.1632646308668],
                  [-102.019044483091, 41.1625861538478],
                  [-102.01822909155, 41.1617784339522],
                  [-102.017542446043, 41.1607122284469],
                  [-102.017585361387, 41.1594844551661],
                  [-102.01771410742, 41.1587413180595],
                  [-102.01822909155, 41.1579658616607],
                  [-102.019301975156, 41.1571257735422],
                  [-102.020589435484, 41.1566734139417],
                  [-102.021962726499, 41.1563826096929],
                  [-102.023336017515, 41.1564795445859],
                  [-102.024880969907, 41.1570611509333],
                  [-102.025996768858, 41.15790123988],
                  [-102.026554668333, 41.1586120759635],
                  [-102.026812160398, 41.1597752456533],
                  [-102.026683414365, 41.161035322856],
                  [-102.026168430235, 41.1618430519102],
                  [-102.025696361448, 41.1624569193335],
                ],
              ],
              type: 'Polygon',
            },
            properties: {},
            type: 'Feature',
          },
        ],
        type: 'FeatureCollection',
      },
    });
  });
});

describe('extractFieldName', () => {
  it('will test the function', () => {
    expect(
      extractFieldName({
        metadata:
          'PROJECT_NAME|FIELD_NAME|12345==|54321|2021-03-09T16:52:15.223Z|1|0',
      })
    ).toStrictEqual<ReturnType<typeof extractFieldName>>({
      fieldName: 'FIELD_NAME',
    });
  });
});

describe('buildHistoricCrpLandManagement', () => {
  it('will test the function', () => {
    expect(() => buildHistoricCrpLandManagement()).toThrow();
  });
});

describe('buildHistoricNonCrpLandManagement', () => {
  it('will build historic non-CRP land management when it is indicated that they did not participated in CRP', () => {
    expect(
      buildHistoricNonCrpLandManagement({
        'Pre-1980': 'upland non-irrigated (pre 1980s)',
        'Year1980-2000': 'irrigated: annual crops in rotation',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Year1980-2000_Tillage': 'intensive tillage',
      })
    ).toStrictEqual<ReturnType<typeof buildHistoricNonCrpLandManagement>>({
      crp: 'no',
      preYear1980: 'upland non-irrigated',
      year1980To2000: 'irrigated: annual crops in rotation',
      tillageForYears1980To2000: 'intensive tillage',
    });
  });
});

describe('buildHistoricLandManagement', () => {
  it('will build historic non-CRP land management when it is indicated that they did not participated in CRP', () => {
    expect(
      buildHistoricLandManagement({
        CRP: 'no',
        CRPType: null,
        CRPStartYear: null,
        CRPEndYear: null,
        PreCRPManagement: null,
        PreCRPTillage: null,
        PostCRPManagement: null,
        PostCRPTillage: null,
        'Pre-1980': 'irrigation (pre 1980s)',
        'Year1980-2000': 'irrigated: continuous hay',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Year1980-2000_Tillage': 'no till',
      })
    ).toStrictEqual<ReturnType<typeof buildHistoricLandManagement>>({
      crp: 'no',
      preYear1980: 'irrigation',
      year1980To2000: 'irrigated: continuous hay',
      tillageForYears1980To2000: 'no till',
    });
  });
  it('will build historic CRP land management when it is indicated that they did participate in CRP', () => {
    expect(() =>
      buildHistoricLandManagement({
        CRP: 'yes',
        CRPType: null,
        CRPStartYear: null,
        CRPEndYear: null,
        PreCRPManagement: null,
        PreCRPTillage: null,
        PostCRPManagement: null,
        PostCRPTillage: null,
        'Pre-1980': null,
        'Year1980-2000': null,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Year1980-2000_Tillage': null,
      })
    ).toThrow();
  });
});

describe('separateCurrentAndFutureScenarios', () => {
  it('will test the function', () => {
    expect(separateCurrentAndFutureScenarios(null)).toStrictEqual<
      ReturnType<typeof separateCurrentAndFutureScenarios>
    >(null);
  });
});

describe('extractRegenerativeSwitchYear', () => {
  it('will test the function', () => {
    expect(extractRegenerativeSwitchYear(null)).toStrictEqual<
      ReturnType<typeof extractRegenerativeSwitchYear>
    >(null);
  });
});

describe('translateFertilizerEvent', () => {
  it('will test the function', () => {
    expect(translateFertilizerEvent(null)).toStrictEqual<
      ReturnType<typeof translateFertilizerEvent>
    >(null);
  });
});

describe('translateFertilizerEvents', () => {
  it('will test the function', () => {
    expect(translateFertilizerEvents(null)).toStrictEqual<
      ReturnType<typeof translateFertilizerEvents>
    >(null);
  });
});

describe('translateOrganicMatterEvent', () => {
  it('will test the function', () => {
    expect(translateOrganicMatterEvent(null)).toStrictEqual<
      ReturnType<typeof translateOrganicMatterEvent>
    >(null);
  });
});

describe('translateOrganicMatterEvents', () => {
  it('will test the function', () => {
    expect(translateOrganicMatterEvents(null)).toStrictEqual<
      ReturnType<typeof translateOrganicMatterEvents>
    >(null);
  });
});

describe('translateIrrigationEvent', () => {
  it('will test the function', () => {
    expect(translateIrrigationEvent(null)).toStrictEqual<
      ReturnType<typeof translateIrrigationEvent>
    >(null);
  });
});

describe('translateIrrigationEvents', () => {
  it('will test the function', () => {
    expect(translateIrrigationEvents(null)).toStrictEqual<
      ReturnType<typeof translateIrrigationEvents>
    >(null);
  });
});

describe('translateLimingEvents', () => {
  it('will test the function', () => {
    expect(translateLimingEvents(null)).toStrictEqual<
      ReturnType<typeof translateLimingEvents>
    >(null);
  });
});

describe('translateBurningEvent', () => {
  it('will test the function', () => {
    expect(translateBurningEvent(null)).toStrictEqual<
      ReturnType<typeof translateBurningEvent>
    >(null);
  });
});

describe('translateGrazingEvent', () => {
  it('will test the function', () => {
    expect(translateGrazingEvent(null)).toStrictEqual<
      ReturnType<typeof translateGrazingEvent>
    >(null);
  });
});

describe('translateGrazingEvents', () => {
  it('will test the function', () => {
    expect(translateGrazingEvents(null)).toStrictEqual<
      ReturnType<typeof translateGrazingEvents>
    >(null);
  });
});

describe('translateCropHarvestEvent', () => {
  it('will test the function', () => {
    expect(translateCropHarvestEvent(null)).toStrictEqual<
      ReturnType<typeof translateCropHarvestEvent>
    >(null);
  });
});

describe('translateCropHarvestEvents', () => {
  it('will test the function', () => {
    expect(translateCropHarvestEvents(null)).toStrictEqual<
      ReturnType<typeof translateCropHarvestEvents>
    >(null);
  });
});

describe('translateSoilOrCropDisturbanceEvent', () => {
  it('will test the function', () => {
    expect(translateSoilOrCropDisturbanceEvent(null)).toStrictEqual<
      ReturnType<typeof translateSoilOrCropDisturbanceEvent>
    >(null);
  });
});

describe('translateSoilOrCropDisturbanceEvents', () => {
  it('will test the function', () => {
    expect(translateSoilOrCropDisturbanceEvents(null)).toStrictEqual<
      ReturnType<typeof translateSoilOrCropDisturbanceEvents>
    >(null);
  });
});

describe('translateCoverCrop', () => {
  it('will test the function', () => {
    expect(translateCoverCrop(null)).toStrictEqual<
      ReturnType<typeof translateCoverCrop>
    >(null);
  });
});

describe('translateOrchardOrVineyardCrop', () => {
  it('will test the function', () => {
    expect(translateOrchardOrVineyardCrop(null)).toStrictEqual<
      ReturnType<typeof translateOrchardOrVineyardCrop>
    >(null);
  });
});

describe('translateAnnualCrop', () => {
  it('will test the function', () => {
    expect(translateAnnualCrop(null)).toStrictEqual<
      ReturnType<typeof translateAnnualCrop>
    >(null);
  });
});

describe('translatePerennialCrop', () => {
  it('will test the function', () => {
    expect(translatePerennialCrop(null)).toStrictEqual<
      ReturnType<typeof translatePerennialCrop>
    >(null);
  });
});

describe('translateCropEvent', () => {
  it('will test the function', () => {
    expect(translateCropEvent(null)).toStrictEqual<
      ReturnType<typeof translateCropEvent>
    >(null);
  });
});

describe('extractCrops', () => {
  it('will test the function', () => {
    expect(extractCrops(null)).toStrictEqual<ReturnType<typeof extractCrops>>(
      null
    );
  });
});

describe('extractCropYears', () => {
  it('will test the function', () => {
    expect(extractCropYears(null)).toStrictEqual<
      ReturnType<typeof extractCropYears>
    >(null);
  });
});

describe('extractCroplandsAndScenarios', () => {
  it('will test the function', () => {
    expect(extractCroplandsAndScenarios(null)).toStrictEqual<
      ReturnType<typeof extractCroplandsAndScenarios>
    >(null);
  });
});

describe('shiftCropsTaggedAsContinueFromPreviousYear', () => {
  it('will test the function', () => {
    expect(shiftCropsTaggedAsContinueFromPreviousYear(null)).toStrictEqual<
      ReturnType<typeof shiftCropsTaggedAsContinueFromPreviousYear>
    >(null);
  });
});
