function promiseTimeout(ms) {
    return new Promise((resolve, rejisct) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log("Done !!");
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log("Also Done ");
        return Promise.resolve(42);
    })
    .then((result) => {
        console.log(result);

    })
    .then(() => {
        console.log("Error! ");
    });