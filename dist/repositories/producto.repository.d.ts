import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { MongobdDataSource } from '../datasources';
import { Producto, ProductoRelations, Carrito, MetodoPago } from '../models';
import { CarritoRepository } from './carrito.repository';
import { MetodoPagoRepository } from './metodo-pago.repository';
export declare class ProductoRepository extends DefaultCrudRepository<Producto, typeof Producto.prototype.id, ProductoRelations> {
    protected carritoRepositoryGetter: Getter<CarritoRepository>;
    protected metodoPagoRepositoryGetter: Getter<MetodoPagoRepository>;
    readonly productoCarrito: HasManyRepositoryFactory<Carrito, typeof Producto.prototype.id>;
    readonly productoMetodopago: BelongsToAccessor<MetodoPago, typeof Producto.prototype.id>;
    constructor(dataSource: MongobdDataSource, carritoRepositoryGetter: Getter<CarritoRepository>, metodoPagoRepositoryGetter: Getter<MetodoPagoRepository>);
}
