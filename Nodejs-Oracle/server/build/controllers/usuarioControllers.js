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
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = "SELECT * FROM USUARIO";
            var connection = database_1.default.db2();
            yield connection.exec(sql, [], function (result) {
                res.send(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //es destructura en js(obteniendo un parte de un objeto)
            var sql = "SELECT * FROM USUARIO WHERE usuario_id = :id";
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
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var usuario_correo = req.body.USUARIO_CORREO;
            var usuario_clave = req.body.USUARIO_CLAVE;
            var sql = "SELECT * FROM USUARIO WHERE usuario_correo = :usuario_correo and usuario_clave = :usuario_clave";
            var connection = database_1.default.db2();
            const pro = yield connection.exec(sql, [usuario_correo, usuario_clave], function (result) {
                if (result.length > 0) {
                    res.send(result);
                }
                else {
                    res.status(404).json({ text: "The user doesn exist" });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var usuario_tipo_id = req.body.USUARIO_USUARIO_ID;
            var usuario_credito = Math.floor(Math.random() * (6 - 1) + 1); //5 a 1
            var usuario_correo = req.body.USUARIO_CORREO;
            var usuario_nombre = req.body.USUARIO_NOMBRE;
            var usuario_genero = req.body.USUARIO_GENERO;
            var usuario_apellido = req.body.USUARIO_APELLIDO;
            var usuario_clave = req.body.USUARIO_CLAVE;
            var usuario_credencial = req.body.USUARIO_CREDENCIAL;
            var usuario_validacion = req.body.USUARIO_VALIDACION;
            var usuario_no_indentificador = req.body.USUARIO_NO_INDENTIFICADOR;
            var usuario_telefono = req.body.USUARIO_TELEFONO;
            var usuario_foto = req.body.USUARIO_FOTO;
            var usuario_nacimiento = req.body.USUARIO_NACIMIENTO;
            var usuario_direccion = req.body.USUARIO_DIRECCION;
            var usuario_online = req.body.USUARIO_ONLINE;
            var usuario_cuenta_estado = req.body.USUARIO_CUENTA_ESTADO;
            var sql = `INSERT INTO USUARIO(
            usuario_tipo_id,
            usuario_credito,
            usuario_correo,
            usuario_nombre,
            usuario_genero,
            usuario_apellido,
            usuario_clave,
            usuario_credencial,
            usuario_validacion,
            usuario_no_indentificador,
            usuario_telefono,
            usuario_foto,
            usuario_nacimiento,
            usuario_direccion,
            usuario_online,
            usuario_cuenta_estado) values (:usuario_tipo_id,
                :usuario_credito,
                :usuario_correo,
                :usuario_nombre,
                :usuario_genero,
                :usuario_apellido,
                :usuario_clave,
                :usuario_credencial,
                :usuario_validacion,
                :usuario_no_indentificador,
                :usuario_telefono,
                :usuario_foto,
                TO_DATE(:usuario_nacimiento, 'YYYY-MM-DD'),
                :usuario_direccion,
                :usuario_online,
                :usuario_cuenta_estado)`;
            var connection = database_1.default.db2();
            yield connection.exec(sql, [usuario_tipo_id,
                usuario_credito,
                usuario_correo,
                usuario_nombre,
                usuario_genero,
                usuario_apellido,
                usuario_clave,
                usuario_credencial,
                usuario_validacion,
                usuario_no_indentificador,
                usuario_telefono,
                usuario_foto,
                usuario_nacimiento,
                usuario_direccion,
                usuario_online,
                usuario_cuenta_estado], function (result) {
                res.send(result);
            });
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
