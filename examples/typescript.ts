interface User {
  id: number;
  name: string;
}

class UserManager {
  private users: User[] = [];

  constructor(initialUsers: User[]) {
    this.users = initialUsers;
  }

  // A single-line comment
  addUser(user: User): void {
    this.users.push(user);
  }

  /*
   * A multi-line
   * comment
   */
  displayUsers(): void {
    for (const user of this.users) {
      console.log(`User ID: ${user.id}, Name: ${user.name}`);
    }
  }

  static greet(name: string): string {
    const message: string = `Hello, ${name}!`;
    return message;
  }
}

function initializeAndromedaShowcase(): void {
  const initialUsers: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  const manager = new UserManager(initialUsers);

  manager.addUser({ id: 3, name: "Charlie" });
  manager.displayUsers();

  console.log(UserManager.greet("TypeScript"));

  const isValid: boolean = true;
  if (isValid) {
    console.log("Validation successful.");
  } else {
    console.log("Validation failed.");
  }
}

initializeAndromedaShowcase();
