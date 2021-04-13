'use strict';
const year1 = prompt('Введи с какого года начать');
const year2 = prompt('Введи до какого года');

if (year1 <= year2) {
	for (let year = year1 ; year <= year2; year++) {
		if ((year % 100 == 0) && (year % 400 != 0)) {
		    console.log(year + " Обычный");
		} else if (year % 4 == 0) {
		    console.log(year + " Високосный");
		} else {
		    console.log(year + " Обычный");
		}	
	}
}else {
	for (let year = year2 ; year <= year1; year++) {
		if ((year % 100 == 0) && (year % 400 != 0)) {
		    console.log(year + " Обычный");
		} else if (year % 4 == 0) {
		    console.log(year + " Високосный");
		} else {
		    console.log(year + " Обычный");
		}	
	}
}

