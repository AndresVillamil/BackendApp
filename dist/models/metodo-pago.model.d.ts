import { Entity } from '@loopback/repository';
export declare class MetodoPago extends Entity {
    id?: string;
    nombre: string;
    descripcion: string;
    constructor(data?: Partial<MetodoPago>);
}
export interface MetodoPagoRelations {
}
export declare type MetodoPagoWithRelations = MetodoPago & MetodoPagoRelations;
