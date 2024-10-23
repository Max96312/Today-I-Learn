package method.ex;

public class MethodEx2 {
    public static void main(String[] args) {
        String msg = "Hello World!";

        printMessage(msg, 3);
        printMessage("java", 5);
        printMessage("hi", 7);
    }
    public static void printMessage(String msg, int times) {
        for (int i = 0; i < times; i++) {
            System.out.println(msg);
        }
    }
}
