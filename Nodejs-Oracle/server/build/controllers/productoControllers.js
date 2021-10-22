"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = "SELECT * FROM PRODUCTO";
            var connection = database_1.default.db2();
            yield connection.exec(sql, [], function (result) {
                res.send(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //es destructura en js(obteniendo un parte de un objeto)
            var sql = "SELECT * FROM PRODUCTO WHERE producto_id = :id";
            var connection = database_1.default.db2();
            const pro = yield connection.exec(sql, [id], function (result) {
                if (result.length > 0) {
                    res.send(result);
                }
                else {
                    res.status(404).json({ text: "The temp_ doesn exist" });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var producto_precio = req.body.precio;
            var producto_cantidad_total = req.body.cantidad_total;
            var producto_cantidad_restante = req.body.cantidad_restante;
            var producto_descripcion = req.body.descripcion;
            var producto_imagen = req.body.imagen;
            var producto_codigo = req.body.codigo;
            var producto_usuario = req.body.usuario;
            var producto_nombre = req.body.nombre;
            var sql = `INSERT INTO PRODUCTO(
            producto_nombre,
            producto_precio,
            producto_cantidad_total,
            producto_cantidad_restante,
            producto_descripcion,
            producto_imagen,
            producto_codigo,
            producto_usuario
            ) values (:producto_nombre,
                    :producto_precio,
                    :producto_cantidad_total,
                    :producto_cantidad_restante,
                    :producto_descripcion,
                    :producto_imagen,
                    :producto_codigo,
                    :producto_usuario)`;
            var connection = database_1.default.db2();
            yield connection.exec(sql, [producto_nombre, producto_precio, producto_cantidad_total,
                producto_cantidad_restante,
                producto_descripcion,
                producto_imagen,
                producto_codigo,
                producto_usuario], function (result) {
                res.send(result);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //
            const { id } = req.params;
            var sql = "DELETE FROM PRODUCTO WHERE producto_id = :id";
            var connection = database_1.default.db2();
            yield connection.exec(sql, [id], function (result) {
                res.send(result);
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var sql = "UPDATE PRODUCTO set :req.body WHERE producto_id = :id";
            var connection = database_1.default.db2();
            yield connection.exec(sql, [req.body, id], function (result) {
                res.send(result);
            });
        });
    }
}
const productoController = new ProductoController();
exports.default = productoController;
