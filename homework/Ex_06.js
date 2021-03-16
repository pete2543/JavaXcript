function removeDups(arr){

    let AA = Array.from(new Set(arr))
    return AA
}
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["Johon","Taylor","Johon"]));