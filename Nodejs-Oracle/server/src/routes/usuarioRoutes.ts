import { Router } from 'express';//definir un enrutador
import usuarioControllers from '../controllers/usuarioControllers';

class UsuarioRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.get('/',usuarioControllers.list);
        this.router.get('/:id',usuarioControllers.getOne);
        this.router.post('/',usuarioControllers.create);
        this.router.post('/login',usuarioControllers.login);
        /*
        
        this.router.delete('/:id',gamesController.delete);
        this.router.put('/:id',gamesController.update);//update*/

    }
}
const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;