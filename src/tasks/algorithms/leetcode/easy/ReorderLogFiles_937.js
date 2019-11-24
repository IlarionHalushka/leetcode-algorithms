var reorderLogFiles = function(logs) {
    let N = logs.length;
    const digitLog = [];
    const letterLog = [];

    for (let i = 0; i < N; i++) {
        const firstSpace = logs[i].indexOf(' ');
        if (logs[i].charAt(firstSpace + 1) >= 0) {
            digitLog.push(logs[i]);
        } else {
            letterLog.push(logs[i]);
        }
    }

    letterLog.sort((a, b) => {
        const cmp = a.slice(a.indexOf(" ")).localeCompare(b.slice(b.indexOf(" ")));
        return cmp === 0 ? a.localeCompare(b) : cmp;
    });

    return letterLog.concat(digitLog);
};