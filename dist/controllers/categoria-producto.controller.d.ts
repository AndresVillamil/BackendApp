import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { CategoriaProducto } from '../models';
import { CategoriaProductoRepository } from '../repositories';
export declare class CategoriaProductoController {
    categoriaProductoRepository: CategoriaProductoRepository;
    constructor(categoriaProductoRepository: CategoriaProductoRepository);
    create(categoriaProducto: Omit<CategoriaProducto, 'id'>): Promise<CategoriaProducto>;
    count(where?: Where<CategoriaProducto>): Promise<Count>;
    find(filter?: Filter<CategoriaProducto>): Promise<CategoriaProducto[]>;
    updateAll(categoriaProducto: CategoriaProducto, where?: Where<CategoriaProducto>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<CategoriaProducto>): Promise<CategoriaProducto>;
    updateById(id: string, categoriaProducto: CategoriaProducto): Promise<void>;
    replaceById(id: string, categoriaProducto: CategoriaProducto): Promise<void>;
    deleteById(id: string): Promise<void>;
}
