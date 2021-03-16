function HighestDigit(num){
   
    const number= num.toString().split('').sort().reverse();
    const num1=  parseInt(number);
    return(num1);
}
console.log(HighestDigit(379));
console.log(HighestDigit(2));
console.log(HighestDigit(377401));