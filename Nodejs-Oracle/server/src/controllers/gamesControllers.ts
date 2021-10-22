import { Request, response, Response } from 'express';
import conn from '../database';

class GamesController {
    public async list(req: Request, res: Response) {
        var sql = "SELECT * FROM USUARIO";
        var connection = conn.db2();
        await connection.exec(sql, [], function (result: any) {
            res.send(result);
        });
    }
    
    public async create(req: Request, res:Response){

        var usuario_correo = req.body.correo;
        var sql = "INSERT INTO USUARIO(usuario_id,usuario_correo) values (1,:usuario_correo)";
        var connection = conn.db2();
        await connection.exec(sql, [usuario_correo], function (result: any) {
            res.send(result);
        });
    }

    /*public async getOne(req: Request, res:Response): Promise<any>{
        const { id }= req.params;//es destructura en js(obteniendo un parte de un objeto)
        const games = await pool.query('SELECT * FROM temp_ WHERE id = ?',[id]);
        if(games.length > 0){ 
           return  res.json(games[0]); 
        }
        res.status(404).json({text: "The temp_ doesn exist"});
        
        //res.json({text:'This is game '+req.params.id })
    }
    public async create(req: Request, res:Response):Promise<void>{//async para que sirva await
        //hacer consulta para guardar el dato aunque aun no se envie nada >>req.body
        await pool.query('INSERT INTO temp_ set ?',[req.body]);//lo primero significa que sera asincrono
        res.json({message:'Temp Saved'});


    }
    public async delete(req: Request, res:Response): Promise<void>{
        //
        const { id } = req.params;
        await pool.query('DELETE FROM temp_ WHERE id=?',[id]);
        res.json({message:'deleting '+req.params.id })
    }
    public async update(req: Request, res:Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE temp_ set ? WHERE id = ?',[req.body,id]);
        res.json({message:'updating '+req.params.id });
    }*/

}
const gamesController = new GamesController();
export default gamesController;