

const todoWorkPromise = new Promise((resolve,reject)=>{

    setTimeout(() => {
       // resolve([1, 3, 2])
        reject("errorr")
    }, 2000);
})


todoWorkPromise.then((result)=>{
    console.log('success',result);
}).catch((result)=>{
    console.log(result);
})