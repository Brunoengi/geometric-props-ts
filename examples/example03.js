import { GeometricProps } from '../dist/esm/index.js'

const sectionBox = new GeometricProps(
  [
    { x: 300, y: 0 },
    { x: 300, y: 250 },
    { x: 320, y: 270 },
    { x: 598, y: 270 },
    { x: 598, y: 296 },
    { x: 0, y: 300 },
    { x: -598, y: 296 },
    { x: -598, y: 270 },
    { x: -320, y: 270 },
    { x: -300, y: 250 },
    { x: -300, y: 0 },
    { x: 300, y: 0 },
    { x: 275, y: 25 },
    { x: -275, y: 25 },
    { x: -275, y: 250 },
    { x: -255, y: 270 },
    { x: 255, y: 270 },
    { x: 275, y: 250 },
    { x: 275, y: 25 },
    { x: 300, y: 0 }
  ]
)

console.log(`
Xmax: ${sectionBox.Xmax.toFixed(2)} cm,
Xmin: ${sectionBox.Xmin.toFixed(2)} cm,
Ymax: ${sectionBox.Ymax.toFixed(2)} cm,
Ymin: ${sectionBox.Ymin.toFixed(2)} cm,
A: ${sectionBox.A.toFixed(2)} cm²,
Sx: ${sectionBox.Sx.toFixed(2)} cm³,
Sy: ${sectionBox.Sy.toFixed(2)} cm³,
Ix: ${sectionBox.Ix.toFixed(2)} cm⁴,
Iy: ${sectionBox.Iy.toFixed(2)} cm⁴,
Ixy: ${sectionBox.Ixy.toFixed(2)} cm⁴,
Xg: ${sectionBox.Xg.toFixed(2)} cm,
Yg: ${sectionBox.Yg.toFixed(2)} cm,
Ixg: ${sectionBox.Ixg.toFixed(2)} cm⁴,
Iyg: ${sectionBox.Iyg.toFixed(2)} cm⁴,
Ixyg: ${sectionBox.Ixyg.toFixed(2)} cm⁴,
Y1: ${sectionBox.Y1.toFixed(2)} cm,
Y2: ${sectionBox.Y2.toFixed(2)} cm,
W1: ${sectionBox.W1.toFixed(2)} cm³,
W2: ${sectionBox.W2.toFixed(2)} cm³,
height: ${sectionBox.height.toFixed(2)} cm,
base: ${sectionBox.base.toFixed(2)} cm
`)
