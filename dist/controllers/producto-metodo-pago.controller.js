"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoMetodoPagoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductoMetodoPagoController = class ProductoMetodoPagoController {
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async getMetodoPago(id) {
        return this.productoRepository.productoMetodopago(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productos/{id}/metodo-pago', {
        responses: {
            '200': {
                description: 'MetodoPago belonging to Producto',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.MetodoPago) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoMetodoPagoController.prototype, "getMetodoPago", null);
ProductoMetodoPagoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProductoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProductoRepository])
], ProductoMetodoPagoController);
exports.ProductoMetodoPagoController = ProductoMetodoPagoController;
//# sourceMappingURL=producto-metodo-pago.controller.js.map