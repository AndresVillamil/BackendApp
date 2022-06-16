"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ProductoRepository = class ProductoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, carritoRepositoryGetter, metodoPagoRepositoryGetter) {
        super(models_1.Producto, dataSource);
        this.carritoRepositoryGetter = carritoRepositoryGetter;
        this.metodoPagoRepositoryGetter = metodoPagoRepositoryGetter;
        this.productoMetodopago = this.createBelongsToAccessorFor('productoMetodopago', metodoPagoRepositoryGetter);
        this.registerInclusionResolver('productoMetodopago', this.productoMetodopago.inclusionResolver);
        this.productoCarrito = this.createHasManyRepositoryFactoryFor('productoCarrito', carritoRepositoryGetter);
        this.registerInclusionResolver('productoCarrito', this.productoCarrito.inclusionResolver);
    }
};
ProductoRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongobd')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('CarritoRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('MetodoPagoRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongobdDataSource, Function, Function])
], ProductoRepository);
exports.ProductoRepository = ProductoRepository;
//# sourceMappingURL=producto.repository.js.map