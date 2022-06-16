"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaProductoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CategoriaProductoController = class CategoriaProductoController {
    constructor(categoriaProductoRepository) {
        this.categoriaProductoRepository = categoriaProductoRepository;
    }
    async create(categoriaProducto) {
        return this.categoriaProductoRepository.create(categoriaProducto);
    }
    async count(where) {
        return this.categoriaProductoRepository.count(where);
    }
    async find(filter) {
        return this.categoriaProductoRepository.find(filter);
    }
    async updateAll(categoriaProducto, where) {
        return this.categoriaProductoRepository.updateAll(categoriaProducto, where);
    }
    async findById(id, filter) {
        return this.categoriaProductoRepository.findById(id, filter);
    }
    async updateById(id, categoriaProducto) {
        await this.categoriaProductoRepository.updateById(id, categoriaProducto);
    }
    async replaceById(id, categoriaProducto) {
        await this.categoriaProductoRepository.replaceById(id, categoriaProducto);
    }
    async deleteById(id) {
        await this.categoriaProductoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/categoria-productos'),
    (0, rest_1.response)(200, {
        description: 'CategoriaProducto model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.CategoriaProducto) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CategoriaProducto, {
                    title: 'NewCategoriaProducto',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/categoria-productos/count'),
    (0, rest_1.response)(200, {
        description: 'CategoriaProducto model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.CategoriaProducto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/categoria-productos'),
    (0, rest_1.response)(200, {
        description: 'Array of CategoriaProducto model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.CategoriaProducto, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.CategoriaProducto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/categoria-productos'),
    (0, rest_1.response)(200, {
        description: 'CategoriaProducto PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CategoriaProducto, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.CategoriaProducto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.CategoriaProducto, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/categoria-productos/{id}'),
    (0, rest_1.response)(200, {
        description: 'CategoriaProducto model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CategoriaProducto, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.CategoriaProducto, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/categoria-productos/{id}'),
    (0, rest_1.response)(204, {
        description: 'CategoriaProducto PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CategoriaProducto, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.CategoriaProducto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/categoria-productos/{id}'),
    (0, rest_1.response)(204, {
        description: 'CategoriaProducto PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.CategoriaProducto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/categoria-productos/{id}'),
    (0, rest_1.response)(204, {
        description: 'CategoriaProducto DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CategoriaProductoController.prototype, "deleteById", null);
CategoriaProductoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.CategoriaProductoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.CategoriaProductoRepository])
], CategoriaProductoController);
exports.CategoriaProductoController = CategoriaProductoController;
//# sourceMappingURL=categoria-producto.controller.js.map