public class Solution {
	public int searchInsert(ArrayList<Integer> a, int b) {
	    int low = 0;
	    int high = a.size() - 1;

	    while (low <= high) {
	        int mid = (int) ((low + high) / 2);
	        if (a.get(mid) == b) {
	            return mid;
	        }
	        if (a.get(mid) > b) {
	            high = mid - 1;
	        } else if (a.get(mid) < b) {
                low = mid + 1;
            }
	    }

        return low;
	}
}
