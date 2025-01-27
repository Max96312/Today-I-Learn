package lang.string.method;

public class StringComparisonMain {
    public static void main(String[] args) {
        String str1 = "Hello World"; // 대문자 일부 있음
        String str2 = "hello world"; // 대문자 없음 모두 소문자
        String str3 = "Hello Java";

        System.out.println("str1 equals str2: " + str1.equals(str2));
        System.out.println("str1 equalsIgnoreCase: " + str1.equalsIgnoreCase(str2));

        System.out.println("'b' compareTo 'a': " + "b".compareTo("a"));
        System.out.println("'b' compareTo 'a': " + "c".compareTo("a"));
        System.out.println("'str1' compareTo str3: " + str1.compareTo(str3));
        System.out.println("'str1' compareToIgnoreCase str2: " + str1.compareToIgnoreCase(str2));

        System.out.println("str1 start with 'Hello': " + str1.startsWith("Hello"));
        System.out.println("str1 end with 'World': " + str1.endsWith("World"));
    }
}
