import { Count, Filter, Where } from '@loopback/repository';
import { Roles, Permisos } from '../models';
import { RolesRepository } from '../repositories';
export declare class RolesPermisosController {
    protected rolesRepository: RolesRepository;
    constructor(rolesRepository: RolesRepository);
    find(id: string, filter?: Filter<Permisos>): Promise<Permisos[]>;
    create(id: typeof Roles.prototype.id, permisos: Omit<Permisos, 'id'>): Promise<Permisos>;
    patch(id: string, permisos: Partial<Permisos>, where?: Where<Permisos>): Promise<Count>;
    delete(id: string, where?: Where<Permisos>): Promise<Count>;
}
