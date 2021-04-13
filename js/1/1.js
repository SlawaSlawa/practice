'use strict';

let num1 = prompt('Введи первое число: ');
let num2 = prompt('Введи второе число: ');


if (num1 === '' || num2 === '') {
    alert('Введены не правильные данные');
} else {
    num1 = +num1;
    num2 = +num2;

    if (isNaN(num1) || isNaN(num2)) {
    	alert('Введены не правильные данные');
    }else {
    	if (num1 > num2) {
    		alert('Первое число больше второго');
    	}
    	if (num1 < num2) {
    		alert('Второе число больше первого');
    	}
    	if (num1 === num2) {
    		alert('Числа равны');
    	}
    }
}