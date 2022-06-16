"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaProductoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let CategoriaProductoRepository = class CategoriaProductoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, productoRepositoryGetter) {
        super(models_1.CategoriaProducto, dataSource);
        this.productoRepositoryGetter = productoRepositoryGetter;
        this.categoriaProducto = this.createHasManyRepositoryFactoryFor('categoriaProducto', productoRepositoryGetter);
        this.registerInclusionResolver('categoriaProducto', this.categoriaProducto.inclusionResolver);
    }
};
CategoriaProductoRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongobd')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('ProductoRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongobdDataSource, Function])
], CategoriaProductoRepository);
exports.CategoriaProductoRepository = CategoriaProductoRepository;
//# sourceMappingURL=categoria-producto.repository.js.map