const assert = require('assert').strict;

const favoriteGenre = (userSongs, genreSongs) => {
  const songGenre= new Map();

  for (const [genre, songs] of Object.entries(genreSongs)) {
    for (const song of songs) {
      songGenre.set(song, genre);
    }
  }

  const res = {};

  for (const [user, songs] of Object.entries(userSongs)) {
    const genreCount = new Map();
    let maxCount = Number.MIN_SAFE_INTEGER;

    for (const song of songs) {
      const count = genreCount.get(songGenre.get(song)) + 1 || 1;
      genreCount.set(songGenre.get(song), count);
      maxCount = Math.max(maxCount, count);
    }

    const favoriteGenres = [];

    for (const [genre, count] of genreCount.entries()) {
      if (count === maxCount) {
        favoriteGenres.push(genre);
      }
    }
    res[user] = favoriteGenres;
  }

  return res;
};

assert.deepEqual(
  favoriteGenre({
      "David": ["song1", "song2", "song3", "song4", "song8"],
      "Emma":  ["song5", "song6", "song7"]
    },
    {
      "Rock":    ["song1", "song3"],
      "Dubstep": ["song7"],
      "Techno":  ["song2", "song4"],
      "Pop":     ["song5", "song6"],
      "Jazz":    ["song8", "song9"]
    }),  { 'David': [ 'Rock', 'Techno' ], 'Emma': [ 'Pop' ] });
