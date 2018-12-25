var repeatedNTimes = function(A) {
//     [2,1,3,1,1,1,1,7,1,6,4,1,1,1,5,9]

//     [1,2,3,4,5,6,7,7]
    // sort and choose element A[Math.floor(A.length / 2)];

    // put each elemnt into a set and if element is already in set -> return

    // probability

    // brute-force

    // math?? 2 + 1 + 3 + 1 + 1 + 1 + 1 + 1 +
    // amount changed by 1, then by 2, then by 1


    // divide into groups with 4 elements each and check in each group for duplicates

    for (let k = 1; k < 4; k++) {
        for (let i = 0; i < A.length - k; i++) {
            if (A[i] === A[i+k]) return A[i];
        }
    }
    return null;
};