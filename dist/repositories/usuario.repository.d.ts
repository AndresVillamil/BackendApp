import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongobdDataSource } from '../datasources';
import { Usuario, UsuarioRelations, Roles } from '../models';
import { RolesRepository } from './roles.repository';
export declare class UsuarioRepository extends DefaultCrudRepository<Usuario, typeof Usuario.prototype.id, UsuarioRelations> {
    protected rolesRepositoryGetter: Getter<RolesRepository>;
    readonly usuarioRoles: BelongsToAccessor<Roles, typeof Usuario.prototype.id>;
    constructor(dataSource: MongobdDataSource, rolesRepositoryGetter: Getter<RolesRepository>);
}
