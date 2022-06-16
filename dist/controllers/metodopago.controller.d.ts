import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { MetodoPago } from '../models';
import { MetodoPagoRepository } from '../repositories';
export declare class MetodopagoController {
    metodoPagoRepository: MetodoPagoRepository;
    constructor(metodoPagoRepository: MetodoPagoRepository);
    create(metodoPago: Omit<MetodoPago, 'id'>): Promise<MetodoPago>;
    count(where?: Where<MetodoPago>): Promise<Count>;
    find(filter?: Filter<MetodoPago>): Promise<MetodoPago[]>;
    updateAll(metodoPago: MetodoPago, where?: Where<MetodoPago>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<MetodoPago>): Promise<MetodoPago>;
    updateById(id: string, metodoPago: MetodoPago): Promise<void>;
    replaceById(id: string, metodoPago: MetodoPago): Promise<void>;
    deleteById(id: string): Promise<void>;
}
