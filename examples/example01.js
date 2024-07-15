import { GeometricProps } from '../dist/esm/index.js'

const rectangulo = new GeometricProps(
  [
    { x: 0, y: 0 },
    { x: 20, y: 0 },
    { x: 20, y: 60 },
    { x: 0, y: 60 },
    { x: 0, y: 0 }
  ]
)

console.log(`
Xmax: ${rectangulo.Xmax.toFixed(2)} cm,
Xmin: ${rectangulo.Xmin.toFixed(2)} cm,
Ymax: ${rectangulo.Ymax.toFixed(2)} cm,
Ymin: ${rectangulo.Ymin.toFixed(2)} cm,
A: ${rectangulo.A.toFixed(2)} cm²,
Sx: ${rectangulo.Sx.toFixed(2)} cm³,
Sy: ${rectangulo.Sy.toFixed(2)} cm³,
Ix: ${rectangulo.Ix.toFixed(2)} cm⁴,
Iy: ${rectangulo.Iy.toFixed(2)} cm⁴,
Ixy: ${rectangulo.Ixy.toFixed(2)} cm⁴,
Xg: ${rectangulo.Xg.toFixed(2)} cm,
Yg: ${rectangulo.Yg.toFixed(2)} cm,
Ixg: ${rectangulo.Ixg.toFixed(2)} cm⁴,
Iyg: ${rectangulo.Iyg.toFixed(2)} cm⁴,
Ixyg: ${rectangulo.Ixyg.toFixed(2)} cm⁴,
Y1: ${rectangulo.Y1.toFixed(2)} cm,
Y2: ${rectangulo.Y2.toFixed(2)} cm,
W1: ${rectangulo.W1.toFixed(2)} cm³,
W2: ${rectangulo.W2.toFixed(2)} cm³,
height: ${rectangulo.height.toFixed(2)} cm,
base: ${rectangulo.base.toFixed(2)} cm
`)
