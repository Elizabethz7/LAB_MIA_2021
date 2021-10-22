import { Router } from 'express';//definir un enrutador
import productoControllers from '../controllers/productoControllers';

class ProductoRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.get('/',productoControllers.list);
        this.router.get('/:id',productoControllers.getOne);
        this.router.post('/',productoControllers.create);
        this.router.delete('/:id',productoControllers.delete);
        this.router.put('/:id',productoControllers.update);//update

    }
}
const productoRoutes = new ProductoRoutes();
export default productoRoutes.router;