package main

import (
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"github.com/rs/cors"
)
var Array [2] string;
func main() {
	// DATABASE
	/*bd, err := getDB()
	if err != nil {
		log.Printf("Error with database" + err.Error())
		return
	} else {
		err = bd.Ping()
		if err != nil {
			log.Printf("Error making connection to DB. Please check credentials. The error is: " + err.Error())
			return
		}
	}*/

	// Define routes
	router := mux.NewRouter().StrictSlash(true)
	setupRoutesForExample(router)
	// .. here you can define more routes
	// ...
	// for example setupRoutesForProducts(router)
	
	//SERVER
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowCredentials: true,
	})
	handler := c.Handler(router)
	port := ":4000"
	Array[0]="Hello"
	log.Printf("Server started at %s", port)
	log.Fatal(http.ListenAndServe(port,handler))
}