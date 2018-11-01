
var arithmeticAverageArr = [1,2,3,4,5];

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

alert (max(arithmeticAverageArr));