'use strict';

const getFractionalPart = function(a, b, n) {
	const aResult = Math.trunc((a % 1) * Math.pow(10, n));
	const bResult = Math.trunc((b % 1) * Math.pow(10, n));

	console.log('a = ', a);
	console.log('b = ', b);
	console.log('n = ', n);
	console.log('aResult = ', aResult);
	console.log('bResult = ', bResult);

	console.log(aResult + ' > ' + bResult + ' : ' + (aResult > bResult));
	console.log(aResult + ' < ' + bResult + ' : ' + (aResult < bResult));
	console.log(aResult + ' >= ' + bResult + ' : ' + (aResult >= bResult));
	console.log(aResult + ' <= ' + bResult + ' : ' + (aResult <= bResult));
	console.log(aResult + ' === ' + bResult + ' : ' + (aResult === bResult));
	console.log(aResult + ' != ' + bResult + ' : ' + (aResult != bResult));

}

getFractionalPart(13.123456789, 2.123, 5);
getFractionalPart(13.890123, 2.891564, 2);
getFractionalPart(13.890123, 2.891564, 3);


