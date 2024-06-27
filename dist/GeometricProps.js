class GeometricProps {
    constructor(vector) {
        this._A = 0;
        this._Sx = 0;
        this._Sy = 0;
        this._Ix = 0;
        this._Iy = 0;
        this._Ixy = 0;
        for (let i = 0; i < vector.length - 1; i++) {
            const [x0, x1, y0, y1] = [vector[i].x, vector[i + 1].x, vector[i].y, vector[i + 1].y];
            const greenTheoremLine = {
                x0,
                x1,
                y0,
                y1,
                dx: x1 - x0,
                dy: y1 - y0
            };
            this.calculateArea(greenTheoremLine);
            this.calculateSx(greenTheoremLine);
            this.calculateSy(greenTheoremLine);
            this.calculateIx(greenTheoremLine);
            this.calculateIy(greenTheoremLine);
            this.calculateIxy(greenTheoremLine);
        }
        this.calculateXg();
        this.calculateYg();
        this.calculateIxg();
        this.calculateIyg();
        this.calculateIxyg();
        for (let j = 0; j < vector.length; j++) {
            this.calculateXMax(vector[j].x);
            this.calculateXMin(vector[j].x);
            this.calculateYMax(vector[j].y);
            this.calculateYMin(vector[j].y);
        }
        this.calculateHeight();
        this.calculateBase();
        this.calculateY1();
        this.calculateY2();
        this.calculateW1();
        this.calculateW2();
        this.sumSignCorrection();
    }
    calculateArea({ x0, dx, dy }) {
        this._A += (x0 + dx / 2) * dy;
    }
    calculateSx({ x0, y0, dx, dy }) {
        this._Sx += (x0 * (y0 + dy / 2) + dx * (y0 / 2 + dy / 3)) * dy;
    }
    calculateSy({ x0, dx, dy }) {
        this._Sy += (x0 * (x0 + dx) + dx ** 2 / 3) * dy / 2;
    }
    calculateIx({ x0, y0, dx, dy }) {
        this._Ix += (x0 * (y0 * (dy + y0) + dy ** 2 / 3) + dx * (y0 * (y0 / 2 + 2 * dy / 3) + dy ** 2 / 4)) * dy;
    }
    calculateIy({ x0, dx, dy }) {
        this._Iy += (dx ** 3 / 4 + x0 * (dx ** 2 + x0 * (3 * dx / 2 + x0))) * dy / 3;
    }
    calculateIxy({ x0, y0, dx, dy }) {
        this._Ixy += (x0 * (x0 * (y0 + dy / 2) + dx * (y0 + 2 * dy / 3)) + dx ** 2 * (y0 / 3 + dy / 4)) * dy / 2;
    }
    calculateXg() {
        this._Xg = this._Sy / this._A;
    }
    calculateYg() {
        this._Yg = this._Sx / this._A;
    }
    calculateIxg() {
        this._Ixg = this._Ix - this._Yg ** 2 * this._A;
    }
    calculateIyg() {
        this._Iyg = this._Iy - this._Xg ** 2 * this._A;
    }
    calculateIxyg() {
        this._Ixyg = this._Ixy - this._Xg * this._Yg * this._A;
    }
    calculateY1() {
        this._Y1 = Math.abs(this._Yg - this._Ymin);
    }
    calculateY2() {
        this._Y2 = Math.abs(this._Ymax - this._Yg);
    }
    calculateW1() {
        this._W1 = this._Ixg / this._Y1;
    }
    calculateW2() {
        this._W2 = this._Ixg / this._Y2;
    }
    calculateHeight() {
        this._height = Math.abs(this._Ymax - this._Ymin);
    }
    calculateBase() {
        this._base = Math.abs(this._Xmax - this._Xmin);
    }
    calculateXMax(arrPositionx) {
        if (this._Xmax === undefined || arrPositionx >= this._Xmax) {
            this._Xmax = arrPositionx;
        }
    }
    calculateXMin(arrPositionx) {
        if (this._Xmin === undefined || arrPositionx <= this._Xmin) {
            this._Xmin = arrPositionx;
        }
    }
    calculateYMax(arrPositiony) {
        if (this._Ymax === undefined || arrPositiony >= this._Ymax) {
            this._Ymax = arrPositiony;
        }
    }
    calculateYMin(arrPositiony) {
        if (this._Ymin === undefined || arrPositiony <= this._Ymin) {
            this._Ymin = arrPositiony;
        }
    }
    sumSignCorrection() {
        this._Y1 *= -1;
        this._W1 *= -1;
    }
    get A() {
        return this._A;
    }
    get Sx() {
        return this._Sx;
    }
    get Sy() {
        return this._Sy;
    }
    get Ix() {
        return this._Ix;
    }
    get Iy() {
        return this._Iy;
    }
    get Ixy() {
        return this._Ixy;
    }
    get Xmax() {
        return this._Xmax;
    }
    get Xmin() {
        return this._Xmin;
    }
    get Ymax() {
        return this._Ymax;
    }
    get Ymin() {
        return this._Ymin;
    }
    get Xg() {
        return this._Xg;
    }
    get Yg() {
        return this._Yg;
    }
    get Ixg() {
        return this._Ixg;
    }
    get Iyg() {
        return this._Iyg;
    }
    get Ixyg() {
        return this._Ixyg;
    }
    get Y1() {
        return this._Y1;
    }
    get Y2() {
        return this._Y2;
    }
    get W1() {
        return this._W1;
    }
    get W2() {
        return this._W2;
    }
    get height() {
        return this._height;
    }
    get base() {
        return this._base;
    }
}
export default GeometricProps;
//# sourceMappingURL=GeometricProps.js.map