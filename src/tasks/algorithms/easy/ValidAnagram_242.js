var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    let counters = new Array(27).fill(0);

    for (let i = 0; i < s.length; i++) {
       counters[s.charCodeAt(i) - 97]++;
       counters[t.charCodeAt(i) - 97]--;
    }

    for (let i = 0; i < counters.length; i++) {
       if (counters[i] != 0) return false;
    }
    return true;
};