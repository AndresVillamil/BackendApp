"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermisosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PermisosController = class PermisosController {
    constructor(permisosRepository) {
        this.permisosRepository = permisosRepository;
    }
    async create(permisos) {
        return this.permisosRepository.create(permisos);
    }
    async count(where) {
        return this.permisosRepository.count(where);
    }
    async find(filter) {
        return this.permisosRepository.find(filter);
    }
    async updateAll(permisos, where) {
        return this.permisosRepository.updateAll(permisos, where);
    }
    async findById(id, filter) {
        return this.permisosRepository.findById(id, filter);
    }
    async updateById(id, permisos) {
        await this.permisosRepository.updateById(id, permisos);
    }
    async replaceById(id, permisos) {
        await this.permisosRepository.replaceById(id, permisos);
    }
    async deleteById(id) {
        await this.permisosRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/permisos'),
    (0, rest_1.response)(200, {
        description: 'Permisos model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Permisos) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Permisos, {
                    title: 'NewPermisos',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PermisosController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/permisos/count'),
    (0, rest_1.response)(200, {
        description: 'Permisos model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Permisos)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PermisosController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/permisos'),
    (0, rest_1.response)(200, {
        description: 'Array of Permisos model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Permisos, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Permisos)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PermisosController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/permisos'),
    (0, rest_1.response)(200, {
        description: 'Permisos PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Permisos, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Permisos)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Permisos, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PermisosController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/permisos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Permisos model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Permisos, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Permisos, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PermisosController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/permisos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Permisos PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Permisos, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Permisos]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PermisosController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/permisos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Permisos PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Permisos]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PermisosController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/permisos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Permisos DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PermisosController.prototype, "deleteById", null);
PermisosController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PermisosRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PermisosRepository])
], PermisosController);
exports.PermisosController = PermisosController;
//# sourceMappingURL=permisos.controller.js.map