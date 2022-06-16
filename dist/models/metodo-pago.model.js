"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetodoPago = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let MetodoPago = class MetodoPago extends repository_1.Entity {
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
], MetodoPago.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MetodoPago.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MetodoPago.prototype, "descripcion", void 0);
MetodoPago = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], MetodoPago);
exports.MetodoPago = MetodoPago;
//# sourceMappingURL=metodo-pago.model.js.map