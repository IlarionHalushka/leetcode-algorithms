var canReorderDoubled = function(A) {
    if (A.length === 0) return true;
    // handle sorting with negatives
    A.sort((a, b) => Math.abs(a) - Math.abs(b));

    const map = new Map();
    map.set(A[0] * 2, 1);

    for (let i = 1; i < A.length; i++) {
        if (map.has(A[i])) {
            map.set(A[i], map.get(A[i]) - 1);
            if (map.get(A[i]) === 0) {
                map.delete(A[i]);
            }
        } else {
            if (map.has(A[i] * 2)) {
                map.set(A[i] * 2, map.get(A[i] * 2) + 1);
            } else {
                map.set(A[i] * 2, 1);
            }
        }
    }

    return map.size === 0;
};