'use strict';

const getTheAreaOfASquare  = function(x1 = 1, y1 = 1, x2 = 1, y2 = 1) {
	let result;

	if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
		result = 'Не корректные значения';
	}else {
		result = Math.floor(Math.abs((x1 - x2) * (y1 - y2)));
	}
	return result;
};

console.log(getTheAreaOfASquare(2, 3, 10, 5));
console.log(getTheAreaOfASquare(10, 5, 2, 3));
console.log(getTheAreaOfASquare(-5, 8, 10, 5));
console.log(getTheAreaOfASquare(5, 8, 5, 5));
console.log(getTheAreaOfASquare(8, 1, 5, 1));
console.log(getTheAreaOfASquare('gdf', 1, 5, 1));






