get_value.onclick = function () {

    var inputString = document.getElementById('input_arr').value;
    var inputArr = inputString.split(',');

    document.getElementById('output_value').innerHTML = getMaxValue(inputArr);

    function getMaxValue(inputArr) {
        var maxValue = 0
        for (var i = 0; i < inputArr.length; i++) {
            for (var j = 0; j < inputArr.length; j++) {
                if (parseInt(inputArr[j]) > parseInt(inputArr[i])) {
                    maxValue = parseInt(inputArr[j]);
                }
            }
        }
        return maxValue;
    }
}