import { Count, Filter, Where } from '@loopback/repository';
import { CategoriaProducto, Producto } from '../models';
import { CategoriaProductoRepository } from '../repositories';
export declare class CategoriaProductoProductoController {
    protected categoriaProductoRepository: CategoriaProductoRepository;
    constructor(categoriaProductoRepository: CategoriaProductoRepository);
    find(id: string, filter?: Filter<Producto>): Promise<Producto[]>;
    create(id: typeof CategoriaProducto.prototype.id, producto: Omit<Producto, 'id'>): Promise<Producto>;
    patch(id: string, producto: Partial<Producto>, where?: Where<Producto>): Promise<Count>;
    delete(id: string, where?: Where<Producto>): Promise<Count>;
}
