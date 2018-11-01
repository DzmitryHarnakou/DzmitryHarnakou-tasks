var m = 5; //колличество четных чисел фибоначчи
var n = 100000; //колличество чисел фибоначчи
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


//функция выводящая массив m четных чисел фибоначчи
function getLimitedFibEvenNumbers (getfibEvenNumbersarr, m) {
    var getLimitedFibEvenNumbers = [];
    for (var g = 0; g < m ; g++) {
        getLimitedFibEvenNumbers.push(getfibEvenNumbersarr[g]);
    }
    return getLimitedFibEvenNumbers;
}

var getLimitedFibEvenNumbers = getLimitedFibEvenNumbers(getfibEvenNumbersarr, m);

//функция выводящая сумму  m первых четных чисел фибоначчи
function getLimitedFibEvenNumbersSum (getLimitedFibEvenNumbers) {
    var getLimitedFibEvenNumbersSum = 0;
    for (var j = 0; j < getLimitedFibEvenNumbers.length; j++) {
        getLimitedFibEvenNumbersSum += getLimitedFibEvenNumbers[j];
    }
    return getLimitedFibEvenNumbersSum;
}

alert (getLimitedFibEvenNumbersSum(getLimitedFibEvenNumbers));