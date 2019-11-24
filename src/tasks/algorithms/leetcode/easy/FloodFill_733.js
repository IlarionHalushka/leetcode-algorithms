// my solution beats 90%

var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) return image;

    const currentColor = image[sr][sc];
    image[sr][sc] = newColor;

    if (sr - 1 >= 0 && image[sr-1][sc] === currentColor) {
        floodFill(image, sr - 1, sc, newColor);
    }
    if (sc - 1 >= 0 && image[sr][sc - 1] === currentColor) {
        floodFill(image, sr, sc - 1, newColor);
    }
    if (sr + 1 < image.length && image[sr + 1][sc] === currentColor) {
        floodFill(image, sr + 1, sc, newColor);
    }
    if (sc + 1 < image[0].length && image[sr][sc + 1] === currentColor) {
        floodFill(image, sr, sc + 1, newColor);
    }

    return image;
};