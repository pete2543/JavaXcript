function creatrQuote(quonte,callback) {
    let myQuote = "Like I always say, " +quonte;
    callback(myQuote);
}

function logQuote(quonte) {
    console.log(quonte + 'Yes...');
}

creatrQuote("you will getting better!",logQuote);