"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const permisos_model_1 = require("./permisos.model");
let Roles = class Roles extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Roles.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Roles.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Roles.prototype, "idUsusario", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Roles.prototype, "idPermiso", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => permisos_model_1.Permisos),
    (0, tslib_1.__metadata)("design:type", Array)
], Roles.prototype, "rolesPermisos", void 0);
Roles = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.model.js.map