package array;

public class ArrayDi3 {
    public static void main(String[] args) {
        // 2*3 2차원 배열을 만든다.
        int[][] arr = {
            {1, 2, 3},
            {3, 4, 5},
        };

        for (int row = 0; row < arr.length; row++) {
            for (int col = 0; col < arr[row].length; col++) {
                System.out.print(arr[row][col] + " ");
            }
            System.out.println();
        }
    }
}
