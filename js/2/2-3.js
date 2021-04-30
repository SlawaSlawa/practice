'use strict';

const getRandomNums = function(min, max){
	let result;
	while (true) {
		result = (Math.random() * (max - min) + min).toFixed(2);
		if (result % 2 !== 0) break;
	}
	return +result;
};

console.log(getRandomNums(0, 100));
console.log(getRandomNums(2, 5));
console.log(getRandomNums(100, -5));
console.log(getRandomNums(-3, -10));
