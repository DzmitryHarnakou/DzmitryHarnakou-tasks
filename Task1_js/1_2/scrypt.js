var n = 1000000; //максимальное значение диапазона
var m = 100; //колличество простых чисел
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

var outputarr = getAllSimpleNumbers(n,arr)
//функция выводящая массив простых чисел ограниченный по колличеству
function getLimitetSimplenumbers (m, outputarr){
    var newarr=[];
    for (var j = 0; j < m; j++) {
        newarr.push (outputarr[j]);
    }
    return newarr;
}

console.log ( getLimitetSimplenumbers(m, outputarr));