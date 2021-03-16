function promiseTimeout(ms){
    return new Promise((resolove,rejext)=>{
        setTimeout(resolove,ms);
    });
}

async function run(){
    //logic
    console.log("Start!!");
    await promiseTimeout(2000);
    console.log("Stop!!");
}

run();
