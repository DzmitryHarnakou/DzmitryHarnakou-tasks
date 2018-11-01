//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//Найти сумму цифр данного числа

var str = "564674474";

function sum(str) {
var arr = str.split('');
var sum = 0;
for (var i = 0; i<arr.length; i++){
sum = sum + parseInt(arr[i]);
}
return sum;
}

alert (sum(str));