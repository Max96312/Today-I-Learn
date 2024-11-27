package lang.immutable.change;

public class ImmutableMain2 {
    public static void main(String[] args) {
        ImmutableObj obj1 = new ImmutableObj(10);
        ImmutableObj result = obj1.add(20);

        System.out.println("obj1 = " + obj1.getValue());
        System.out.println("result = " + result.getValue());
    }
}
