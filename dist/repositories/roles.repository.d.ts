import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongobdDataSource } from '../datasources';
import { Roles, RolesRelations, Permisos } from '../models';
import { PermisosRepository } from './permisos.repository';
export declare class RolesRepository extends DefaultCrudRepository<Roles, typeof Roles.prototype.id, RolesRelations> {
    protected permisosRepositoryGetter: Getter<PermisosRepository>;
    readonly rolesPermisos: HasManyRepositoryFactory<Permisos, typeof Roles.prototype.id>;
    constructor(dataSource: MongobdDataSource, permisosRepositoryGetter: Getter<PermisosRepository>);
}
