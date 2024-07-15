import { GeometricProps } from '../dist/esm/index.js'

const sectionTWithCorbels = new GeometricProps(
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
  ]
)

console.log(`
Xmax: ${sectionTWithCorbels.Xmax.toFixed(2)} cm,
Xmin: ${sectionTWithCorbels.Xmin.toFixed(2)} cm,
Ymax: ${sectionTWithCorbels.Ymax.toFixed(2)} cm,
Ymin: ${sectionTWithCorbels.Ymin.toFixed(2)} cm,
A: ${sectionTWithCorbels.A.toFixed(2)} cm²,
Sx: ${sectionTWithCorbels.Sx.toFixed(2)} cm³,
Sy: ${sectionTWithCorbels.Sy.toFixed(2)} cm³,
Ix: ${sectionTWithCorbels.Ix.toFixed(2)} cm⁴,
Iy: ${sectionTWithCorbels.Iy.toFixed(2)} cm⁴,
Ixy: ${sectionTWithCorbels.Ixy.toFixed(2)} cm⁴,
Xg: ${sectionTWithCorbels.Xg.toFixed(2)} cm,
Yg: ${sectionTWithCorbels.Yg.toFixed(2)} cm,
Ixg: ${sectionTWithCorbels.Ixg.toFixed(2)} cm⁴,
Iyg: ${sectionTWithCorbels.Iyg.toFixed(2)} cm⁴,
Ixyg: ${sectionTWithCorbels.Ixyg.toFixed(2)} cm⁴,
Y1: ${sectionTWithCorbels.Y1.toFixed(2)} cm,
Y2: ${sectionTWithCorbels.Y2.toFixed(2)} cm,
W1: ${sectionTWithCorbels.W1.toFixed(2)} cm³,
W2: ${sectionTWithCorbels.W2.toFixed(2)} cm³,
height: ${sectionTWithCorbels.height.toFixed(2)} cm,
base: ${sectionTWithCorbels.base.toFixed(2)} cm
`)
