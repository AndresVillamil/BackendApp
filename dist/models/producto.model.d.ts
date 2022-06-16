import { Entity } from '@loopback/repository';
import { Carrito } from './carrito.model';
export declare class Producto extends Entity {
    id?: string;
    nombreProducto: string;
    descripcionProducto: string;
    imagen: string;
    precio: number;
    existencia: number;
    idCategoria: string;
    categoriaProductoId?: string;
    productoCarrito: Carrito[];
    metodoPagoId: string;
    [prop: string]: any;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
