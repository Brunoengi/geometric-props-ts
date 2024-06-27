import { type IBidimensionalPoint, type IGreenTheoremLine, type IGeometricProps } from './interfaces/IGeometricProps.js'

class GeometricProps implements IGeometricProps {
  private _A: number = 0
  private _Sx: number = 0
  private _Sy: number = 0
  private _Ix: number = 0
  private _Iy: number = 0
  private _Ixy: number = 0
  private _Ixg: number
  private _Iyg: number
  private _Ixyg: number
  private _Y1: number
  private _Y2: number
  private _W1: number
  private _W2: number
  private _Xmax: number
  private _Ymax: number
  private _Xmin: number
  private _Ymin: number
  private _Xg: number
  private _Yg: number
  private _height: number
  private _base: number

  constructor (vector: IBidimensionalPoint[]) {
    for (let i = 0; i < vector.length - 1; i++) {
      const [x0, x1, y0, y1] = [vector[i].x, vector[i + 1].x, vector[i].y, vector[i + 1].y]
      const greenTheoremLine = {
        x0,
        x1,
        y0,
        y1,
        dx: x1 - x0,
        dy: y1 - y0
      }

      this.calculateArea(greenTheoremLine)
      this.calculateSx(greenTheoremLine)
      this.calculateSy(greenTheoremLine)
      this.calculateIx(greenTheoremLine)
      this.calculateIy(greenTheoremLine)
      this.calculateIxy(greenTheoremLine)
    }

    this.calculateXg()
    this.calculateYg()
    this.calculateIxg()
    this.calculateIyg()
    this.calculateIxyg()

    for (let j = 0; j < vector.length; j++) {
      this.calculateXMax(vector[j].x)
      this.calculateXMin(vector[j].x)
      this.calculateYMax(vector[j].y)
      this.calculateYMin(vector[j].y)
    }
    this.calculateHeight()
    this.calculateBase()
    this.calculateY1()
    this.calculateY2()
    this.calculateW1()
    this.calculateW2()

    this.sumSignCorrection()
  }

  private calculateArea ({ x0, dx, dy }: IGreenTheoremLine): void {
    this._A += (x0 + dx / 2) * dy
  }

  private calculateSx ({ x0, y0, dx, dy }: IGreenTheoremLine): void {
    this._Sx += (x0 * (y0 + dy / 2) + dx * (y0 / 2 + dy / 3)) * dy
  }

  private calculateSy ({ x0, dx, dy }: IGreenTheoremLine): void {
    this._Sy += (x0 * (x0 + dx) + dx ** 2 / 3) * dy / 2
  }

  private calculateIx ({ x0, y0, dx, dy }: IGreenTheoremLine): void {
    this._Ix += (x0 * (y0 * (dy + y0) + dy ** 2 / 3) + dx * (y0 * (y0 / 2 + 2 * dy / 3) + dy ** 2 / 4)) * dy
  }

  private calculateIy ({ x0, dx, dy }: IGreenTheoremLine): void {
    this._Iy += (dx ** 3 / 4 + x0 * (dx ** 2 + x0 * (3 * dx / 2 + x0))) * dy / 3
  }

  private calculateIxy ({ x0, y0, dx, dy }: IGreenTheoremLine): void {
    this._Ixy += (x0 * (x0 * (y0 + dy / 2) + dx * (y0 + 2 * dy / 3)) + dx ** 2 * (y0 / 3 + dy / 4)) * dy / 2
  }

  private calculateXg (): void {
    this._Xg = this._Sy / this._A
  }

  private calculateYg (): void {
    this._Yg = this._Sx / this._A
  }

  private calculateIxg (): void {
    this._Ixg = this._Ix - this._Yg ** 2 * this._A
  }

  private calculateIyg (): void {
    this._Iyg = this._Iy - this._Xg ** 2 * this._A
  }

  private calculateIxyg (): void {
    this._Ixyg = this._Ixy - this._Xg * this._Yg * this._A
  }

  private calculateY1 (): void {
    this._Y1 = Math.abs(this._Yg - this._Ymin)
  }

  private calculateY2 (): void {
    this._Y2 = Math.abs(this._Ymax - this._Yg)
  }

  private calculateW1 (): void {
    this._W1 = this._Ixg / this._Y1
  }

  private calculateW2 (): void {
    this._W2 = this._Ixg / this._Y2
  }

  private calculateHeight (): void {
    this._height = Math.abs(this._Ymax - this._Ymin)
  }

  private calculateBase (): void {
    this._base = Math.abs(this._Xmax - this._Xmin)
  }

  private calculateXMax (arrPositionx: number): void {
    if (this._Xmax === undefined || arrPositionx >= this._Xmax) {
      this._Xmax = arrPositionx
    }
  }

  private calculateXMin (arrPositionx: number): void {
    if (this._Xmin === undefined || arrPositionx <= this._Xmin) {
      this._Xmin = arrPositionx
    }
  }

  private calculateYMax (arrPositiony: number): void {
    if (this._Ymax === undefined || arrPositiony >= this._Ymax) {
      this._Ymax = arrPositiony
    }
  }

  private calculateYMin (arrPositiony: number): void {
    if (this._Ymin === undefined || arrPositiony <= this._Ymin) {
      this._Ymin = arrPositiony
    }
  }

  private sumSignCorrection (): void {
    this._Y1 *= -1
    this._W1 *= -1
  }

  public get A (): number {
    return this._A
  }

  public get Sx (): number {
    return this._Sx
  }

  public get Sy (): number {
    return this._Sy
  }

  public get Ix (): number {
    return this._Ix
  }

  public get Iy (): number {
    return this._Iy
  }

  public get Ixy (): number {
    return this._Ixy
  }

  public get Xmax (): number {
    return this._Xmax
  }

  public get Xmin (): number {
    return this._Xmin
  }

  public get Ymax (): number {
    return this._Ymax
  }

  public get Ymin (): number {
    return this._Ymin
  }

  public get Xg (): number {
    return this._Xg
  }

  public get Yg (): number {
    return this._Yg
  }

  public get Ixg (): number {
    return this._Ixg
  }

  public get Iyg (): number {
    return this._Iyg
  }

  public get Ixyg (): number {
    return this._Ixyg
  }

  public get Y1 (): number {
    return this._Y1
  }

  public get Y2 (): number {
    return this._Y2
  }

  public get W1 (): number {
    return this._W1
  }

  public get W2 (): number {
    return this._W2
  }

  public get height (): number {
    return this._height
  }

  public get base (): number {
    return this._base
  }
}

export default GeometricProps
