import { Count, Filter, Where } from '@loopback/repository';
import { Producto, Carrito } from '../models';
import { ProductoRepository } from '../repositories';
export declare class ProductoCarritoController {
    protected productoRepository: ProductoRepository;
    constructor(productoRepository: ProductoRepository);
    find(id: string, filter?: Filter<Carrito>): Promise<Carrito[]>;
    create(id: typeof Producto.prototype.id, carrito: Omit<Carrito, 'id'>): Promise<Carrito>;
    patch(id: string, carrito: Partial<Carrito>, where?: Where<Carrito>): Promise<Count>;
    delete(id: string, where?: Where<Carrito>): Promise<Count>;
}
