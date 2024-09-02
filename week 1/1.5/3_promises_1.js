function shirishreadfile(){
    let p= new Promise(function(resolve){
        resolve("hi here");
    });
    return p;
}



function onDone(data){
    console.log(data)
}

shirishreadfile().then(onDone);