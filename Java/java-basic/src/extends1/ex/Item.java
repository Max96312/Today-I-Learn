package extends1.ex;

public class Item {
//public final class Item { // 상속 불가
    private String name;
    private int price;

    public Item(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public int getPrice() {
        return price;
    }

    public void print() {
//    public final void print() { // Override 불가
        System.out.println("이름:" + name + ", 가격:" + price);
    }
}
