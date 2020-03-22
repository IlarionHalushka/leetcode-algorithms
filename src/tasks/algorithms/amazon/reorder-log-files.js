var reorderLogFiles = function(logs) {
  let map = new Map();
  logs.forEach((log, index) => map.set(log, index));

  logs.sort((a, b) => {
    const isStringLogA = isNaN(a[a.length - 1]);
    const isStringLogB = isNaN(b[b.length - 1]);

    if (isStringLogA && isStringLogB) {
      // compare logs
      const compareLogs = a.slice(a.indexOf(' ') + 1).localeCompare(b.slice(b.indexOf(' ') + 1));
      // if logs are equal then compare prefixes
      if (compareLogs === 0) {
        return a.slice(0, a.indexOf(' ')).localeCompare(b.slice(0, b.indexOf(' ')));
      }
      return compareLogs;
    }
    if (!isStringLogA && !isStringLogB) {
      return map.get(a) - map.get(b) ;
    }
    if (!isStringLogA && isStringLogB) {
      return 1;
    }
    if (isStringLogA && !isStringLogB) {
      return -1;
    }
  });

  return logs;
};

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
