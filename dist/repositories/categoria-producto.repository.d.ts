import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongobdDataSource } from '../datasources';
import { CategoriaProducto, CategoriaProductoRelations, Producto } from '../models';
import { ProductoRepository } from './producto.repository';
export declare class CategoriaProductoRepository extends DefaultCrudRepository<CategoriaProducto, typeof CategoriaProducto.prototype.id, CategoriaProductoRelations> {
    protected productoRepositoryGetter: Getter<ProductoRepository>;
    readonly categoriaProducto: HasManyRepositoryFactory<Producto, typeof CategoriaProducto.prototype.id>;
    constructor(dataSource: MongobdDataSource, productoRepositoryGetter: Getter<ProductoRepository>);
}
