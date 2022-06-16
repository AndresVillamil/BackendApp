"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRolesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsuarioRolesController = class UsuarioRolesController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async getRoles(id) {
        return this.usuarioRepository.usuarioRoles(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios/{id}/roles', {
        responses: {
            '200': {
                description: 'Roles belonging to Usuario',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Roles) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioRolesController.prototype, "getRoles", null);
UsuarioRolesController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsuarioRepository])
], UsuarioRolesController);
exports.UsuarioRolesController = UsuarioRolesController;
//# sourceMappingURL=usuario-roles.controller.js.map