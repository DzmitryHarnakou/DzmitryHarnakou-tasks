
//!!!!!!!!!!!!!!!!!!!//
//Определить, является ли фраза/слово полиндромом
var word = "ДОХОД"
function isPolindrom(word) {
    var splitWord = word.split('');
    var reverseSplitWord = word.split('').reverse();
    for (var i = 0; i < splitWord.length; i++){
        if (splitWord[i] == reverseSplitWord[i]) {
            return true;
        }
        else {
            return false;
        }
    }
}
alert (isPolindrom(word));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//Найти сумму цифр данного числа
