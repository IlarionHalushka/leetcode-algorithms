package tasks.algorithms.easy;

import java.util.ArrayList;
import java.util.Stack;

class BaseballGame_682 {
    public static void main(String[] args) {
        System.out.println(calPoints(new String[]{"5","-2","4","C","D","9","+","+","C","D","5","0","2","C","+","D","D","+","C","1","5","12","D","C","+"}));
        System.out.println(calPoints(new String[]{"5","2","C","D","+"}));
        System.out.println(calPoints(new String[]{"5","-2","4","C","D","9","+","+"}));
    }

    public static int calPoints(String[] ops) {
        ArrayList<Integer> points = new ArrayList<>();

        for (int i = 0; i < ops.length; i++) {
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
        for (int el : points) sum += el;
        return sum;
    }

    public static int calPointsStack(String[] ops) {
        Stack<Integer> stack = new Stack();

        for(String op : ops) {
            if (op.equals("+")) {
                int top = stack.pop();
                int newtop = top + stack.peek();
                stack.push(top);
                stack.push(newtop);
            } else if (op.equals("C")) {
                stack.pop();
            } else if (op.equals("D")) {
                stack.push(2 * stack.peek());
            } else {
                stack.push(Integer.valueOf(op));
            }
        }

        int ans = 0;
        for(int score : stack) ans += score;
        return ans;
    }
}