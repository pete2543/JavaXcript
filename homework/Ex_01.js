function numberSplit(num){
  var n=[];
  var num1=Math.floor(num/2);
  var num2=num-num1;
  n.push(num1);
  n.push(num2);
  return(n);
}
console.log(numberSplit(10));
console.log(numberSplit(4));
console.log(numberSplit(-9));