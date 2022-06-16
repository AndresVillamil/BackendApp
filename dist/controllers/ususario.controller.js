"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsusarioController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const llaves_1 = require("../config/llaves");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services"); //Se requiere importar
const fetch = require("node-fetch");
//Inicializar un objeto para poder llamar un método
let UsusarioController = class UsusarioController {
    constructor(usuarioRepository, servicioAutenticacion) {
        this.usuarioRepository = usuarioRepository;
        this.servicioAutenticacion = servicioAutenticacion;
    }
    async identificarUsusario(credenciales) {
        let u = await this.servicioAutenticacion.IdentificarUsusario(credenciales.usuario, credenciales.clave);
        if (u) {
            let token = this.servicioAutenticacion.GenerarTokenJWT(u);
            return {
                datos: {
                    nombre: u.nombres,
                    correo: u.correo,
                    id: u.id
                },
                tk: token
            };
        }
        else {
            throw new rest_1.HttpErrors[401]("Datos inválidos");
        }
    }
    async create(usuario) {
        //Llega con los datos creados
        let clave = this.servicioAutenticacion.GenerarClave();
        let claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
        usuario.clave = claveCifrada;
        //Enviar notificacion de Ususario y Clave
        let u = await this.usuarioRepository.create(usuario);
        //Consumir servicio de notificación
        //Variables envio de dates
        let destino = usuario.correo;
        let asunto = "Registro OnLineStore";
        let mensaje = `Hola ${usuario.nombres}, su nombre de ususario es: ${usuario.correo}
    y su contraseña asignada es: ${clave}`;
        fetch(`${llaves_1.Llaves.urlServiciosNotificaciones}/envio-correo?correo_destino=${destino}&asunto=${asunto}&contenido=${mensaje}`)
            .then((data) => {
            console.log(data);
        });
        return u;
    }
    async count(where) {
        return this.usuarioRepository.count(where);
    }
    async find(filter) {
        return this.usuarioRepository.find(filter);
    }
    async updateAll(usuario, where) {
        return this.usuarioRepository.updateAll(usuario, where);
    }
    async findById(id, filter) {
        return this.usuarioRepository.findById(id, filter);
    }
    async updateById(id, usuario) {
        await this.usuarioRepository.updateById(id, usuario);
    }
    async replaceById(id, usuario) {
        await this.usuarioRepository.replaceById(id, usuario);
    }
    async deleteById(id) {
        await this.usuarioRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/identificarUsuario', {
        responses: {
            '200': {
                description: 'Identificación de usuarios'
            }
        }
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Credenciales]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsusarioController.prototype, "identificarUsusario", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsusarioController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Usuario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Usuario)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsusarioController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Usuario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Usuario)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsusarioController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Usuario)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Usuario, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsusarioController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Usuario, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsusarioController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Usuario]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsusarioController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Usuario]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsusarioController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsusarioController.prototype, "deleteById", null);
UsusarioController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    (0, tslib_1.__param)(1, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsuarioRepository,
        services_1.AutenticacionService])
], UsusarioController);
exports.UsusarioController = UsusarioController;
//# sourceMappingURL=ususario.controller.js.map