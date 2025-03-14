package main

import (
	"fmt"
	"gopkg.in/ini.v1"
	"log"
	"net/http"
)

func fileServe(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path[1:]
	if len(path) > 0 && ( path[0] == '/' || path[0] == '.') {
		http.Error(w, "Invalid path", http.StatusBadRequest)
		return
	}
	if path == "" {
		path = "index.html"
	}
	file:= "../web/" + path
	http.ServeFile(w, r, file)
	fmt.Printf("Hello, %s!\n", file)
}

func handleSocket(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Socket, %s!", r.URL.Path[1:])
}

func main() {
	cfg, err := ini.Load("config.ini")
	if err != nil {
		log.Fatalf("Failed to read file: %v", err)
	}
	http.HandleFunc("GET /", fileServe)
	http.HandleFunc("GET /ws", handleSocket)
	str := cfg.Section(ini.DefaultSection).Key("hello").String()
	fmt.Println(str)
	server := cfg.Section("server")
	local := server.Key("local").String()
	secure := server.Key("secure").MustBool()
	if secure {
		fmt.Println("secure")
		certFile := server.Key("certFile").String()
		keyFile := server.Key("keyFile").String()
		log.Fatal(http.ListenAndServeTLS(local, certFile, keyFile, nil))
	} else {
		fmt.Println("not secure")
		log.Fatal(http.ListenAndServe(local, nil))
	}
}
