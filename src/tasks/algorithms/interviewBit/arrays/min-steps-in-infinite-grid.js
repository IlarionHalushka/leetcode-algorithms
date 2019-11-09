const minStepsInInfiniteGrid  = (A, B) => {
    let count = 0;
    for (let i = 0; i < A.length - 1; i++) {
      const a = A[i+1] > A[i] ? A[i+1] - A[i] : A[i] - A[i+1];
      const b = B[i+1] > B[i] ? B[i+1] - B[i] : B[i] - B[i+1];

      count += Math.max(Math.abs(a), Math.abs(b));
    }
    return count;
};
