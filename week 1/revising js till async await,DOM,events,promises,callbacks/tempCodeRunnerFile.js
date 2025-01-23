// ----------callback hell -nested callback stacked in the form of pyramid
// function getdata(dataID, nextdata) {
//     setTimeout(() => {
//         console.log("data", dataID);
//         if (nextdata) {
//             nextdata();
//         }
//     }, 2000);
// }
// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3, () => {
//         })
//     });
// })
