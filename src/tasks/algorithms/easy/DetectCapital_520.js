// my solution beats 100%
var detectCapitalUse = function(word) {
    if (word.length === 1) return true;

    if (word === word.toLowerCase() || word === word.toUpperCase()) return true;

    if (word.charAt(0) === word.charAt(0).toUpperCase()
        && word.substr(1) === word.substr(1).toLowerCase())
        return true;

    return false;
};