'use strict';
const year1 = prompt('Введи с какого года начать');
if (year1 !== null) {
    const year2 = prompt('Введи до какого года');

    if (year2 !== null) {
        let yearStart = 0;
        let yearEnd = 0;

        if (year1 === '' || year2 === '' || isNaN(+year1) || isNaN(+year2)) {
            alert('Введены не правильные данные');
        } else {
            if (+year1 <= +year2) {
                yearStart = +year1;
                yearEnd = +year2;
            } else {
                yearStart = +year2;
                yearEnd = +year1;
            }

            for (let year = yearStart; year <= yearEnd; year++) {
                if ((year % 100 == 0) && (year % 400 != 0)) {
                    console.log(year + " Обычный");
                } else if (year % 4 == 0) {
                    console.log(year + " Високосный");
                } else {
                    console.log(year + " Обычный");
                }
            }

        }
    }
}