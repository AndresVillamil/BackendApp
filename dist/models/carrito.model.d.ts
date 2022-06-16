import { Entity } from '@loopback/repository';
export declare class Carrito extends Entity {
    id?: string;
    idProducto: string;
    fechaSolicitud: string;
    cantidad: number;
    total: number;
    productoId?: string;
    constructor(data?: Partial<Carrito>);
}
export interface CarritoRelations {
}
export declare type CarritoWithRelations = Carrito & CarritoRelations;
