import { Request, response, Response } from 'express';
import conn from '../database';

class ProductoController {
    public async list(req: Request, res: Response) {
        var sql = "SELECT * FROM PRODUCTO";
        var connection = conn.db2();
        await connection.exec(sql, [], function (result: any) {
            res.send(result);
        });
    }
    public async getOne(req: Request, res: Response) {
        const { id } = req.params;//es destructura en js(obteniendo un parte de un objeto)
        var sql = "SELECT * FROM PRODUCTO WHERE producto_id = :id";
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

    public async create(req: Request, res: Response) {
        var producto_precio = req.body.precio;
        var producto_cantidad_total = req.body.cantidad_total;
        var producto_cantidad_restante = req.body.cantidad_restante;
        var producto_descripcion = req.body.descripcion;
        var producto_imagen = req.body.imagen;
        var producto_codigo = req.body.codigo;
        var producto_usuario = req.body.usuario;
        var producto_nombre = req.body.nombre;
        var sql = `INSERT INTO PRODUCTO(
            producto_nombre,
            producto_precio,
            producto_cantidad_total,
            producto_cantidad_restante,
            producto_descripcion,
            producto_imagen,
            producto_codigo,
            producto_usuario
            ) values (:producto_nombre,
                    :producto_precio,
                    :producto_cantidad_total,
                    :producto_cantidad_restante,
                    :producto_descripcion,
                    :producto_imagen,
                    :producto_codigo,
                    :producto_usuario)`;
        var connection = conn.db2();
        await connection.exec(sql, [producto_nombre,producto_precio, producto_cantidad_total,
            producto_cantidad_restante,
            producto_descripcion,
            producto_imagen,
            producto_codigo,
            producto_usuario], function (result: any) {
                res.send(result);
            });
    }
    public async delete(req: Request, res:Response){
        //
        const { id } = req.params;
        var sql = "DELETE FROM PRODUCTO WHERE producto_id = :id";
        var connection = conn.db2();
        await connection.exec(sql, [id], function (result: any) {
            res.send(result);
        });
    }
    public async update(req: Request, res:Response){
        const { id } = req.params;
        var sql = "UPDATE PRODUCTO set :req.body WHERE producto_id = :id";
        var connection = conn.db2();
        await connection.exec(sql, [req.body,id], function (result: any) {
            res.send(result); 
        });
    }
}
const productoController = new ProductoController();
export default productoController;