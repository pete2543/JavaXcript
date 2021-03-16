let furnture = ['Table','Chairs','Couch'];

for(let i = 0 ; i < furnture.length ; i++){
    let iterator = furnture[i][Symbol.iterator]();

    while (true) {
        let result = iterator.next();
         if (result.done) break;
        console.log(result.value);// outputs characters one by one
    }
}