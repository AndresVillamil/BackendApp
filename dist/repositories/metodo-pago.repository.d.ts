import { DefaultCrudRepository } from '@loopback/repository';
import { MongobdDataSource } from '../datasources';
import { MetodoPago, MetodoPagoRelations } from '../models';
export declare class MetodoPagoRepository extends DefaultCrudRepository<MetodoPago, typeof MetodoPago.prototype.id, MetodoPagoRelations> {
    constructor(dataSource: MongobdDataSource);
}
