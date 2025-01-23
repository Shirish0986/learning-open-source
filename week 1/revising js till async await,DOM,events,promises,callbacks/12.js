function getdata(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("success")
        }, 2000);
    })

}

// // ----------callback hell -nested callback stacked in the form of pyramid

getdata(1, () => {
    getdata(2, () => {
        getdata(3, () => {
        })
    });
})


// // ==============================promise chain in getdata done by myself...

getdata(1)
    .then((res) => {
        return getdata(2);
    })
    .then((res) => {
        console.log(res)
    })


// ===================async await in getdata

async function getdataofall() {
    await getdata(1);
    await getdata(2);
    await getdata(3);
}

getdataofall();


//  -- we have noticed that asycn await is easy compare to promise chaining and callback- hell
//  but asyn await needs a other function and we have to call that function ..since both the other dont have to put in other function..
// there will a situation where we have to run the code immeditaley and that particular code can be used only once when we run that particular function 
// IIFE : Immediately Invoked Function Expression

// IIFE is a function that is called immediately as soon as it is defined.

(async function getdataofall() {
    await getdata(1);
    await getdata(2);
    await getdata(3);
})();

// this is do work immedaity and only onces.. if we have to use the same function again we have to copy paste the code ....