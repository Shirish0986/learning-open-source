
function readfile() {
    let p = new Promise(function (resolve) {
        console.log(Promise)
        console.log(resolve);
        resolve("hi there")
    })
    return p;
}

async function main() {
    const value = await readfile();
    console.log(value);

}

main();