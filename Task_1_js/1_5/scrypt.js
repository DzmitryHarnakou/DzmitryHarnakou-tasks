get_value.onclick = function () {

    var arithmeticAverageString = document.getElementById('input_arr').value;
    var arithmeticAverageArr = arithmeticAverageString.split(',');
    
    document.getElementById('output_value').innerHTML = getArithmeticAverage(arithmeticAverageArr);

    function getArithmeticAverage(arithmeticAverageArr) {
        var sum = 0;
        for (var i = 0; i < arithmeticAverageArr.length; i++) {
            sum += parseInt(arithmeticAverageArr[i]);
        }
        var arithmeticAverage = sum / arithmeticAverageArr.length;
        return arithmeticAverage;
    }

}