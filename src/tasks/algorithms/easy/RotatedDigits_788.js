// my solution beats 40%
var rotatedDigits = function(N) {
    let count = 0;

    for (let i = 1; i <= N; i++) {
        const str = (i).toString().split('');
        let containsInvalid = false;

        for (let j = 0; j < str.length; j++) {
            switch (str[j]) {
                case '2':
                    str[j] = '5';
                    break;
                case '3':
                    containsInvalid = true;
                    j = str.length;
                    break;
                case '4':
                    containsInvalid = true;
                    j = str.length;
                    break;
                case '5':
                    str[j] = '2';
                    break;
                case '6':
                    str[j] = '9';
                    break;
                case '7':
                    containsInvalid = true;
                    j = str.length;
                    break;
                case '9':
                    str[j] = '6';
                    break;
            }
        }

        if (!containsInvalid  && str.join('') != i) {
            count++;
        }
    }

    return count;
};

// improved solution 45%
var rotatedDigits = function(N) {
    let count = 0;

    for (let i = 1; i <= N; i++) {
       let number = i;
       let isGood = false;

       while (number > 0) {
           if (number % 10 === 2) isGood = true;
           if (number % 10 === 5) isGood = true;
           if (number % 10 === 6) isGood = true;
           if (number % 10 === 3) {
               isGood = false;
               break;
           }
           if (number % 10 === 4) {
               isGood = false;
               break;
           }
           if (number % 10 === 7) {
               isGood = false;
               break;
           }
           if (number % 10 === 9) isGood = true;
           // >>0 removes last number '3' from: 0.020000000000000003
           number = (number / 10 >> 0);
       }

       if (isGood) {
           count++;
       }
    }

    return count;
};