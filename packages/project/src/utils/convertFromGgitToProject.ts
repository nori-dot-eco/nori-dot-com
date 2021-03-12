import type { Input } from '@nori-dot-com/ggit';
import { add } from '@nori-dot-com/math';
import * as wicket from 'wicket';
import { featureCollection, feature } from '@turf/helpers';
import type { FeatureCollection } from 'geojson';

import type { Project, Field } from '../specification';

const extractGeometryData = ({
  croplands,
}: {
  croplands: Input.Cropland[];
}): Pick<Field, 'acres' | 'geojson'> => {
  const geometryData = croplands.reduce(
    (cropland, { GEOM: { '#text': wkt, '@AREA': acres } }) => {
      // return [{acres,geojson}];
      const geojson = featureCollection([
        feature(new wicket.Wkt().read(wkt).toJson()),
        ...(cropland.geojson as FeatureCollection).features,
      ]);
      return { geojson, acres: add(cropland.acres, acres) };
    },
    { acres: 0, geojson: {} } as Pick<Field, 'acres' | 'geojson'>
  );

  return geometryData;
};

export const convertFromGgitToProject = ({
  ggitInputData,
}: {
  ggitInputData: Input.InputData;
}): Project => {
  const geometryData = extractGeometryData({
    croplands: ggitInputData.Cropland,
  });
  const projectData: Project = { version: '0.3.0', fields: [] };
  return projectData;
};
