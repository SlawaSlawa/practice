'use strict';
let result = 0;

while (true) {
	const num = prompt('Введи число');

	if (num === null) {
		break;
	}

	if (!isNaN(num)) {
		result += +num;
	}
}

console.log(result);