import { Entity } from '@loopback/repository';
import { Permisos } from './permisos.model';
export declare class Roles extends Entity {
    id?: string;
    nombre: string;
    idUsusario: string;
    idPermiso: string;
    rolesPermisos: Permisos[];
    constructor(data?: Partial<Roles>);
}
export interface RolesRelations {
}
export declare type RolesWithRelations = Roles & RolesRelations;
