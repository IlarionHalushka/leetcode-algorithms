var kClosest = function(points, k) {
  return points.sort((a,b) => (a[0] ** 2 + a[1] ** 2) - (b[0] ** 2 + b[1] ** 2)).slice(0, k);
};
// Better solution using Max Heap
// public int[][] kClosest(int[][] points, int K) {
//     PriorityQueue<int[]> pq = new PriorityQueue<int[]>((p1, p2) -> p2[0] * p2[0] + p2[1] * p2[1] - p1[0] * p1[0] - p1[1] * p1[1]);
//     for (int[] p : points) {
//         pq.offer(p);
//         if (pq.size() > K) {
//             pq.poll();
//         }
//     }
//     int[][] res = new int[K][2];
//     while (K > 0) {
//         res[--K] = pq.poll();
//     }
//     return res;
// }
