get_value.onclick = function () {

    var inputStringOfNumbers = document.getElementById('input_value').value;

    function sum(inputStringOfNumbers) {
        var arr = inputStringOfNumbers.split('');
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum = sum + parseInt(arr[i]);
        }
        return sum;
    }
    document.getElementById('output_value').innerHTML = sum(inputStringOfNumbers);
}