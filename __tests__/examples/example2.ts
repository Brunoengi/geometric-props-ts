import GeometricProps from '../../src/GeometricProps'
import { type IGeometricProps } from '../../src/interfaces/IGeometricProps'
import { reduceGeometricProp } from '../../utils/testFunctions'

describe('Example 2 - T Beam - Sum 3 Rectangules + 4 triangules (Corbel)', () => {
  let rectanguloBottom: GeometricProps, rectanguloTop: GeometricProps, ribMiddle: GeometricProps, corbelTopLeft: GeometricProps, corbelTopRight: GeometricProps, corbelBottomLeft: GeometricProps, corbelBottomRight: GeometricProps, completeFigure: GeometricProps, figuresParts: GeometricProps[]
  beforeAll(() => {
    rectanguloBottom = new GeometricProps([
      { x: 30, y: 0 },
      { x: 30, y: 40 },
      { x: -30, y: 40 },
      { x: -30, y: 0 },
      { x: 30, y: 0 }
    ])

    rectanguloTop = new GeometricProps([
      { x: 40, y: 130 },
      { x: 40, y: 150 },
      { x: -40, y: 150 },
      { x: -40, y: 130 },
      { x: 40, y: 130 }
    ])

    ribMiddle = new GeometricProps([
      { x: 10, y: 40 },
      { x: 10, y: 130 },
      { x: -10, y: -40 },
      { x: -10, y: -130 },
      { x: 10, y: 40 }
    ])

    corbelTopLeft = new GeometricProps([
      { x: -10, y: 120 },
      { x: -10, y: 130 },
      { x: -40, y: 130 },
      { x: -10, y: 120 }
    ])

    corbelTopRight = new GeometricProps([
      { x: 10, y: 120 },
      { x: 40, y: 130 },
      { x: 10, y: 130 },
      { x: 10, y: 120 }
    ])

    corbelBottomLeft = new GeometricProps([
      { x: -10, y: 40 },
      { x: -10, y: 60 },
      { x: -30, y: 40 },
      { x: -10, y: 40 }
    ])

    corbelBottomRight = new GeometricProps([
      { x: 30, y: 40 },
      { x: 10, y: 60 },
      { x: 10, y: 40 }
    ])

    completeFigure = new GeometricProps(
      [
        { x: 30, y: 0 },
        { x: 30, y: 40 },
        { x: 10, y: 60 },
        { x: 10, y: 120 },
        { x: 40, y: 130 },
        { x: 40, y: 150 },
        { x: -40, y: 150 },
        { x: -40, y: 130 },
        { x: -10, y: 120 },
        { x: -10, y: 60 },
        { x: -30, y: 40 },
        { x: -30, y: 0 },
        { x: 30, y: 0 }
      ])
    figuresParts = [rectanguloBottom, rectanguloTop, ribMiddle, corbelTopLeft, corbelTopRight, corbelBottomLeft, corbelBottomRight]
  }
  )

  test('Check that there are no undefined or null properties', () => {
    for (const figure of figuresParts) {
      for (const key of Object.keys(figure as IGeometricProps)) {
        expect(figure[key as keyof IGeometricProps]).not.toBeNull()
        expect(figure[key as keyof IGeometricProps]).not.toBeUndefined()
      }
    }
  })
  test('Check the Area', () => {
    const sumArea = reduceGeometricProp(figuresParts, 'A')
    expect(completeFigure.A).toBeCloseTo(sumArea)
  })
})
