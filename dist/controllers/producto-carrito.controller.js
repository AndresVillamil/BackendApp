"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoCarritoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductoCarritoController = class ProductoCarritoController {
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async find(id, filter) {
        return this.productoRepository.productoCarrito(id).find(filter);
    }
    async create(id, carrito) {
        return this.productoRepository.productoCarrito(id).create(carrito);
    }
    async patch(id, carrito, where) {
        return this.productoRepository.productoCarrito(id).patch(carrito, where);
    }
    async delete(id, where) {
        return this.productoRepository.productoCarrito(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productos/{id}/carritos', {
        responses: {
            '200': {
                description: 'Array of Producto has many Carrito',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Carrito) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCarritoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/productos/{id}/carritos', {
        responses: {
            '200': {
                description: 'Producto model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Carrito) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Carrito, {
                    title: 'NewCarritoInProducto',
                    exclude: ['id'],
                    optional: ['productoId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCarritoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/productos/{id}/carritos', {
        responses: {
            '200': {
                description: 'Producto.Carrito PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Carrito, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Carrito))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCarritoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/productos/{id}/carritos', {
        responses: {
            '200': {
                description: 'Producto.Carrito DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Carrito))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCarritoController.prototype, "delete", null);
ProductoCarritoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProductoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProductoRepository])
], ProductoCarritoController);
exports.ProductoCarritoController = ProductoCarritoController;
//# sourceMappingURL=producto-carrito.controller.js.map