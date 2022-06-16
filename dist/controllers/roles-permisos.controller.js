"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesPermisosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RolesPermisosController = class RolesPermisosController {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    async find(id, filter) {
        return this.rolesRepository.rolesPermisos(id).find(filter);
    }
    async create(id, permisos) {
        return this.rolesRepository.rolesPermisos(id).create(permisos);
    }
    async patch(id, permisos, where) {
        return this.rolesRepository.rolesPermisos(id).patch(permisos, where);
    }
    async delete(id, where) {
        return this.rolesRepository.rolesPermisos(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/roles/{id}/permisos', {
        responses: {
            '200': {
                description: 'Array of Roles has many Permisos',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Permisos) },
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
], RolesPermisosController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/roles/{id}/permisos', {
        responses: {
            '200': {
                description: 'Roles model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Permisos) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Permisos, {
                    title: 'NewPermisosInRoles',
                    exclude: ['id'],
                    optional: ['rolesId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolesPermisosController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/roles/{id}/permisos', {
        responses: {
            '200': {
                description: 'Roles.Permisos PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Permisos, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Permisos))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolesPermisosController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/roles/{id}/permisos', {
        responses: {
            '200': {
                description: 'Roles.Permisos DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Permisos))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolesPermisosController.prototype, "delete", null);
RolesPermisosController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.RolesRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.RolesRepository])
], RolesPermisosController);
exports.RolesPermisosController = RolesPermisosController;
//# sourceMappingURL=roles-permisos.controller.js.map