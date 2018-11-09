get_value.onclick = function () {

    var inputString = document.getElementById('input_word').value;

    function isPolindrom(inputString) {
        var outputBoolean = false;
        var checkWordInLowerCase = inputString.toLowerCase();
        var reverseSplitCheckWordInLowerCase = checkWordInLowerCase.split('').reverse();
        var reverseCheckWordInLowerCase = reverseSplitCheckWordInLowerCase.join('');
        console.log(checkWordInLowerCase);
        console.log(reverseCheckWordInLowerCase);
        if (checkWordInLowerCase == reverseCheckWordInLowerCase) {
            outputBoolean = true;
        }
        return outputBoolean;
    }
    document.getElementById('output_value').innerHTML = isPolindrom(inputString);
}