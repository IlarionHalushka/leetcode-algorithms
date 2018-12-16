package tasks.algorithms.easy;

import java.util.ArrayList;

class BaseballGame_682 {
    public static void main(String[] args) {
        System.out.println(calPoints(new String[]{"5","-2","4","C","D","9","+","+","C","D","5","0","2","C","+","D","D","+","C","1","5","12","D","C","+"}));
        System.out.println(calPoints(new String[]{"5","2","C","D","+"}));
        System.out.println(calPoints(new String[]{"5","-2","4","C","D","9","+","+"}));
    }

    public static int calPoints(String[] ops) {
        int N = ops.length;
        ArrayList<Integer> points = new ArrayList<>();
        points.add(0);
        points.add(0);

        for (int i = 0; i < N; i++) {
            if (ops[i].equals("C")) {
                points.remove(points.size() - 1);

            } else if (ops[i].equals("D")) {
                points.add(points.get(points.size() - 1) * 2);


            } else if (ops[i].equals("+")) {
                points.add(points.get(points.size() - 1) + points.get(points.size() - 2));

            } else {
                points.add(Integer.parseInt(ops[i]));

            }
        }

        int sum = 0;
        for (int i = 0; i < points.size(); i++) {
            sum += points.get(i);
        }

        return sum;
    }
}