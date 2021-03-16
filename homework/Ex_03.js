function capToFront(s) {
    var sp = s.split("");
    var caps = []; 
    var lower = []
    for (var i = 0; i < sp.length; i++)
        {
            if (sp[i] == sp[i].toUpperCase()){
                caps.push(sp[i]);
            }
            if (sp[i] == sp[i].toLowerCase()){
                lower.push(sp[i]);
            }
        }
    return caps.join("").concat(lower.join(""));
}
console.log(capToFront('dadSDA'));