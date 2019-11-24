var smallestRangeI = function(A, K) {
    let min = A[0], max = A[0];

    for (let i = 1; i < A.length; i++) {
        const current = A[i];
        if (current > max) {
            max = current;
        } else if (current < min) {
            min = current;
        }
    }
    const result = max - min - (2 * K);
    return result < 0 ? 0 : result;
};