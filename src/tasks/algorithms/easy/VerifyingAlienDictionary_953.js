var isAlienSorted = function(words, order) {
    const map = new Map();

    for (let i = 0; i < order.length; i++) {
        map.set(order.charAt(i), i);
    }

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {

            if (words[i+1].length == j) return false;

            if (map.get(words[i].charAt(j)) > map.get(words[i+1].charAt(j))) {
                 return false;
            } else if (map.get(words[i].charAt(j)) < map.get(words[i+1].charAt(j))) {
                break;
            }
        }
    }

    return true;
};