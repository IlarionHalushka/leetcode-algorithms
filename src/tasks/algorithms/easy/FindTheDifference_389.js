var findTheDifference = function(s, t) {
    let res;

    for (let i = 0; i < t.length; i++) {
        res ^= s.charCodeAt(i);
        res ^= t.charCodeAt(i);
    }

    return String.fromCharCode(res);
};