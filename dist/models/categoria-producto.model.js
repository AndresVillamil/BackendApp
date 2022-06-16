"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaProducto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const producto_model_1 = require("./producto.model");
let CategoriaProducto = class CategoriaProducto extends repository_1.Entity {
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
], CategoriaProducto.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CategoriaProducto.prototype, "nombreCategoria", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CategoriaProducto.prototype, "descripcionCategoria", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => producto_model_1.Producto),
    (0, tslib_1.__metadata)("design:type", Array)
], CategoriaProducto.prototype, "categoriaProducto", void 0);
CategoriaProducto = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CategoriaProducto);
exports.CategoriaProducto = CategoriaProducto;
//# sourceMappingURL=categoria-producto.model.js.map