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
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = "SELECT * FROM USUARIO";
            var connection = database_1.default.db2();
            yield connection.exec(sql, [], function (result) {
                res.send(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var usuario_correo = req.body.correo;
            var sql = "INSERT INTO USUARIO(usuario_id,usuario_correo) values (1,:usuario_correo)";
            var connection = database_1.default.db2();
            yield connection.exec(sql, [usuario_correo], function (result) {
                res.send(result);
            });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
