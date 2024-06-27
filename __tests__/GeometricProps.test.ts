import GeometricProps from '../src/index'

describe('Examples', () => {
  test('Create a rectangule with base = 20cm and height = 60cm', () => {
    const rectangulo = new GeometricProps(
      [
        { x: 0, y: 0 },
        { x: 20, y: 0 },
        { x: 20, y: 60 },
        { x: 0, y: 60 },
        { x: 0, y: 0 }
      ])

    // for (const key of Object.keys(rectangulo)) {
    //   expect(rectangulo[key as keyof IGeometricProps]).not.toBeNull()
    //   expect(rectangulo[key as keyof IGeometricProps]).not.toBeUndefined()
    // }

    expect(rectangulo.height).toBeCloseTo(60)
    expect(rectangulo.base).toBeCloseTo(20)
  })
})
