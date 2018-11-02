//Серия чисел, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317 (^ - степень числа). Найдите 10 последних цифр результата такой последовательности,
//для заданного n. 1 <= n <= 1000

//функция умножения, которая выводит только 10 последних цифр операции


function sum(l){
var sum = 0;
for (var n =1; n <= l; n++) {
  var result = 1;
  var topLimit = 100000000000;
  for (var m=1; m <= n; m++) {
    result *= n;
    if (result >= topLimit) {
      result = result%10000000000;
    }
  }
  sum +=result;
}
var str = sum + " ";
return str.slice(-11);
}

console.log(sum(10));