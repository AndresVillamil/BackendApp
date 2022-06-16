"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UsuarioRepository = class UsuarioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, rolesRepositoryGetter) {
        super(models_1.Usuario, dataSource);
        this.rolesRepositoryGetter = rolesRepositoryGetter;
        this.usuarioRoles = this.createBelongsToAccessorFor('usuarioRoles', rolesRepositoryGetter);
        this.registerInclusionResolver('usuarioRoles', this.usuarioRoles.inclusionResolver);
    }
};
UsuarioRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongobd')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('RolesRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongobdDataSource, Function])
], UsuarioRepository);
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map