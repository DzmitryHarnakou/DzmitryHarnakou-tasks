var n = 1000000000; //максимальное значение диапазона
//функция выводящая массив единиц и нулей, где индекс - значение из диапазона, а значение: 1- простое число, 2-сложное
function getAllNumbers (n){ 
var arr = [];
arr[1] = 0;
for (var k = 2; k <= n; k++){
    arr[k] = 1;
}
for (k = 2; k*k<=n; k++){
    if(arr[k] == 1) {
        for (var l=k*k; l<=n; l+=k){
            arr[l] = 0;
        }
    }
}
return arr;
}

var arr = getAllNumbers(n);
//функция выводящая массив простых чисел из индексов функции getAllNumbers
function getAllSimpleNumbers (n, arr){
    var outputarr = [];
    for (var i = 0; i <= n; i++){
        if (arr[i]) {
            outputarr.push (i);
        } 
    }
    return outputarr;
}

console.log (getAllSimpleNumbers(n, arr));