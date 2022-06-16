"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetodopagoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MetodopagoController = class MetodopagoController {
    constructor(metodoPagoRepository) {
        this.metodoPagoRepository = metodoPagoRepository;
    }
    async create(metodoPago) {
        return this.metodoPagoRepository.create(metodoPago);
    }
    async count(where) {
        return this.metodoPagoRepository.count(where);
    }
    async find(filter) {
        return this.metodoPagoRepository.find(filter);
    }
    async updateAll(metodoPago, where) {
        return this.metodoPagoRepository.updateAll(metodoPago, where);
    }
    async findById(id, filter) {
        return this.metodoPagoRepository.findById(id, filter);
    }
    async updateById(id, metodoPago) {
        await this.metodoPagoRepository.updateById(id, metodoPago);
    }
    async replaceById(id, metodoPago) {
        await this.metodoPagoRepository.replaceById(id, metodoPago);
    }
    async deleteById(id) {
        await this.metodoPagoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/metodo-pagos'),
    (0, rest_1.response)(200, {
        description: 'MetodoPago model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.MetodoPago) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.MetodoPago, {
                    title: 'NewMetodoPago',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MetodopagoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/metodo-pagos/count'),
    (0, rest_1.response)(200, {
        description: 'MetodoPago model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.MetodoPago)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MetodopagoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/metodo-pagos'),
    (0, rest_1.response)(200, {
        description: 'Array of MetodoPago model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.MetodoPago, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.MetodoPago)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MetodopagoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/metodo-pagos'),
    (0, rest_1.response)(200, {
        description: 'MetodoPago PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.MetodoPago, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.MetodoPago)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.MetodoPago, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MetodopagoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/metodo-pagos/{id}'),
    (0, rest_1.response)(200, {
        description: 'MetodoPago model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.MetodoPago, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.MetodoPago, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MetodopagoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/metodo-pagos/{id}'),
    (0, rest_1.response)(204, {
        description: 'MetodoPago PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.MetodoPago, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.MetodoPago]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MetodopagoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/metodo-pagos/{id}'),
    (0, rest_1.response)(204, {
        description: 'MetodoPago PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.MetodoPago]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MetodopagoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/metodo-pagos/{id}'),
    (0, rest_1.response)(204, {
        description: 'MetodoPago DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MetodopagoController.prototype, "deleteById", null);
MetodopagoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.MetodoPagoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.MetodoPagoRepository])
], MetodopagoController);
exports.MetodopagoController = MetodopagoController;
//# sourceMappingURL=metodopago.controller.js.map