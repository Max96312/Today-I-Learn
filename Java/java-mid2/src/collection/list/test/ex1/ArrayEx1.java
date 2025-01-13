package collection.list.test.ex1;

import java.util.ArrayList;
import java.util.Scanner;

public class ArrayEx1 {
    public static void main(String[] args) {
        int[] students = {90, 80, 70, 60, 50};

        int total = 0;
        for (int i = 0; i < students.length; i++) {
            total += students[i];
        }

        double average = (double) total / students.length;
        System.out.println("점수 총합: " + total);
        System.out.println("점수 평균: " + average);
    }

    public static class ListEx3 {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            ArrayList<Integer> numbers = new ArrayList<>();

            System.out.println("n개의 정수를 입력하세요 (종료 0)");
            while (true) {
                int input = scanner.nextInt();
                if (input == 0) {
                    break;
                }
                numbers.add(input);
            }

            int sum = 0;
            for (Integer number : numbers) {
                sum += number;
            }
            double average = (double) sum / numbers.size();

            System.out.println();
            System.out.println("입력한 정수의 합계: " + sum);
            System.out.println("입력한 정수의 평균: " + average);
        }
    }
}
