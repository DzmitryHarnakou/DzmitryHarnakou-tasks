

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//Создать массив уникальных элементов
var arr= [1, 'word', 1, 'word', 'word', 'word1'];

function uniq(arr) {
    var uniqArr = [];
    nextInput:
      for (var i = 0; i < arr.length; i++) {
        var elem = arr[i]
        for (var j = 0; j < uniqArr.length; j++) {
          if (uniqArr[j] == elem) continue nextInput;
        }
        uniqArr.push(elem);
      }
    return uniqArr;
  }

alert( uniq(arr) );