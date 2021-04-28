package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
	
)
const AllowedCORSDomain = "http://localhost"
func setupRoutesForExample(router *mux.Router) {

	router.HandleFunc("/list", func(w http.ResponseWriter, r *http.Request) {
		list, err := get()
		if err == nil {
			respondWithSuccess(list, w)
		} else {
			respondWithError(err, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/create", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var mess1 Message
		err := json.NewDecoder(r.Body).Decode(&mess1)
		if err != nil {
			respondWithError(err, w)
		}else{
			err := create(mess1)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}

	}).Methods(http.MethodPost)
}


//  Responses of Status
func respondWithError(err error, w http.ResponseWriter) {
	w.WriteHeader(http.StatusInternalServerError)
	json.NewEncoder(w).Encode(err.Error())
}

func respondWithSuccess(data interface{}, w http.ResponseWriter) {

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(data)
}