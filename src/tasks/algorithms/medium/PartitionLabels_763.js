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
