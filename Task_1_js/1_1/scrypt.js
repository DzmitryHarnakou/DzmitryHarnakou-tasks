get_value.onclick = function () {

    var maxValue = document.getElementById('max_value').value;
    var booleanArr = getAllNumbers(maxValue);

    document.getElementById('output_value').innerHTML = getAllSimpleNumbers(maxValue, booleanArr);

    function getAllNumbers(maxValue) {
        var booleanArr = [];
        booleanArr[1] = 0;
        for (var k = 2; k <= maxValue; k++) {
            booleanArr[k] = 1;
        }
        for (k = 2; k * k <= maxValue; k++) {
            if (booleanArr[k] == 1) {
                for (var l = k * k; l <= maxValue; l += k) {
                    booleanArr[l] = 0;
                }
            }
        }
        return booleanArr;
    }

    function getAllSimpleNumbers(maxValue, booleanArr) {
        var simpleNumArr = [];
        for (var i = 0; i <= maxValue; i++) {
            if (booleanArr[i]) {
                simpleNumArr.push(i);
            }
        }
        return simpleNumArr;
    }

}