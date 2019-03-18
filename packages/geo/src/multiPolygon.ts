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
  // closest2: Position[];
  closestIndexToPoly1InPoly2: number;
  closestIndexToPoly2InPoly1: number;
} => {
  let shortestPathBetweenPolys = turf.distance(poly1[0], poly2[0]);
  // let shortest2 = turf.distance(poly2[0], poly1[0]);
  let closestCoordsInBothPolys = [poly1[0], poly2[0]];
  // let closest2 = [poly1[0], poly2[0]];
  let closestIndexToPoly1InPoly2 = 0;
  let closestIndexToPoly2InPoly1 = 0;
  // let closestIndex2 = 0;
  const polygonGeoFeature1 = turf.polygon([poly1]);
  // const polygonGeoFeature2 = turf.polygon([poly2]);

  poly1.forEach((poly1Coords, i) => {
    poly2.forEach((_, j) => {
      const distance = turf.distance(poly1[i], poly2[j]);
      const line = turf.lineString([poly1[i], poly2[j]]);
      if (
        distance < shortestPathBetweenPolys &&
        !booleanDisjoint(line, polygonGeoFeature1)
      ) {
        closestCoordsInBothPolys = [poly1[i], poly2[j]];
        shortestPathBetweenPolys = distance;
        closestIndexToPoly2InPoly1 = i;
        closestIndexToPoly1InPoly2 = j;
      }
    });
  });
  // console.log('\nThe closest point in polygon 1 to polygon 2 is', closest1);
  // poly2.forEach((poly2Coords, i) => {
  //   poly1.forEach((_, j) => {
  //     const distance = turf.distance(poly1[j], poly2[i]);
  //     const line = turf.lineString([poly1[j], poly2[i]]);
  //     // console.log([poly1, poly2]);
  //     if (distance < shortest2 && !booleanDisjoint(line, polygonGeoFeature2)) {
  //       closest2 = [poly2Coords];
  //       shortest2 = distance;
  //       closestIndex2 = i;
  //     }
  //   });
  // });
  // console.log('The closest point in polygon 2 to polygon 1 is', closest2);
  return {
    closestCoordsInBothPolys,
    // closest2,
    closestIndexToPoly1InPoly2,
    closestIndexToPoly2InPoly1,
  };
};

const drawShortestPathBetweenPolys = ({ coordinatesGroup }): Feature[] =>
  turf.multiPolygon([coordinatesGroup]).geometry.coordinates.map(polygons => {
    const [poly1, poly2] = polygons;
    const {
      closestCoordsInBothPolys,
      // closest2,
      closestIndexToPoly2InPoly1,
      closestIndexToPoly1InPoly2,
    } = closestPointsInPolys(poly1, poly2);
    poly1.pop();
    poly2.pop();
    console.log('closestCoordsInBothPolys', closestCoordsInBothPolys);
    // create polygon ends for the new geom
    const poly1FinalLongShifted =
      turf.bearing(closestCoordsInBothPolys[0], closestCoordsInBothPolys[1]) >=
      -90
        ? // closest1[0][0] < closest2[0][0]
          closestCoordsInBothPolys[0][0] - 0.0002
        : closestCoordsInBothPolys[0][0] + 0.0002;
    const poly1FinalLatShifted =
      turf.bearing(closestCoordsInBothPolys[0], closestCoordsInBothPolys[1]) <=
      -90
        ? // closest1[0][1] > closest2[0][1]
          closestCoordsInBothPolys[0][1] + 0.0002
        : closestCoordsInBothPolys[0][1] - 0.0002;
    console.log(
      'turf.bearing(closestCoordsInBothPolys[0], closestCoordsInBothPolys[1]) >= -90',
      turf.bearing(closestCoordsInBothPolys[0], closestCoordsInBothPolys[1]) >=
        -90
    );
    console.log('[poly1FinalLongShifted, poly1FinalLatShifted]', [
      poly1FinalLongShifted,
      poly1FinalLatShifted,
    ]);
    const poly1End = poly1.splice(0, closestIndexToPoly2InPoly1);
    const poly2End = poly2.splice(0, closestIndexToPoly1InPoly2);
    // .concat([poly2[closestIndexToPoly1InPoly2]]);
    console.log('poly1End', poly1End);
    console.log('poly2End', poly2End);

    // redraw polygons
    const redrawnPoly1 = poly1
      .concat(poly1End)
      .concat([[poly1FinalLongShifted, poly1FinalLatShifted]]);
    let poly2FirstCoords = poly2.shift();
    const poly2FirstLongShifted =
      turf.bearing(closestCoordsInBothPolys[1], closestCoordsInBothPolys[0]) <=
      90
        ? // closest2[0][0] > closest1[0][0]
          closestCoordsInBothPolys[1][0] - 0.0001
        : closestCoordsInBothPolys[1][0] + 0.0001;

    const poly2FirstLatShifted =
      turf.bearing(closestCoordsInBothPolys[1], closestCoordsInBothPolys[0]) >=
      90
        ? // closest2[0][1] < closest1[0][1]
          closestCoordsInBothPolys[1][1] + 0.0001
        : closestCoordsInBothPolys[1][1] - 0.0001;
    // console.log(
    //   ' turf.bearing(closest2[0], closest1[0]) >= 90',
    //   turf.bearing(closest2[0], closestCoordsInBothPolys[0]) >= 90
    // );
    poly2FirstCoords = [poly2FirstLongShifted, poly2FirstLatShifted];
    console.log('poly2FirstCoords', poly2FirstCoords);
    const redrawnPoly2 = [poly2FirstCoords]
      .concat(poly2)
      .concat(poly2End)
      .concat([closestCoordsInBothPolys[1]]);
    const redrawnGeometryWithPath = [
      ...redrawnPoly1,
      ...redrawnPoly2,
      redrawnPoly1[0],
    ];
    console.log('redrawnGeometryWithPath', redrawnGeometryWithPath);
    // console.log(
    //   'Polygons redrawn with connection between',
    //   closestCoordsInBothPolys,
    //   'and',
    //   closest2
    // );
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
  // console.log(coordinatesGroup, [coordinatesGroup[0][1]]);
  let geoJson;
  for (let i = 0; i < coordinatesGroup.length; i++) {
    console.log('[coordinatesGroup[0], coordinatesGroup[1]]', [
      coordinatesGroup[0],
      coordinatesGroup[1],
    ]);
    [geoJson] = drawShortestPathBetweenPolys({
      coordinatesGroup: [coordinatesGroup[0], coordinatesGroup[1]],
    });
    const {
      geometry: { coordinates: redrawnCoordinates },
    } = geoJson;
    // console.log(redrawnCoordinates);
    coordinatesGroup.shift();
    coordinatesGroup.shift();
    coordinatesGroup = [
      ...redrawnCoordinates,
      ...(coordinatesGroup.length ? coordinatesGroup : []),
    ];
    // console.log(coordinatesGroup.length, coordinatesGroup);
  }
  // console.log(coordinatesGroup);

  return geoJson;
};
export default multiPolygonToPolygon;
