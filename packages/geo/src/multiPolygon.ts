import * as turf from '@turf/turf';
import booleanDisjoint from '@turf/boolean-disjoint';
import { Feature, lineString } from '@turf/helpers';
import { FeatureCollection, MultiPolygon, Position } from 'geojson';

// todo use jsdoc
const createGeoJSONFeature = (coordinates: Position[]): Feature => {
  const geometry = {
    type: 'Polygon',
    coordinates: [coordinates],
  };
  const feature = turf.feature(geometry);
  return feature;
};

const closestPointsInPolys = (
  poly1: Position[],
  poly2: Position[]
): {
  closestCoordsInBothPolys: Position[];
  closestIndexToPoly1InPoly2: number;
  closestIndexToPoly2InPoly1: number;
  pointToPush: Position[];
} => {
  let shortestPathBetweenPolys = turf.distance(poly1[0], poly2[0]);
  let closestCoordsInBothPolys = [poly1[0], poly2[0]];
  let closestIndexToPoly1InPoly2 = 0;
  let closestIndexToPoly2InPoly1 = 0;
  let pointToPush;
  const polygonGeoFeature1 = turf.polygon([poly1]);

  poly1.forEach((poly1Coords, i) => {
    poly2.forEach((_, j) => {
      const distance = turf.distance(poly1[i], poly2[j]);
      const line = turf.lineString([poly1[i], poly2[j]]);

      if (distance < shortestPathBetweenPolys) {
        if (booleanDisjoint(line, polygonGeoFeature1)) {
          closestCoordsInBothPolys = [poly1[i], poly2[j]];
          closestIndexToPoly2InPoly1 = i;
          closestIndexToPoly1InPoly2 = j;
        } else {
          const newPointLong =
            turf.bearing(poly1[i], poly2[j]) > 90
              ? poly1[i][0] + 0.0001
              : poly1[i][0] + 0.0001;
          const newPointLat =
            turf.bearing(poly1[i], poly2[j]) > 90
              ? poly1[i][1] - 0.0001
              : poly1[i][1] + 0.0001;

          pointToPush = [newPointLong, newPointLat];
          closestCoordsInBothPolys = [[newPointLong, newPointLat], poly2[j]];
          closestIndexToPoly2InPoly1 = 0;
          closestIndexToPoly1InPoly2 = j;
        }

        shortestPathBetweenPolys = distance;
      }
    });
  });
  return {
    closestCoordsInBothPolys,
    pointToPush,
    closestIndexToPoly1InPoly2,
    closestIndexToPoly2InPoly1,
  };
};

const drawShortestPathBetweenPolys = ({
  coordinatesGroup,
  isLast,
}): Feature[] =>
  turf.multiPolygon([coordinatesGroup]).geometry.coordinates.map(polygons => {
    let [poly1, poly2] = polygons;
    const {
      closestCoordsInBothPolys,
      closestIndexToPoly2InPoly1,
      closestIndexToPoly1InPoly2,
      pointToPush,
    } = closestPointsInPolys(poly1, poly2);
    poly1.pop();
    poly2.pop();
    if (pointToPush) poly1 = <any>(<unknown>[pointToPush].concat(poly1));
    // if (!isLast) {
    //   poly1.pop();
    //   poly2.pop();
    // }

    // create polygon ends for the new geom
    const bearingBetweenPolygons = turf.bearing(
      closestCoordsInBothPolys[0],
      closestCoordsInBothPolys[1]
    );
    const poly1FinalLongShifted =
      bearingBetweenPolygons > 0 && bearingBetweenPolygons < 90 // ! this, or other bearing usages, is *likely* where the bug is
        ? closestCoordsInBothPolys[0][0] - 0.0001
        : closestCoordsInBothPolys[0][0] + 0.0001;
    const poly1FinalLatShifted =
      turf.bearing(closestCoordsInBothPolys[0], closestCoordsInBothPolys[1]) <=
      -90
        ? closestCoordsInBothPolys[0][1] - 0.0001
        : closestCoordsInBothPolys[0][1] + 0.0001;

    const poly1End = poly1.splice(0, closestIndexToPoly2InPoly1);
    const poly2End = poly2.splice(0, closestIndexToPoly1InPoly2);

    // redraw polygons
    const redrawnPoly1 = poly1
      .concat(poly1End)
      .concat([[poly1FinalLongShifted, poly1FinalLatShifted]]);
    let poly2FirstCoords = poly2.shift();

    const bear = turf.bearing(
      closestCoordsInBothPolys[1],
      closestCoordsInBothPolys[0]
    );
    const poly2FirstLongShifted =
      bear < 0 && bear > -90
        ? closestCoordsInBothPolys[1][0] + 0.0001
        : closestCoordsInBothPolys[1][0] - 0.0001;

    const poly2FirstLatShifted =
      turf.bearing(closestCoordsInBothPolys[1], closestCoordsInBothPolys[0]) >=
      90
        ? closestCoordsInBothPolys[1][1] + 0.0001
        : closestCoordsInBothPolys[1][1] - 0.0001;
    poly2FirstCoords = [poly2FirstLongShifted, poly2FirstLatShifted];
    const redrawnPoly2 = [poly2FirstCoords]
      .concat(poly2)
      .concat(poly2End)
      .concat([closestCoordsInBothPolys[1]]);
    const redrawnGeometryWithPath = [
      ...redrawnPoly1,
      ...redrawnPoly2,
      redrawnPoly1[0],
    ];
    return createGeoJSONFeature(redrawnGeometryWithPath);
  });

const multiPolygonToPolygon = (
  featureCollection: FeatureCollection<MultiPolygon>
): Feature => {
  let {
    features: [
      {
        geometry: { coordinates: coordinatesGroup },
      },
    ],
  } = featureCollection;
  let geoJson;
  for (let i = 0; i < coordinatesGroup.length; i++) {
    console.log('[coordinatesGroup[0], coordinatesGroup[1]]', [
      coordinatesGroup[0],
      coordinatesGroup[1],
    ]);
    [geoJson] = drawShortestPathBetweenPolys({
      coordinatesGroup: [coordinatesGroup[0], coordinatesGroup[1]],
      isLast: coordinatesGroup.length === 2,
    });
    const {
      geometry: { coordinates: redrawnCoordinates },
    } = geoJson;
    coordinatesGroup.shift();
    coordinatesGroup.shift();
    coordinatesGroup = [
      ...redrawnCoordinates,
      ...(coordinatesGroup.length ? coordinatesGroup : []),
    ];
  }

  return geoJson;
};
export default multiPolygonToPolygon;
