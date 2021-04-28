package main

import (
	"fmt"
	"log"
	// Para oir a peticiones GET Y POST
    "net/http"
	// Enviar datos en json
	"encoding/json"
)

type Message struct {
	Name string  `json:"name"`
}
var Array [2] string;
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
// Creamos un server sencillo que unicamente acepte peticiones GET y POST a '/api'
func http_server(w http.ResponseWriter, r *http.Request) {
	//para la confi. de cors
	enableCors(&w)
	// Comprobamos que el path sea exactamente '/' sin parámetros
    if r.URL.Path != "/api" {
        http.Error(w, "404 not found.", http.StatusNotFound)
        return
    }
	
	// Comprobamos el tipo de peticion HTTP
    switch r.Method {
		case "GET":     
			//fmt.Fprintf(w, "good get")
			out, err := json.Marshal(Array)
			if err != nil {
				panic (err)
			}
			w.Write([]byte(out))

		// Publicar un mensaje a Google PubSub
		case "POST":
			var p Message

			err := json.NewDecoder(r.Body).Decode(&p)
			if err != nil {
				fmt.Println("error en estructura")
				fmt.Fprintf(w, "err: %v", err)
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}

			message, err := json.Marshal(p)
			// Existio un error generando el objeto JSON
			if err != nil {
				fmt.Println("error en json")
				fmt.Fprintf(w, "err: %v", err)
				return
			}
			Array[1]=p.Name;
			fmt.Fprintf(w, "¡Mensaje Guardado!\n")
			fmt.Fprintln(w, string(message))
		
		// Cualquier otro metodo no sera soportado
		default:
			fmt.Fprintf(w, "Metodo %s no soportado \n", r.Method)
			return
    }
}

func main() {
	
	fmt.Println("Server Go Iniciado")
	http.HandleFunc("/api", http_server)
	Array[0]="Hello"
	http_port := ":3000"
	
    if err := http.ListenAndServe(http_port, nil); err != nil {
        log.Fatal(err)
    }
}