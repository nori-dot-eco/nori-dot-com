import * as turf from '@turf/turf';
import { Feature } from '@turf/helpers';
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
  closest1: Position[];
  closest2: Position[];
  closestIndex1: number;
  closestIndex2: number;
} => {
  let shortest1 = 100000000000000000000;
  let shortest2 = turf.distance(poly1[0], poly2[0]);
  let closest1 = [poly1[0], poly2[0]];
  let closest2 = [poly1[0], poly2[0]];
  let closestIndex1 = 0;
  let closestIndex2 = 0;
  poly1.forEach((poly1Coords, i) => {
    poly2.forEach((_, j) => {
      const distance = turf.distance(poly1[i], poly2[j]);
      if (distance < shortest1) {
        closest1 = [poly1Coords];
        shortest1 = distance;
        closestIndex1 = i;
      }
    });
  });
  console.log('\nThe closest point in polygon 1 to polygon 2 is', closest1);
  poly2.forEach((poly2Coords, i) => {
    poly1.forEach((_, j) => {
      const distance = turf.distance(poly1[j], poly2[i]);
      if (distance < shortest2) {
        closest2 = [poly2Coords];
        shortest2 = distance;
        closestIndex2 = i;
      }
    });
  });
  console.log('The closest point in polygon 1 to polygon 2 is', closest2);
  return {
    closest1,
    closest2,
    closestIndex1,
    closestIndex2,
  };
};

const drawShortestPathBetweenPolys = ({ coordinatesGroup }): Feature[] =>
  turf.multiPolygon([coordinatesGroup]).geometry.coordinates.map(polygons => {
    const [poly1, poly2] = polygons;
    const {
      closest1,
      closest2,
      closestIndex1,
      closestIndex2,
    } = closestPointsInPolys(poly1, poly2);

    // create polygon ends for the new geom
    const poly1FinalLatShifted =
      closest1[0][0] < 0
        ? closest1[0][0] + 0.00000001
        : closest1[0][0] - 0.00000001;
    const poly1End = poly1
      .splice(0, closestIndex1)
      .concat([[poly1FinalLatShifted, closest1[0][1]]]);
    const poly2End = poly2.splice(0, closestIndex2).concat(closest2);

    // redraw polygons
    const redrawnPoly1 = poly1.concat(poly1End);
    let poly2FirstCoords = poly2.shift();
    const poly2FirstLatShifted =
      poly2FirstCoords[0] < 0
        ? poly2FirstCoords[0] + 0.00000001
        : poly2FirstCoords[0] - 0.00000001;
    poly2FirstCoords = [poly2FirstLatShifted, poly2FirstCoords[1]];
    const redrawnPoly2 = [poly2FirstCoords]
      .concat(poly2)
      .concat(poly2End)
      .concat(closest1);
    const redrawnGeometryWithPath = [...redrawnPoly1, ...redrawnPoly2];
    console.log(
      'Polygons redrawn with connection between',
      closest1,
      'and',
      closest2
    );
    return createGeoJSONFeature(redrawnGeometryWithPath);
  });

const multiPolygonToPolygon = (
  featureCollection: FeatureCollection<MultiPolygon>
): Feature => {
  const {
    features: [
      {
        geometry: { coordinates: coordinatesGroup },
      },
    ],
  } = featureCollection;
  const [geoJson] = drawShortestPathBetweenPolys({ coordinatesGroup });
  return geoJson;
};
export default multiPolygonToPolygon;
