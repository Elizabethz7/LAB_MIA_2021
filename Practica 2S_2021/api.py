import flask #flask asigna solicitudes HTTP a funciones Python
from flask import request, jsonify  #jsonify funcion que nos permite convertir listas y diccionarios a formato JSON
import psycopg2
from psycopg2 import Error

app = flask.Flask(__name__) #Crea el objeto de aplicación Flask
app.config["DEBUG"] = True  # Inicia el depurador, si la aplicacion tiene un formato incorrecto se vera un error

# RUTAS - METODOS
#1
@app.route('/', methods=['GET']) #la ruta '/' la asignamos a una funcion home
def home():
    
    #Ejemplo de QUERY
    query = "SELECT CURRENT_DATE"
    cursor.execute(query)
    print("invocación de ruta '/' GET")

    result = cursor.fetchall()
    print("Imprimir el resultado")
    for row in result:
        print("DATE = ", row[0])
    #retornar resultado
    return "result " + result[0][0].strftime('%m/%d/%Y')
#2
@app.errorhandler(404) #si no existe la ruta
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404


if __name__ == '__main__':
    try:
        connection = psycopg2.connect(user="admin",
                                    password="password",
                                    host="127.0.0.1",
                                    port="5432",
                                    database="mydatabase")
        cursor = connection.cursor()
        postgreSQL_select_Query = "SELECT CURRENT_DATE"

        cursor.execute(postgreSQL_select_Query)
        print("Selecting rows from mobile table using cursor.fetchall")
        mobile_records = cursor.fetchall()

        print("Print each row and it's columns values")
        for row in mobile_records:
            print("DATE = ", row[0], )

    except (Exception, psycopg2.Error) as error:
        print("Error while fetching data from PostgreSQL", error)
app.run(debug=True)