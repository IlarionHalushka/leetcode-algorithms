var distributeCandies = function(candies) {
    const uniqueCandies = new Set();

    for (const candy of candies) {
        if (!uniqueCandies.has(candy)) uniqueCandies.add(candy);
    }

    const candiesHalf = candies.length / 2;
    return uniqueCandies.size > candiesHalf ? candiesHalf : uniqueCandies.size;
};