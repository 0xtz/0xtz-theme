public class AndromedaShowcase {

    // A single-line comment
    private static final int MAX_COUNT = 100;

    /*
     * A multi-line
     * comment
     */
    public static void main(String[] args) {
        String greeting = "Hello, World!";
        int count = 0;

        for (int i = 0; i < 5; i++) {
            System.out.println(greeting + " - " + i);
            count++;
        }

        if (count > MAX_COUNT) {
            System.out.println("Count exceeded max!");
        } else {
            System.out.println("Count is: " + count);
        }

        // Example of a data structure
        String[] names = {"Alice", "Bob", "Charlie"};
        for (String name : names) {
            System.out.println("Name: " + name);
        }
    }
}
