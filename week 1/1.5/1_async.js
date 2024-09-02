function findSum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i
    }
    console.log(ans)
}

function aftersettime() {
    return findSum(100);
}

setTimeout(aftersettime, 1000)
console.log("hello")








