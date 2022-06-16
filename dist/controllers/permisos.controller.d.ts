import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Permisos } from '../models';
import { PermisosRepository } from '../repositories';
export declare class PermisosController {
    permisosRepository: PermisosRepository;
    constructor(permisosRepository: PermisosRepository);
    create(permisos: Omit<Permisos, 'id'>): Promise<Permisos>;
    count(where?: Where<Permisos>): Promise<Count>;
    find(filter?: Filter<Permisos>): Promise<Permisos[]>;
    updateAll(permisos: Permisos, where?: Where<Permisos>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Permisos>): Promise<Permisos>;
    updateById(id: string, permisos: Permisos): Promise<void>;
    replaceById(id: string, permisos: Permisos): Promise<void>;
    deleteById(id: string): Promise<void>;
}
