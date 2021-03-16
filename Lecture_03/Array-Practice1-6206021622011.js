let values1=['Apple',1,3]
let values2=['Frise',2,true]
let values3=['Mars',"s",false]
let ans=[]

let x = values1.length

for(let i=0;i<x;i++){
if(typeof values1[i]===typeof values2[i] && typeof values1[i]===typeof values3[i]){
    ans[i]=true
}else{ ans[i]=false}
}
console.log(ans)