get_value.onclick = function () {

  var inputString = document.getElementById('input_arr').value;
  var inputArr = inputString.split(',');

  document.getElementById('output_value').innerHTML = getUnique(inputArr);

  function getUnique(inputArr) {
    var objWithUniqueStr = {};

    for (var i = 0; i < inputArr.length; i++) {
      var objectKey = inputArr[i];
      objWithUniqueStr[objectKey] = true;
    }

    return Object.keys(objWithUniqueStr);
  }

}