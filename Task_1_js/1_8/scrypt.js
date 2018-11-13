get_value.onclick = function () {

    var inputString = document.getElementById('input_word').value;

    document.getElementById('output_value').innerHTML = isPolindrom(inputString);

    function isPolindrom(inputString) {
        var outputBoolean = false;
        var checkWordInLowerCase = inputString.toLowerCase();
        var reverseSplitCheckWordInLowerCase = checkWordInLowerCase.split('').reverse();
        var reverseCheckWordInLowerCase = reverseSplitCheckWordInLowerCase.join('');
        if (checkWordInLowerCase == reverseCheckWordInLowerCase) {
            outputBoolean = true;
        }
        return outputBoolean;
    }
}