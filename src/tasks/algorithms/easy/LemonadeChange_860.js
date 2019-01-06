// my solution beats 100%

var lemonadeChange = function(bills) {
    let currentFifth = 0;
    let currentTenth = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            currentFifth++;
        } else if (bills[i] === 10) {
            currentFifth--;
            currentTenth++;
        } else {
            if (currentTenth > 0) {
                currentTenth--;
                currentFifth--;
            } else {
                currentFifth -= 3;
            }
        }

        if (currentFifth < 0) return false;
    }

    return true;
};