function square(n) {
    return n * n
}


function sumofsomething(a, b, callback) {
    console.log(a)
    console.log(b)
    console.log(callback)
    
    let value = callback(a);
    let value2 = callback(b);
    return value + value2

}


console.log(sumofsomething(2, 2, function(n) {
    return n * n * n
}))