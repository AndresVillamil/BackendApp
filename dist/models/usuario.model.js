"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const roles_model_1 = require("./roles.model");
let Usuario = class Usuario extends repository_1.Entity {
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
], Usuario.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Usuario.prototype, "nombres", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Usuario.prototype, "apellidos", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Usuario.prototype, "direccion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Usuario.prototype, "celular", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Usuario.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Usuario.prototype, "clave", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => roles_model_1.Roles, { name: 'usuarioRoles' }),
    (0, tslib_1.__metadata)("design:type", String)
], Usuario.prototype, "rolesId", void 0);
Usuario = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.model.js.map