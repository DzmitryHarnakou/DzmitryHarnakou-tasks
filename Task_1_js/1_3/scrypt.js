get_value.onclick = function () {

    var maxValue = document.getElementById('max_value').value;
    var limit = document.getElementById('limit').value;

    function getfibNumbers(maxValue) {
        var previousFibNuber = 1;
        var fibNumber = 1;
        var fibArr = [1, 1];
        for (var i = 3; i <= maxValue; i++) {
            var nextFibNumber = previousFibNuber + fibNumber;
            previousFibNuber = fibNumber;
            fibNumber = nextFibNumber;
            fibArr.push(nextFibNumber);
        }
        return fibArr;
    }

    var fibArr = getfibNumbers(maxValue);

    function getfibEvenNumbers(fibArr) {
        fibEvenNumbersArr = [];
        for (var i = 0; i <= fibArr.length; i++) {
            if (fibArr[i] % 2 == 0) {
                fibEvenNumbersArr.push(fibArr[i]);
            }
        }
        return fibEvenNumbersArr;
    }

    var fibEvenNumbersArr = getfibEvenNumbers(fibArr);

    function getLimitedFibEvenNumbers(fibEvenNumbersArr, limit) {
        var limitedFibEvenNumbers = [];
        for (var g = 0; g < limit; g++) {
            limitedFibEvenNumbers.push(fibEvenNumbersArr[g]);
        }
        return limitedFibEvenNumbers;
    }

    var limitedFibEvenNumbers = getLimitedFibEvenNumbers(fibEvenNumbersArr, limit);

    //функция выводящая сумму  m первых четных чисел фибоначчи
    function getLimitedFibEvenNumbersSum(limitedFibEvenNumbers) {
        var limitedFibEvenNumbersSum = 0;
        for (var j = 0; j < limitedFibEvenNumbers.length; j++) {
            limitedFibEvenNumbersSum += limitedFibEvenNumbers[j];
        }
        return limitedFibEvenNumbersSum;
    }

    document.getElementById('output_value').value = getLimitedFibEvenNumbersSum(limitedFibEvenNumbers);
}