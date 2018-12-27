var minAddToMakeValid = function(S) {
    let countLeftNeeded = 0;
    let countRightNeeded = 0;

    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === '(') {
            countRightNeeded++;
        } else if (S.charAt(i) === ')'){
            if (countRightNeeded > 0) {
                countRightNeeded--;
            } else {
                countLeftNeeded++;
            }
        }
    }

    return countLeftNeeded + countRightNeeded;
};