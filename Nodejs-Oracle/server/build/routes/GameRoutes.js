"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const gamesControllers_1 = __importDefault(require("../controllers/gamesControllers"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //ruta inicial
        this.router.get('/', gamesControllers_1.default.list);
        this.router.post('/', gamesControllers_1.default.create);
        /*this.router.get('/:id',gamesController.getOne);
        
        this.router.delete('/:id',gamesController.delete);
        this.router.put('/:id',gamesController.update);//update*/
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
