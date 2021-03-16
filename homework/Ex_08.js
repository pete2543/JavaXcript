function simplePair(arr, n) {
   
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if(arr[i]*arr[j]===n ){
                    return"["+arr[i]+","+arr[j]+"]";
                }
            }
        }
    }
    
}
console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));