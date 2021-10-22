"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const productoControllers_1 = __importDefault(require("../controllers/productoControllers"));
class ProductoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //ruta inicial
        this.router.get('/', productoControllers_1.default.list);
        this.router.get('/:id', productoControllers_1.default.getOne);
        this.router.post('/', productoControllers_1.default.create);
        this.router.delete('/:id', productoControllers_1.default.delete);
        this.router.put('/:id', productoControllers_1.default.update); //update
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
