function yayDrNay() {
    return new Promise((resolove, reject) => {
        const val = Math.round(Math.random() * 1);
        // 0 or 1, random
        val ? resolove("Lucky!!") : reject("Nope ");
    });
}
async function msg() {
    try {
        const msg = await yayDrNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}
msg();
msg();
msg();
msg();
msg();
msg();
msg();