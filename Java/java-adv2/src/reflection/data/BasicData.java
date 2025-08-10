package reflection.data;

public class BasicData {
    public String publicField;
    private int privateFField;

    public BasicData() {
        System.out.println("BasicData.BasicData");
    }

    public BasicData(String data) {
        System.out.println("BasicData.BasicData: " + data);
    }

    public void call() {
        System.out.println("BasicData.call");
    }

    public String hello(String str) {
        System.out.println("BasicData.hello");
        return str + " hello";
    }

    private void privateMethod() {
        System.out.println("BasicData.privateMethod");
    }

    void defaultMetho() {
        System.out.println("BasicData.defaultMetho");
    }

    protected void protectedMethod() {
        System.out.println("BasicData.protectedMethod");
    }
}
