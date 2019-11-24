import java.util.*;

class Employee {
    // It's the unique id of each node;
    // unique id of this employee
    public int id;
    // the importance value of this employee
    public int importance;
    // the id of direct subordinates
    public List<Integer> subordinates;
};

// my solution with stack bears 42%
class Solution {
    public int getImportance(List<Employee> employees, int id) {
        int importanceSum = 0;
        HashMap<Integer, Employee> map = new HashMap<>();

        for (int i = 0; i < employees.size(); i++) {
            map.put(employees.get(i).id, employees.get(i));
        }

        Deque<Employee> stack = new ArrayDeque<Employee>();
        stack.add(map.get(id));

        while (!stack.isEmpty()) {
            Employee empl = stack.pop();
            importanceSum += empl.importance;
            for (Integer eid : empl.subordinates) {
                stack.add(map.get(eid));
            }
        }

        return importanceSum;
    }
}

// same solution but with queue
class Solution {
    public int getImportance(List<Employee> employees, int id) {
        int importanceSum = 0;
        HashMap<Integer, Employee> map = new HashMap<>();

        for (int i = 0; i < employees.size(); i++) {
            map.put(employees.get(i).id, employees.get(i));
        }

        Queue<Employee> queue = new LinkedList<>();
        queue.offer(map.get(id));

        while (!queue.isEmpty()) {
            Employee empl = queue.poll();
            importanceSum += empl.importance;
            for (Integer eid : empl.subordinates) {
                queue.offer(map.get(eid));
            }
        }

        return importanceSum;
    }
}




