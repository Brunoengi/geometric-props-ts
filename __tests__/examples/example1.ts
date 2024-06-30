import GeometricProps from '../../src/GeometricProps'
import { type IGeometricProps } from '../../src/interfaces/IGeometricProps'

describe('Example 1 - Rectangulo with base = 20cm and height = 60cm', () => {
  let rectangulo: GeometricProps
  beforeAll(() => {
    rectangulo = new GeometricProps(
      [
        { x: 0, y: 0 },
        { x: 20, y: 0 },
        { x: 20, y: 60 },
        { x: 0, y: 60 },
        { x: 0, y: 0 }
      ])
  })

  test('Check that there are no undefined or null properties', () => {
    for (const key of Object.keys(rectangulo as IGeometricProps)) {
      expect(rectangulo[key as keyof IGeometricProps]).not.toBeNull()
      expect(rectangulo[key as keyof IGeometricProps]).not.toBeUndefined()
    }
  })
  test('Check the lenght about base and height', () => {
    expect(rectangulo.height).toBeCloseTo(60)
    expect(rectangulo.base).toBeCloseTo(20)
  })
  test('Calculate the centroids with middle distance', () => {
    expect(rectangulo.Xg).toBeCloseTo(10)
    expect(rectangulo.Yg).toBeCloseTo(30)
  })
  test('Check the Area (A) calculated another way', () => {
    const area = 20 * 60
    expect(rectangulo.A).toBeCloseTo(area)
  })
  test('Check the vertical distance Y1 and Y2 calculated another way', () => {
    const Y1 = -(30 - 0)
    const Y2 = 60 - 30
    expect(rectangulo.Y1).toBeCloseTo(Y1)
    expect(rectangulo.Y2).toBeCloseTo(Y2)
  })
  test('Check the Moment of Inertia calculated another way + Resistant modulus calculated another way', () => {
    const Ixg = (rectangulo.base * rectangulo.height ** 3) / 12
    const Iyg = (rectangulo.height * rectangulo.base ** 3) / 12
    expect(rectangulo.Ixg).toBeCloseTo(Ixg)
    expect(rectangulo.Iyg).toBeCloseTo(Iyg)
  })
  test('Check the Resistent Modulus calculated another way', () => {
    const Y1 = -(30 - 0)
    const Y2 = 60 - 30
    const Ixg = (rectangulo.base * rectangulo.height ** 3) / 12
    const W1 = Ixg / Y1
    const W2 = Ixg / Y2
    expect(rectangulo.W1).toBeCloseTo(W1)
    expect(rectangulo.W2).toBeCloseTo(W2)
  })
})
