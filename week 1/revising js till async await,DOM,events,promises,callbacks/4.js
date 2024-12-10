let heroes = ["superman", "hulk", "mom", "dad"];
console.log(heroes.length)
console.log(heroes[1])
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
console.log("==================")
// ===========================new question==========

let marks = [23, 24, 45, 56, 65, 56];
sum=0
let avg;
for (let val of marks) {
    avg=(sum += val)/marks.length;
}
console.log(avg)

console.log("==================================")

// ===================================================
let newarray=[]
let items =[250, 645, 300, 900, 50]
for(let i=0; i<items.length; i++){
    let discountedrpice=items[i]-(items[i]*0.1);
    newarray.push(discountedrpice)
}
console.log(newarray)

// ======================================================

arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
arr.shift();
arr.splice(1,1,"ola")
arr.push("amazon")
console.log(arr);