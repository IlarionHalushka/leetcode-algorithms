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