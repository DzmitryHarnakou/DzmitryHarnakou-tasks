var inputArr = [1, 'word', 1, 'word', 'word', 'word1'];

function getUnique(inputArr) {
  var outputObj = {};

  for (var i = 0; i < inputArr.length; i++) {
    var objectKey = inputArr[i];
    outputObj[objectKey] = true; 
  }

  return Object.keys(outputObj);
}

alert (getUnique(inputArr));