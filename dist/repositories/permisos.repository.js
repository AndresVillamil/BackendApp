"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermisosRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PermisosRepository = class PermisosRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Permisos, dataSource);
    }
};
PermisosRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongobd')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongobdDataSource])
], PermisosRepository);
exports.PermisosRepository = PermisosRepository;
//# sourceMappingURL=permisos.repository.js.map