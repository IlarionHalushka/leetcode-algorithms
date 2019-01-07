function spiralCopy(inputMatrix) {
  // right -> down -> left -> up

  // maxRight = inputMaxritx.length
  // maxDown = inputMatrix[0].length
  // maxTop = 0;
  // maxLeft = 0;

  // point = [0,0]

  // direction === 'r'
  // res = [];

  // while (maxDown <= maxTop && maxLeft <= maxRight)
        // if (direction === 'r')
          // for (let i = maxLeft; i < maxRight; i++)
              // res.push(point[point[0], i]);
          // point = [point[0], maxRight - 1];
          // maxTop++; direction =  ; continue;

        // if (direction === 'd')
          // for (let i = maxTop; i < maxDown; i++)
              // res.push(point[i, point[0]]);
          // point = [maxDown - 1, point[1]];
          // maxRight--; direction =  ; continue;

        // if (direction === 'l')
          // for (let i = maxRight - 1; i >= maxLeft; i--)
              // res.push(point[point[0], i]);
          // point = [point[0], maxLeft - 1];
          // maxDown--; direction =  ; continue;

        // if (direction === 'u')
          // for (let i = maxDown - 1; i >= maxTop; i--)
              // res.push(point[i, point[1]]);
          // point = [maxTop - 1, point[1]];
          // maxLeft++; direction =  ; continue;
   // }
  // return res;
}