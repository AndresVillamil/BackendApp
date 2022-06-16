import { DefaultCrudRepository } from '@loopback/repository';
import { MongobdDataSource } from '../datasources';
import { Carrito, CarritoRelations } from '../models';
export declare class CarritoRepository extends DefaultCrudRepository<Carrito, typeof Carrito.prototype.id, CarritoRelations> {
    constructor(dataSource: MongobdDataSource);
}
