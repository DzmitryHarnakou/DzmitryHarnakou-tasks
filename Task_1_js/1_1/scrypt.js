get_value.onclick = function () {

    var maxValue = document.getElementById('max_value').value;
    var sieveOfEratosthenes = getSieveOfEratosthenes(maxValue);

    document.getElementById('output_value').innerHTML = getAllSimpleNumbers(maxValue, sieveOfEratosthenes);


    /** @description Gets array of boolean meanings, where value display, is array index simple number,
     * by the sieve of Eratosthene. (Sieve of Eratosthene method).  
     * @param {number} maxValue Last number of sieve and last index of array.  
     */
    function getSieveOfEratosthenes(maxValue) {
        var sieveOfEratosthenesArr = [];
        sieveOfEratosthenesArr[1] = false;
        for (var k = 2; k <= maxValue; k++) {
            sieveOfEratosthenesArr[k] = true;
        }
        for (k = 2; k * k <= maxValue; k++) {
            if (sieveOfEratosthenesArr[k]) {
                for (var l = k * k; l <= maxValue; l += k) {
                    sieveOfEratosthenesArr[l] = false;
                }
            }
        }
        return sieveOfEratosthenesArr;
    }

    function getAllSimpleNumbers(maxValue, sieveOfEratosthenes) {
        var simpleNumArr = [];
        for (var i = 0; i <= maxValue; i++) {
            if (sieveOfEratosthenes[i]) {
                simpleNumArr.push(i);
            }
        }
        return simpleNumArr;
    }

}