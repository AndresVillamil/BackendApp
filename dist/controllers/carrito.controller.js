"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarritoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CarritoController = class CarritoController {
    constructor(carritoRepository) {
        this.carritoRepository = carritoRepository;
    }
    async create(carrito) {
        return this.carritoRepository.create(carrito);
    }
    async count(where) {
        return this.carritoRepository.count(where);
    }
    async find(filter) {
        return this.carritoRepository.find(filter);
    }
    async updateAll(carrito, where) {
        return this.carritoRepository.updateAll(carrito, where);
    }
    async findById(id, filter) {
        return this.carritoRepository.findById(id, filter);
    }
    async updateById(id, carrito) {
        await this.carritoRepository.updateById(id, carrito);
    }
    async replaceById(id, carrito) {
        await this.carritoRepository.replaceById(id, carrito);
    }
    async deleteById(id) {
        await this.carritoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/carritos'),
    (0, rest_1.response)(200, {
        description: 'Carrito model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Carrito) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Carrito, {
                    title: 'NewCarrito',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CarritoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/carritos/count'),
    (0, rest_1.response)(200, {
        description: 'Carrito model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Carrito)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CarritoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/carritos'),
    (0, rest_1.response)(200, {
        description: 'Array of Carrito model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Carrito, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Carrito)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CarritoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/carritos'),
    (0, rest_1.response)(200, {
        description: 'Carrito PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Carrito, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Carrito)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Carrito, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CarritoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/carritos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Carrito model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Carrito, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Carrito, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CarritoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/carritos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Carrito PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Carrito, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Carrito]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CarritoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/carritos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Carrito PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Carrito]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CarritoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/carritos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Carrito DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CarritoController.prototype, "deleteById", null);
CarritoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.CarritoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.CarritoRepository])
], CarritoController);
exports.CarritoController = CarritoController;
//# sourceMappingURL=carrito.controller.js.map