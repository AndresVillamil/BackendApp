import { Entity } from '@loopback/repository';
import { Producto } from './producto.model';
export declare class CategoriaProducto extends Entity {
    id?: string;
    nombreCategoria: string;
    descripcionCategoria: string;
    categoriaProducto: Producto[];
    constructor(data?: Partial<CategoriaProducto>);
}
export interface CategoriaProductoRelations {
}
export declare type CategoriaProductoWithRelations = CategoriaProducto & CategoriaProductoRelations;
