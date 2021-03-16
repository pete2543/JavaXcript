function sumTwoSmallestNums(arr) {
  arr.sort(function(a, b) {
      return a - b;
    });
  let num 
  let n = 1
  for(let i = 0 ; i < n; i++){
      if(arr[i] > -1){
          num = arr[i] + arr[i+1]
      }else{
          n += 1
      }
  }
  return num
}
console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([897,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,-475,1617,-2385,]));