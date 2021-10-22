import { Router } from 'express';//definir un enrutador
import { indexController } from '../controllers/indexControllers';

class IndexRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.get('/',indexController.index);

    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;