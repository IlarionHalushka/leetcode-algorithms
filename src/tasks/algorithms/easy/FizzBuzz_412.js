var fizzBuzz = function(n) {
    let ans = new Array(n);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = `${i+1}`;
    }

    for (let i = 2; i < n; i += 3) {
        ans[i] = 'Fizz';
    }
    for (let i = 4; i < n; i += 5) {        
        ans[i] = 'Buzz';
    }
    for (let i = 14; i < n; i += 15) {
        ans[i] = 'FizzBuzz';
    }

    return ans;
};