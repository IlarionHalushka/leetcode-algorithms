public class Solution {
  public ArrayList<Integer> grayCode(int n) {
  ArrayList<Integer> initial = new ArrayList<Integer>();
  initial.add(0);
  if (n == 0) return initial;
  initial.add(1);

  for (int i = 1; i < n; i++) {
  ArrayList<Integer> temp = new ArrayList<Integer>();

  for (int j = initial.size() - 1; j >= 0; j--) {
  temp.add((int) (Math.pow(2, i) + initial.get(j)));
}
initial.addAll(temp);
}

return initial;
}
}
