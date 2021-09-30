```
Archivos2S2021
 
 Practica con 
 * Base de Datos PostgreSQL
 * API Python Flask
``` 

# API con Flask para conexión con PostgreSQL
En Python para una ruta específica (endpoint) se le asocia un método que ejecutara cuando se acceda a la ruta.

## PostgreSQL

### Prequesitos
* PostgreSQL
* Una base de datos de PostgreSQL para conectarse

Para este ejemplo se uso un entorno virtual***

### Instalación de Virtualenv
```
apt-get install python-virtualenv
```

### Para crear un virtualenv
```
virtualenv <nombre>
```
### Para iniciar el entorno virtual
```
source <nombre>/bin/activate
```
### *Cuando se quiera salir del entorno
```
deactivate
```

```Las próximas instalaciones se harán dentro del entorno virtual```

### Instalación de Flask
```
pip install Flask
```


### Instalación de Psycopg2
Para poder crear tener una conexión con postgreSQL primero se instalara el paquete que se utilice para su uso, si aún no se ha hecho 
```
pip install psycopg2
```
Si se quiere una versión específica, usar:
```
pip install psycopg2=2.8.6
```
### Verificar la instalación
```
python -c "import psycopg2; print(psycopg2.__version__)"
```
---
## Para iniciar el servicio
```
python api.py
```

## Para hacer una prueba en Postman
Poner en la ruta ```http://127.0.0.1:5000/``` con Método GET
