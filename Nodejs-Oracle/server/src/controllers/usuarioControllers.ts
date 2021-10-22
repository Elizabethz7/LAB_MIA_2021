import { Request, response, Response } from 'express';
import conn from '../database';

class UsuarioController {
    public async list(req: Request, res: Response) {
        var sql = "SELECT * FROM USUARIO";
        var connection = conn.db2();
        await connection.exec(sql, [], function (result: any) {
            res.send(result);
        });
    }
    public async getOne(req: Request, res: Response) {
        const { id } = req.params;//es destructura en js(obteniendo un parte de un objeto)
        var sql = "SELECT * FROM USUARIO WHERE usuario_id = :id";
        var connection = conn.db2();
        const pro = await connection.exec(sql, [id], function (result: any) {
            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.status(404).json({ text: "The temp_ doesn exist" });
            }
        });
    }
    public async login(req: Request, res: Response) {
        var usuario_correo= req.body.USUARIO_CORREO;
        var usuario_clave=req.body.USUARIO_CLAVE;
        var sql = "SELECT * FROM USUARIO WHERE usuario_correo = :usuario_correo and usuario_clave = :usuario_clave";
        var connection = conn.db2();
        const pro = await connection.exec(sql, [usuario_correo,usuario_clave], function (result: any) {
            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.status(404).json({ text: "The user doesn exist" });
            }
        });
    }

    public async create(req: Request, res: Response) {
        
        var usuario_tipo_id= req.body.USUARIO_USUARIO_ID;
        var usuario_credito= Math.floor(Math.random()*(6-1)+1);//5 a 1
        var usuario_correo= req.body.USUARIO_CORREO;
        var usuario_nombre= req.body.USUARIO_NOMBRE;
        var usuario_genero=req.body.USUARIO_GENERO;
        var usuario_apellido=req.body.USUARIO_APELLIDO;
        var usuario_clave=req.body.USUARIO_CLAVE;
        var usuario_credencial=req.body.USUARIO_CREDENCIAL;
        var usuario_validacion= req.body.USUARIO_VALIDACION;
        var usuario_no_indentificador=req.body.USUARIO_NO_INDENTIFICADOR; 
        var usuario_telefono=req.body.USUARIO_TELEFONO;
        var usuario_foto=req.body.USUARIO_FOTO;
        var usuario_nacimiento=req.body.USUARIO_NACIMIENTO;
        var usuario_direccion=req.body.USUARIO_DIRECCION;
        var usuario_online=req.body.USUARIO_ONLINE;
        var usuario_cuenta_estado=req.body.USUARIO_CUENTA_ESTADO;
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
        var connection = conn.db2();
        await connection.exec(sql, [usuario_tipo_id,
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
            usuario_cuenta_estado], function (result: any) {
                res.send(result);
            });
    }

    /*
    
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
const usuarioController = new UsuarioController();
export default usuarioController;