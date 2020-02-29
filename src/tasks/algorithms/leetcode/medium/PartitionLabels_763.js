// my solution # 1 beats 32%
var partitionLabels = function(S) {
    let maxIndex = 0;
    const arrayS = S.split('');
    const result = [];


    for (let i = 0; i < S.length; i++) {
        if (arrayS.lastIndexOf(arrayS[i]) > maxIndex) {
            maxIndex = arrayS.lastIndexOf(arrayS[i]);
        }
        if (i === maxIndex) {
            const l = arrayS.splice(0, maxIndex + 1);
            result.push(l.length);
            i = -1;
            maxIndex = 0;
        }
        if (arrayS.length === 0)     return result;
    }
};


// my solution #2 beats 32%
var partitionLabels = function(S) {
    let maxIndex = 0;
    const arrayS = S.split('');
    const result = [];
    let gone = 0;

    for (let i = 0; i < arrayS.length; i++) {

        const currentLastIndex = arrayS.lastIndexOf(arrayS[i]);
        if (currentLastIndex > maxIndex) maxIndex = currentLastIndex;

        if (i === maxIndex) {
            result.push(maxIndex + 1 - gone);
            gone = maxIndex + 1;
        }

    }
    return result;
};

// my solution #3 beats 96.5% without using extra space for arrayS
var partitionLabels = function(S) {
    let maxIndex = 0;
   // const arrayS = S.split('');
    const result = [];
    let gone = 0;

    for (let i = 0; i < S.length; i++) {

        const currentLastIndex = S.lastIndexOf(S.charAt(i));
        if (currentLastIndex > maxIndex) maxIndex = currentLastIndex;

        if (i === maxIndex) {
            result.push(maxIndex + 1 - gone);
            gone = maxIndex + 1;
        }
    }
    return result;
};
