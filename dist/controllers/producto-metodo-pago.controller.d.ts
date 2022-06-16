import { Producto, MetodoPago } from '../models';
import { ProductoRepository } from '../repositories';
export declare class ProductoMetodoPagoController {
    productoRepository: ProductoRepository;
    constructor(productoRepository: ProductoRepository);
    getMetodoPago(id: typeof Producto.prototype.id): Promise<MetodoPago>;
}
