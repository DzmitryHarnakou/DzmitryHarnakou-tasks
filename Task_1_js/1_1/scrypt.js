get_value.onclick = function () {

    var maxValue = document.getElementById('max_value').value;
    var indexSimpleNuber = getArrayOfNumbersEqualBooleanMeaningsThatDisplayDoesIndexSImpleNumber(maxValue);

    document.getElementById('output_value').innerHTML = getAllSimpleNumbers(maxValue, indexSimpleNuber );

    function getArrayOfNumbersEqualBooleanMeaningsThatDisplayDoesIndexSImpleNumber (maxValue) {
        var isIndexSimpleNuberArr = [];
        isIndexSimpleNuberArr[1] = 0;
        for (var k = 2; k <= maxValue; k++) {
            isIndexSimpleNuberArr[k] = 1;
        }
        for (k = 2; k * k <= maxValue; k++) {
            if (isIndexSimpleNuberArr[k] == 1) {
                for (var l = k * k; l <= maxValue; l += k) {
                    isIndexSimpleNuberArr[l] = 0;
                }
            }
        }
        return isIndexSimpleNuberArr;
    }

    function getAllSimpleNumbers(maxValue, indexSimpleNuber ) {
        var simpleNumArr = [];
        for (var i = 0; i <= maxValue; i++) {
            if (indexSimpleNuber[i]) {
                simpleNumArr.push(i);
            }
        }
        return simpleNumArr;
    }

}