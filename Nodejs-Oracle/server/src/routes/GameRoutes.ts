import { Router } from 'express';//definir un enrutador
import gamesController from '../controllers/gamesControllers';

class GamesRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.get('/',gamesController.list);
        this.router.post('/',gamesController.create);
        /*this.router.get('/:id',gamesController.getOne);
        
        this.router.delete('/:id',gamesController.delete);
        this.router.put('/:id',gamesController.update);//update*/

    }
}
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;