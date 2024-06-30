import GeometricProps from './GeometricProps.js';
export { default } from './GeometricProps.js';
export * from './interfaces/IGeometricProps.js';
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    const IGeometricProps = require('./interfaces/IGeometricProps.js');
    module.exports = Object.assign({ GeometricProps }, IGeometricProps);
}
//# sourceMappingURL=index.js.map