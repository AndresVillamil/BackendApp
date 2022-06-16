import { Entity } from '@loopback/repository';
export declare class Usuario extends Entity {
    id?: string;
    nombres: string;
    apellidos: string;
    direccion: string;
    celular: string;
    correo: string;
    clave: string;
    rolesId: string;
    constructor(data?: Partial<Usuario>);
}
export interface UsuarioRelations {
}
export declare type UsuarioWithRelations = Usuario & UsuarioRelations;
