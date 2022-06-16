import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Carrito } from '../models';
import { CarritoRepository } from '../repositories';
export declare class CarritoController {
    carritoRepository: CarritoRepository;
    constructor(carritoRepository: CarritoRepository);
    create(carrito: Omit<Carrito, 'id'>): Promise<Carrito>;
    count(where?: Where<Carrito>): Promise<Count>;
    find(filter?: Filter<Carrito>): Promise<Carrito[]>;
    updateAll(carrito: Carrito, where?: Where<Carrito>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Carrito>): Promise<Carrito>;
    updateById(id: string, carrito: Carrito): Promise<void>;
    replaceById(id: string, carrito: Carrito): Promise<void>;
    deleteById(id: string): Promise<void>;
}
