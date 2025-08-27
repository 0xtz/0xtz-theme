fn greet(name: &str) -> String {
    format!("Hello, {} 👋", name)
}

fn main() {
    println!("{}", greet("Rust"));
}
