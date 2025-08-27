package main

import (
	"fmt"
	"strconv"
)

// A single-line comment
const maxCount = 10

/*
 * A multi-line
 * comment
 */
func main() {
	message := "Hello, Go!"
	count := 0

	for i := 0; i < maxCount; i++ {
		fmt.Println(message + " - " + strconv.Itoa(i))
		count++
	}

	if count > 5 {
		fmt.Println("Count is greater than 5")
	} else {
		fmt.Println("Count is not greater than 5")
	}

	// Example with a slice
	names := []string{"Alice", "Bob", "Charlie"}
	for i, name := range names {
		fmt.Printf("Index: %d, Name: %s\n", i, name)
	}

	// Function call with a struct
	user := User{ID: 1, Name: "Andromeda"}
	user.Display()
}

type User struct {
	ID   int
	Name string
}

func (u User) Display() {
	fmt.Printf("User ID: %d, Name: %s\n", u.ID, u.Name)
}
