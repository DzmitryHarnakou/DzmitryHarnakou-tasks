var n = 100; //максимальное значение диапазона
var m = 5; //колличество простых чисел
//функция выводящая массив единиц и нулей, где индекс - значение из диапазона, а значение: 1- простое число, 2-сложное
function getAllNumbers (n){ 
var arr = [];
arr[1] = 0;
for (var k = 2; k <= n; k++){
    arr[k] = 1;
}
for (k = 2; k*k<=n; k++){
    if(arr[k] == 1) {
        for (var l=k*k; l<=n; l+=k){
            arr[l] = 0;
        }
    }
}
return arr;
}

var arr = getAllNumbers(n);
//функция выводящая массив простых чисел из индексов функции getAllNumbers
function getAllSimpleNumbers (n, arr){
    var outputarr = [];
    for (var i = 0; i <= n; i++){
        if (arr[i]) {
            outputarr.push (i);
        } 
    }
    return outputarr;
}

//alert (getAllSimpleNumbers(n, arr));

var outputarr = getAllSimpleNumbers(n,arr)
//функция выводящая массив простых чисел ограниченный по колличеству
function getLimitetSimplenumbers (m, outputarr){
    var newarr=[];
    for (var j = 0; j < m; j++) {
        newarr.push (outputarr[j]);
    }
    return newarr;
}

//alert ( getLimitetSimplenumbers(m, outputarr));

//!!!!!!!!!!!!!//

//функция выводящая массив n чисел фибоначчи
function getfib(n) {
    var a = 1,
        b = 1;
    var getfibArr = [1,1];
    for (var i = 3; i <= n; i++) {
      var c = a + b;
      a = b;
      b = c;
      getfibArr.push(c);
    }
    return getfibArr;
  }

var getfibArr = getfib(n);  

//функция выводящая массив четных чисел фибоначчи
function getfibEvenNumbers(getfibArr) {
    getfibEvenNumbersarr = [];
    for (var i=0; i<=getfibArr.length; i++){
        if (getfibArr[i]%2 == 0) {
            getfibEvenNumbersarr.push (getfibArr[i]);
        }
    }
    return getfibEvenNumbersarr;
}

var getfibEvenNumbersarr = getfibEvenNumbers(getfibArr);


//функция выводящая ограниченное m колличество чисел фибоначчи
function getLimitedFibEvenNumbers (getfibEvenNumbersarr, m) {
    var getLimitedFibEvenNumbers = [];
    for (var g = 0; g < m ; g++) {
        getLimitedFibEvenNumbers.push(getfibEvenNumbersarr[g]);
    }
    return getLimitedFibEvenNumbers;
}

//alert (getLimitedFibEvenNumbers (getfibEvenNumbersarr, m));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//Серия чисел, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317 (^ - степень числа). Найдите 10 последних цифр результата такой последовательности,
//для заданного n. 1 <= n <= 1000
//var sum = 0;

//function summ(sum){
//    var output = [];
//    for (var i=1; i <= 1000; i++){
//        sum += Math.pow (i,i);
//    }
//    //var sumarr = sum.split('');
//    for (var j = (sumarr.length - 1); j > (sumarr.length - 10); j--){
//        output.push(sumarr[j]);
//    }
//    return sum;
//}

//alert (summ(sum));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//Найти среднее арифметическое чисел из массива.
var arithmeticAverageArr = [1,2,3,4,5];
function arithmeticAverage(arithmeticAverageArr) {
    var sum = 0;
    for (var i = 0; i < arithmeticAverageArr.length; i++) {
        sum = sum + arithmeticAverageArr[i];
    }
    var arithmeticAverage = sum/arithmeticAverageArr.length;
    return arithmeticAverage;
}

//alert (arithmeticAverage(arithmeticAverageArr));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//Найти максимальное число в массиве.
function max(arithmeticAverageArr) {
    var max =  0
    for (var i = 0; i < arithmeticAverageArr.length; i++){
        for (var j = 0; j < arithmeticAverageArr.length; j++){
            if (arithmeticAverageArr[j]>arithmeticAverageArr[i]) {
                max = arithmeticAverageArr[j];
            } else {
            }
        }
    }
    return max;
}

//alert (max(arithmeticAverageArr));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//Создать массив уникальных элементов
var arr= [1, 'word', 1, 'word', 'word', 'word1'];

function uniq(arr) {
    var uniqArr = [];
    nextInput:
      for (var i = 0; i < arr.length; i++) {
        var elem = arr[i]
        for (var j = 0; j < uniqArr.length; j++) {
          if (uniqArr[j] == elem) continue nextInput;
        }
        uniqArr.push(elem);
      }
    return uniqArr;
  }

//alert( uniq(arr) );

//!!!!!!!!!!!!!!!!!!!//
//Определить, является ли фраза/слово полиндромом
var word = "ДОХОД"
function isPolindrom(word) {
    var splitWord = word.split('');
    var reverseSplitWord = word.split('').reverse();
    for (var i = 0; i < splitWord.length; i++){
        if (splitWord[i] == reverseSplitWord[i]) {
            return true;
        }
        else {
            return false;
        }
    }
}
//alert (isPolindrom(word));

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

//alert (sum(str));