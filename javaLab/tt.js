function removeDups(x){
    let AA = Array.from(new Set(x))
    return AA
}
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Tayler","John"]));
if (/^(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?).(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?).(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?).(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)$/.test(ipaddress)) {
        return (true)
    }
    return (false)