// function Shirishread(){
//     let p=new Promise(function(resolve){

//         setTimeout(resolve,3000)
//         console.log("hello")
//     });

//     return p;
// }

// const value=Shirishread();
// value.then(function(){

//     console.log("it is resolving here")
// });

function Shirishread(){
    let p=new Promise(function(resolve){

        setTimeout(resolve,3000)
        console.log("hello")
    });

    return p;
}

Shirishread().then(function(){

    console.log("it is resolving here")
});
