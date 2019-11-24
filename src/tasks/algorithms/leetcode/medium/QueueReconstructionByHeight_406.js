const reconstructQueue = function(people) {
    people.sort((a, b) => a[0] === b[0] ?  a[1] - b[1]  :   b[0] - a[0]);

    for (let i = 0; i < people.length; i++) {
          const tmp = people[i];
          people.splice(i, 1);
          people.splice(tmp[1], 0, tmp);
    }

    return people;
};