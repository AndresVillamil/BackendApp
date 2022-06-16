"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const carrito_model_1 = require("./carrito.model");
const metodo_pago_model_1 = require("./metodo-pago.model");
let Producto = class Producto extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "nombreProducto", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "descripcionProducto", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "imagen", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Producto.prototype, "precio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Producto.prototype, "existencia", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "idCategoria", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "categoriaProductoId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => carrito_model_1.Carrito),
    (0, tslib_1.__metadata)("design:type", Array)
], Producto.prototype, "productoCarrito", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => metodo_pago_model_1.MetodoPago, { name: 'productoMetodopago' }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "metodoPagoId", void 0);
Producto = (0, tslib_1.__decorate)([
    (0, repository_1.model)({ settings: { strict: false } }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Producto);
exports.Producto = Producto;
//# sourceMappingURL=producto.model.js.map