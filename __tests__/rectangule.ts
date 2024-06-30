import { type IGeometricProps, type IEquivalentFigures } from '../src/interfaces/IGeometricProps'
import { rectanguleScalex, basicRectangleFromOrigin, getKeys } from '../utils/testFunctions'

describe('Checking the removal of the rectangle from the rectangle', () => {
  test('Check if I multiply my rectangle by a scalar on the x-axis and remove the excess, I will have the same original rectangle', () => {
    const basicRec: IGeometricProps = basicRectangleFromOrigin(1, 1)
    // The test must be true for any positive value greater than 1 using rectanguleScalex
    const scalex: IGeometricProps = rectanguleScalex(1.5)
    // Taking all the keys that have to be the same and comparing
    for (const key of getKeys<IEquivalentFigures>()) {
      expect(basicRec[key as keyof IEquivalentFigures]).toBeCloseTo(scalex[key as keyof IEquivalentFigures])
    }
  })
})
