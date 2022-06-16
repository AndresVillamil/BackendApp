import { Usuario, Roles } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class UsuarioRolesController {
    usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    getRoles(id: typeof Usuario.prototype.id): Promise<Roles>;
}
