var checkWord = "ДОХОД"
function isPolindrom(checkWord) {
    var outputBoolean = false;
    var checkWordInLowerCase = checkWord.toLowerCase();
    var reverseSplitCheckWordInLowerCase = checkWordInLowerCase.split('').reverse();
    var reverseCheckWordInLowerCase = reverseSplitCheckWordInLowerCase.join('');
    console.log (checkWordInLowerCase);
    console.log (reverseCheckWordInLowerCase);
    if (checkWordInLowerCase == reverseCheckWordInLowerCase) {
        outputBoolean = true;
    }
    return outputBoolean;
}
alert (isPolindrom(checkWord));