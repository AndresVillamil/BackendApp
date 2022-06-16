import { DefaultCrudRepository } from '@loopback/repository';
import { MongobdDataSource } from '../datasources';
import { Pedido, PedidoRelations } from '../models';
export declare class PedidoRepository extends DefaultCrudRepository<Pedido, typeof Pedido.prototype.id, PedidoRelations> {
    constructor(dataSource: MongobdDataSource);
}
