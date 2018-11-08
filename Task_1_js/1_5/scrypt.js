get_value.onclick = function () {

    var arithmeticAverageString = document.getElementById('input_arr').value;
    var arithmeticAverageArr = arithmeticAverageString.split(',');

    function getArithmeticAverage(arithmeticAverageArr) {
        var sum = 0;
        for (var i = 0; i < arithmeticAverageArr.length; i++) {
            sum += parseInt(arithmeticAverageArr[i]);
            console.log(sum);
        }
        var arithmeticAverage = sum / arithmeticAverageArr.length;
        return arithmeticAverage;
    }

    document.getElementById('output_value').value = getArithmeticAverage(arithmeticAverageArr);
}