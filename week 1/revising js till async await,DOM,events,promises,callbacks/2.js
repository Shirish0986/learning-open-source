/* Get user to input a number using prompt(“Enter a number: ”). Check if the number is a multiple of 5 or not.*/

function n(n) {
    if (n % 5 == 0) {
        console.log("its multiply of 5")
    }
    else {
        console.log("not")
    }
}
n(3)

console.log("q2 :")
// ==============q2===============================
// Qs2. Write a code which can give grades to students according to their scores:

let score=50
if (score > 90) {
    console.log("A")
}
if (score <= 80 && score >= 60) {
    console.log("B")
}
if (score < 60) {
    console.log("c")
}
