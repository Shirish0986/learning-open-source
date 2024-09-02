function square(n) {
    return n * n
}
function cube(n) {
    return n * n * n
}

function sumofsomething(a, b, callback) {
    let value = callback(a);
    let value2 = callback(b);
    return value + value2

}


console.log(sumofsomething(2, 2, square))