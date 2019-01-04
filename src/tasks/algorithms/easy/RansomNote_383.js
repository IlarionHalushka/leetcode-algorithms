// beats 50-65%
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();

    for (let i = 0; i < magazine.length; i++) {
        if (map.has(magazine.charAt(i))) {
            map.set(magazine.charAt(i), map.get(magazine.charAt(i)) + 1);
        } else {
            map.set(magazine.charAt(i), 1);
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!map.has(ransomNote.charAt(i))) return false;
        if (map.get(ransomNote.charAt(i)) === 0) return false;
        map.set(ransomNote.charAt(i), map.get(ransomNote.charAt(i)) - 1);
    }

    return true;
};