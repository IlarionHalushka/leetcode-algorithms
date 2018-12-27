

function solution(arr) {
	let countZeros = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			countZeros++;
		} else {
			arr[i - countZeros] = arr[i];
		}
	}

	for (let i = arr.length - 1; i >= arr.length - countZeros; i--) {
		arr[i] = 0;
	}

	return arr;
}

console.log("log #1: 1,2,3,4,6,0,0,0,0,0,0   ", solution([9,0,1,0,2,0,3,4,0,6,0]));
// console.log("log #2   1: ", solution([1], [2,2]));
// console.log("log #3    1: ", solution([1], [2]));
// console.log("log #4   1: ", solution([2], [2]));
// console.log("log #5    0: ", solution([5,3,1,4], [4,2,3,5,1]));

// console.assert(solution([1,2,3,4,6], [5,5,7,7,8]) === 3, "assert #1 failed: should equal TRUE, but result equals FALSE");
