get_value.onclick = function () {

    var maxValue = document.getElementById('max_value').value;
    var limit = document.getElementById('limit').value;
    var fibArr = getfibNumbers(maxValue);
    var fibEvenNumbersArr = getfibEvenNumbers(fibArr);
    var limitedFibEvenNumbers = getLimitedFibEvenNumbers(fibEvenNumbersArr, limit);

    document.getElementById('output_value').innerHTML = getLimitedFibEvenNumbersSum(limitedFibEvenNumbers);

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

    function getfibEvenNumbers(fibArr) {
        fibEvenNumbersArr = [];
        for (var i = 0; i <= fibArr.length; i++) {
            if (fibArr[i] % 2 == 0) {
                fibEvenNumbersArr.push(fibArr[i]);
            }
        }
        return fibEvenNumbersArr;
    }

    function getLimitedFibEvenNumbers(fibEvenNumbersArr, limit) {
        var limitedFibEvenNumbers = [];
        for (var g = 0; g < limit; g++) {
            limitedFibEvenNumbers.push(fibEvenNumbersArr[g]);
        }
        return limitedFibEvenNumbers;
    }

    function getLimitedFibEvenNumbersSum(limitedFibEvenNumbers) {
        var limitedFibEvenNumbersSum = 0;
        for (var j = 0; j < limitedFibEvenNumbers.length; j++) {
            limitedFibEvenNumbersSum += limitedFibEvenNumbers[j];
        }
        return limitedFibEvenNumbersSum;
    }
}