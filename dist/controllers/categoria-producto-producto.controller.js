"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaProductoProductoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CategoriaProductoProductoController = class CategoriaProductoProductoController {
    constructor(categoriaProductoRepository) {
        this.categoriaProductoRepository = categoriaProductoRepository;
    }
    async find(id, filter) {
        return this.categoriaProductoRepository.categoriaProducto(id).find(filter);
    }
    async create(id, producto) {
        return this.categoriaProductoRepository.categoriaProducto(id).create(producto);
    }
    async patch(id, producto, where) {
        return this.categoriaProductoRepository.categoriaProducto(id).patch(producto, where);
    }
    async delete(id, where) {
        return this.categoriaProductoRepository.categoriaProducto(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/categoria-productos/{id}/productos', {
        responses: {
            '200': {
                description: 'Array of CategoriaProducto has many Producto',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Producto) },
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
], CategoriaProductoProductoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/categoria-productos/{id}/productos', {
        responses: {
            '200': {
                description: 'CategoriaProducto model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Producto) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, {
                    title: 'NewProductoInCategoriaProducto',
                    exclude: ['id'],
                    optional: ['categoriaProductoId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoProductoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/categoria-productos/{id}/productos', {
        responses: {
            '200': {
                description: 'CategoriaProducto.Producto PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Producto))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoProductoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/categoria-productos/{id}/productos', {
        responses: {
            '200': {
                description: 'CategoriaProducto.Producto DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Producto))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoProductoController.prototype, "delete", null);
CategoriaProductoProductoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.CategoriaProductoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.CategoriaProductoRepository])
], CategoriaProductoProductoController);
exports.CategoriaProductoProductoController = CategoriaProductoProductoController;
//# sourceMappingURL=categoria-producto-producto.controller.js.map