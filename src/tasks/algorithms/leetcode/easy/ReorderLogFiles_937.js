var reorderLogFiles = function(logs) {
    const digitLog = [];
    const letterLog = [];

    for (let i = 0; i < logs.length; i++) {
        if (isNaN(logs[i].charAt(logs[i].length - 1))) {
            letterLog.push(logs[i]);
        } else {
            digitLog.push(logs[i]);
        }
    }

    letterLog.sort((a, b) => {
        const cmp = a.slice(a.indexOf(" ") + 1).localeCompare(b.slice(b.indexOf(" ") + 1));
        return cmp === 0 ? a.localeCompare(b) : cmp;
    });

    return letterLog.concat(digitLog);
};
