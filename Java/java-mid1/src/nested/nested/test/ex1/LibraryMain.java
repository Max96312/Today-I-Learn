package nested.nested.test.ex1;

public class LibraryMain {
    public static void main(String[] args) {
        Library library = new Library(4);
        library.addBook("자바 ORM 표준 JPA 프로그래밍", "김영한");
        library.addBook("토비의 스프링1", "토비");
        library.addBook("토비의 스프링2", "토비");
        library.addBook("OneMoreThing", "잡스");
        library.showBooks();
    }
}
