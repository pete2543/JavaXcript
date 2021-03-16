function totalVolume(argument){
    console.log(arguments);
    let sum=0; 
    let num;
    for(let i=0;i<argument.length;i++) {

        for(let j=0;j<1;j++) {
            num= argument[i][j]*argument[i][j+1]*argument[i][j+2];    
        }
        sum+=num;
    }    

    return(sum);
}
console.log(totalVolume([[2,2,2],[2,2,2]]));