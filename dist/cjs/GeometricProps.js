"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeometricProps = void 0;
var GeometricProps = /** @class */ (function () {
    function GeometricProps(vector) {
        this._A = 0;
        this._Sx = 0;
        this._Sy = 0;
        this._Ix = 0;
        this._Iy = 0;
        this._Ixy = 0;
        for (var i = 0; i < vector.length - 1; i++) {
            var _a = [vector[i].x, vector[i + 1].x, vector[i].y, vector[i + 1].y], x0 = _a[0], x1 = _a[1], y0 = _a[2], y1 = _a[3];
            var greenTheoremLine = {
                x0: x0,
                x1: x1,
                y0: y0,
                y1: y1,
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
        for (var j = 0; j < vector.length; j++) {
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
    GeometricProps.prototype.calculateArea = function (_a) {
        var x0 = _a.x0, dx = _a.dx, dy = _a.dy;
        this._A += (x0 + dx / 2) * dy;
    };
    GeometricProps.prototype.calculateSx = function (_a) {
        var x0 = _a.x0, y0 = _a.y0, dx = _a.dx, dy = _a.dy;
        this._Sx += (x0 * (y0 + dy / 2) + dx * (y0 / 2 + dy / 3)) * dy;
    };
    GeometricProps.prototype.calculateSy = function (_a) {
        var x0 = _a.x0, dx = _a.dx, dy = _a.dy;
        this._Sy += (x0 * (x0 + dx) + Math.pow(dx, 2) / 3) * dy / 2;
    };
    GeometricProps.prototype.calculateIx = function (_a) {
        var x0 = _a.x0, y0 = _a.y0, dx = _a.dx, dy = _a.dy;
        this._Ix += (x0 * (y0 * (dy + y0) + Math.pow(dy, 2) / 3) + dx * (y0 * (y0 / 2 + 2 * dy / 3) + Math.pow(dy, 2) / 4)) * dy;
    };
    GeometricProps.prototype.calculateIy = function (_a) {
        var x0 = _a.x0, dx = _a.dx, dy = _a.dy;
        this._Iy += (Math.pow(dx, 3) / 4 + x0 * (Math.pow(dx, 2) + x0 * (3 * dx / 2 + x0))) * dy / 3;
    };
    GeometricProps.prototype.calculateIxy = function (_a) {
        var x0 = _a.x0, y0 = _a.y0, dx = _a.dx, dy = _a.dy;
        this._Ixy += (x0 * (x0 * (y0 + dy / 2) + dx * (y0 + 2 * dy / 3)) + Math.pow(dx, 2) * (y0 / 3 + dy / 4)) * dy / 2;
    };
    GeometricProps.prototype.calculateXg = function () {
        this._Xg = this._Sy / this._A;
    };
    GeometricProps.prototype.calculateYg = function () {
        this._Yg = this._Sx / this._A;
    };
    GeometricProps.prototype.calculateIxg = function () {
        this._Ixg = this._Ix - Math.pow(this._Yg, 2) * this._A;
    };
    GeometricProps.prototype.calculateIyg = function () {
        this._Iyg = this._Iy - Math.pow(this._Xg, 2) * this._A;
    };
    GeometricProps.prototype.calculateIxyg = function () {
        this._Ixyg = this._Ixy - this._Xg * this._Yg * this._A;
    };
    GeometricProps.prototype.calculateY1 = function () {
        this._Y1 = Math.abs(this._Yg - this._Ymin);
    };
    GeometricProps.prototype.calculateY2 = function () {
        this._Y2 = Math.abs(this._Ymax - this._Yg);
    };
    GeometricProps.prototype.calculateW1 = function () {
        this._W1 = this._Ixg / this._Y1;
    };
    GeometricProps.prototype.calculateW2 = function () {
        this._W2 = this._Ixg / this._Y2;
    };
    GeometricProps.prototype.calculateHeight = function () {
        this._height = Math.abs(this._Ymax - this._Ymin);
    };
    GeometricProps.prototype.calculateBase = function () {
        this._base = Math.abs(this._Xmax - this._Xmin);
    };
    GeometricProps.prototype.calculateXMax = function (arrPositionx) {
        if (this._Xmax === undefined || arrPositionx >= this._Xmax) {
            this._Xmax = arrPositionx;
        }
    };
    GeometricProps.prototype.calculateXMin = function (arrPositionx) {
        if (this._Xmin === undefined || arrPositionx <= this._Xmin) {
            this._Xmin = arrPositionx;
        }
    };
    GeometricProps.prototype.calculateYMax = function (arrPositiony) {
        if (this._Ymax === undefined || arrPositiony >= this._Ymax) {
            this._Ymax = arrPositiony;
        }
    };
    GeometricProps.prototype.calculateYMin = function (arrPositiony) {
        if (this._Ymin === undefined || arrPositiony <= this._Ymin) {
            this._Ymin = arrPositiony;
        }
    };
    GeometricProps.prototype.sumSignCorrection = function () {
        this._Y1 *= -1;
        this._W1 *= -1;
    };
    Object.defineProperty(GeometricProps.prototype, "A", {
        get: function () {
            return this._A;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Sx", {
        get: function () {
            return this._Sx;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Sy", {
        get: function () {
            return this._Sy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Ix", {
        get: function () {
            return this._Ix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Iy", {
        get: function () {
            return this._Iy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Ixy", {
        get: function () {
            return this._Ixy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Xmax", {
        get: function () {
            return this._Xmax;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Xmin", {
        get: function () {
            return this._Xmin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Ymax", {
        get: function () {
            return this._Ymax;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Ymin", {
        get: function () {
            return this._Ymin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Xg", {
        get: function () {
            return this._Xg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Yg", {
        get: function () {
            return this._Yg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Ixg", {
        get: function () {
            return this._Ixg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Iyg", {
        get: function () {
            return this._Iyg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Ixyg", {
        get: function () {
            return this._Ixyg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Y1", {
        get: function () {
            return this._Y1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "Y2", {
        get: function () {
            return this._Y2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "W1", {
        get: function () {
            return this._W1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "W2", {
        get: function () {
            return this._W2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricProps.prototype, "base", {
        get: function () {
            return this._base;
        },
        enumerable: false,
        configurable: true
    });
    return GeometricProps;
}());
exports.GeometricProps = GeometricProps;
