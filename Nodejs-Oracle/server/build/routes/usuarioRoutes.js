"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const usuarioControllers_1 = __importDefault(require("../controllers/usuarioControllers"));
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //ruta inicial
        this.router.get('/', usuarioControllers_1.default.list);
        this.router.get('/:id', usuarioControllers_1.default.getOne);
        this.router.post('/', usuarioControllers_1.default.create);
        this.router.post('/login', usuarioControllers_1.default.login);
        /*
        
        this.router.delete('/:id',gamesController.delete);
        this.router.put('/:id',gamesController.update);//update*/
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
