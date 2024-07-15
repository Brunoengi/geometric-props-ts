import GeometricProps from '../src/GeometricProps'
import { type IGeometricProps } from '../src/interfaces/IGeometricProps'

export function reduceGeometricProp (figures: IGeometricProps[], propertie: keyof IGeometricProps): number {
  const accumulator = figures.reduce((acc, currentFigure) => {
    return acc + currentFigure[propertie]
  }, 0)
  return accumulator
}

export function basicRectangleFromOrigin (dx: number, dy: number): IGeometricProps {
  return new GeometricProps([
    { x: 0, y: 0 },
    { x: dx, y: 0 },
    { x: dx, y: dy },
    { x: 0, y: dy },
    { x: 0, y: 0 }
  ])
}

export function basicRectangleFromAnyPoint(beginx: number, endx: number, beginy: number, endy: number): IGeometricProps {
  return new GeometricProps([
    { x: beginx, y: beginy },
    { x: endx, y: beginy },
    { x: endx, y: endy },
    { x: beginx, y: endy },
    { x: beginx, y: beginy }
  ])
}

export function rectanguleScalex (multiplyx: number): GeometricProps {
  return new GeometricProps([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: multiplyx, y: 0 },
    { x: multiplyx, y: 1 },
    { x: 1, y: 1 },
    { x: 0, y: 1 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: multiplyx, y: 1 },
    { x: multiplyx, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 }
  ])
}

export function getKeys<T extends object>() {
  return Object.keys({} as T) as Array<keyof T>
}
