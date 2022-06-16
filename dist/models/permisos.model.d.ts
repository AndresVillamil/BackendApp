import { Entity } from '@loopback/repository';
export declare class Permisos extends Entity {
    id?: string;
    nombre: string;
    descripcion: string;
    rolesId: string;
    constructor(data?: Partial<Permisos>);
}
export interface PermisosRelations {
}
export declare type PermisosWithRelations = Permisos & PermisosRelations;
