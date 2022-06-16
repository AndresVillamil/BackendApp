import { DefaultCrudRepository } from '@loopback/repository';
import { MongobdDataSource } from '../datasources';
import { Permisos, PermisosRelations } from '../models';
export declare class PermisosRepository extends DefaultCrudRepository<Permisos, typeof Permisos.prototype.id, PermisosRelations> {
    constructor(dataSource: MongobdDataSource);
}
