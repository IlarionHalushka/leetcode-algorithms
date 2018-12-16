package tasks.algorithms.easy;

class BaseballGame_682 {
    public static void main(String[] args) {
        System.out.println(calPoints(new String[]{"5","-2","4","C","D","9","+","+","C","D","5","0","2","C","+","D","D","+","C","1","5","12","D","C","+"}));
        System.out.println(calPoints(new String[]{"5","2","C","D","+"}));
        System.out.println(calPoints(new String[]{"5","-2","4","C","D","9","+","+"}));
    }

    public static int calPoints(String[] ops) {
        int last = 0;
        int prelast = 0;
        int sum = 0;

        for (int i = 0; i < ops.length; i++) {
            if (ops[i].equals("C")) {
                sum -= last;
                last = Integer.MAX_VALUE;

            } else if (ops[i].equals("D")) {
                if (last != Integer.MAX_VALUE) {
                    last = last * 2;
                    sum += last;
                } else {
                    last = prelast * 2;
                    sum += last;
                }


            } else if (ops[i].equals("+")) {
                if (last != Integer.MAX_VALUE) {
                    sum += last + prelast;
                    int tmp = last + prelast;
                    prelast = last;
                    last = tmp;

                } else {
                    sum += prelast;
                }

            } else {
                prelast = last;
                last = Integer.parseInt(ops[i]);
                sum += last;
            }
        }

        return sum;
    }
}