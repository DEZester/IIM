package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Telemetry Engine is running")
	})
	fmt.Println("-------------------------------------------")
	fmt.Println("🚀 Telemetry Engine starting on :8080")
	fmt.Println("Health check: http://localhost:8080/health")
	fmt.Println("-------------------------------------------")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Printf("Error starting server: %s\n", err)
	}
}
