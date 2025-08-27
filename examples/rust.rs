fn main() {
    // A single-line comment
    let mut count = 0;
    const MAX_ITERATIONS: u32 = 5;

    /*
     * A multi-line
     * comment
     */
    for i in 0..MAX_ITERATIONS {
        println!("Iteration: {}", i);
        count += 1;
    }

    let message = if count > 0 {
        String::from("Count is positive!")
    } else {
        String::from("Count is zero!")
    };

    println!("{}", message);

    // Example with a vector
    let numbers = vec![10, 20, 30];
    for number in &numbers {
        println!("Number: {}", number);
    }

    // Function call with a custom type
    let user = User { id: 1, name: String::from("Andromeda") };
    user.display();
}

struct User {
    id: u32,
    name: String,
}

impl User {
    fn display(&self) {
        println!("User ID: {}, Name: {}", self.id, self.name);
    }
}
