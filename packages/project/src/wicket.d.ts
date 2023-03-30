import type { Geometry } from 'geojson';

declare class Wkt {
  constructor();

  fromObject(obj: Object): this;

  write(): string;

  read(str: string): this;

  toJson<T extends Geometry>(): T;

  // fallback for types left unwritten
  [key: string]: any;
}

export { Wkt };
