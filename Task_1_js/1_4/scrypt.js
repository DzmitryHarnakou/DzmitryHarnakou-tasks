get_value.onclick = function () {

  var maxValue = document.getElementById('max_value').value;
  
  document.getElementById('output_value').innerHTML = sum(maxValue);

  function sum(maxValue) {
    var sum = 0;
    for (var n = 1; n <= maxValue; n++) {
      var result = 1;
      var topLimit = 100000000000;
      for (var m = 1; m <= n; m++) {
        result *= n;
        if (result >= topLimit) {
          result = result % 10000000000;
        }
      }
      sum += result;
    }
    var str = String(sum);
    return str.slice(-10);
  }

}