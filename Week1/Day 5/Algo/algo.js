var arr =["a", "b", "c", "d", "e"];
function reverse(array){
    var newArray = [];
    for (var i = array.length-1 ; i >-1 ; i--){
        // console.log(array[i]);
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverse(arr));

function reverse2(array){
    for (var i = 0 ; i <= (array.length / 2) - 1 ; i++){
        var temp = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = temp;
    }
    return array ;
}
console.log(reverse2(arr));