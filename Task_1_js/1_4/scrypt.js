//Серия чисел, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317 (^ - степень числа). Найдите 10 последних цифр результата такой последовательности,
//для заданного n. 1 <= n <= 1000


function powm(m, l){
  summ = 0;
  var n = 1;
  var finResult;
  var result = 1;
  for (n ; n <= m ; n++){
      result *= l;
  }
  return result;
}

console.log (powm(4,4));
