import { Entity } from '@loopback/repository';
export declare class Pedido extends Entity {
    id?: string;
    idCarrito: string;
    estado: number;
    asesorAsignado: string;
    constructor(data?: Partial<Pedido>);
}
export interface PedidoRelations {
}
export declare type PedidoWithRelations = Pedido & PedidoRelations;
