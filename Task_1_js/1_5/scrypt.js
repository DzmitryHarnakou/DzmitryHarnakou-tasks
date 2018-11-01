
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

alert (arithmeticAverage(arithmeticAverageArr));

