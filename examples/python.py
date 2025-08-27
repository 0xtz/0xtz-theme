class User:
    def __init__(self, user_id: int, name: str):
        self.user_id = user_id
        self.name = name

    def display(self):
        print(f"User ID: {self.user_id}, Name: {self.name}")

def main():
    # A single-line comment
    count = 0
    MAX_COUNT = 5

    """
    A multi-line
    comment
    """
    for i in range(MAX_COUNT):
        print(f"Iteration: {i}")
        count += 1

    if count > 0:
        message = "Count is positive!"
    else:
        message = "Count is zero!"

    print(message)

    # Example with a list
    names = ["Alice", "Bob", "Charlie"]
    for name in names:
        print(f"Name: {name}")

    # Function call with a class instance
    user = User(1, "0xtz")
    user.display()

if __name__ == "__main__":
    main()
