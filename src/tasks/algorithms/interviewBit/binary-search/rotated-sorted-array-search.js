module.exports = {
  findPivot: function (arr, low, high) {
    if (low === high) return low;
    if (high < low) return -1;

    var mid = Math.floor((high + low) / 2);

    if (mid < high && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid > low && arr[mid - 1] > arr[mid]) {
      return mid - 1;
    }
    if (arr[low] <= arr[mid]) {
      return this.findPivot(arr, mid + 1, high);
    }
    return this.findPivot(arr, low, mid - 1);
  },
  binarySearch: function (arr, low, high, el) {
    while (low <= high) {
      var mid = Math.floor((low + high) / 2);

      if (arr[mid] === el) {
        return mid;
      }
      if (arr[mid] < el) {
        low = mid + 1;
      } else if (arr[mid] > el) {
        high = mid - 1;
      }
    }
    return -1;
  },
  search : function(A, B){
    const pivot = this.findPivot(A, 0, A.length);

    if (A[pivot] === B) return pivot;
    if (A[0] === B) return 0;

    if (A[0] < B) {
      return this.binarySearch(A, 0, pivot - 1, B);
    }
    if (A[0] > B) {
      return this.binarySearch(A, pivot + 1, A.length - 1, B);
    }
  }
};
