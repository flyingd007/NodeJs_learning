// const geocode = (address,callback)=>{
//     setTimeout(()=>{
//         data={
//             lat:0,
//             long:0
//         }
//         callback(data)
//     },2000)
// }


// geocode("delhi",(data)=>{
//     console.log(data.lat+" "+data.long);
// })

const add =( num1, num2,callback)=>{
    setTimeout(()=>{
        num3=num1+num2
        callback(num3)
    
    },2000)
   
}

add(9,5,(sum)=>console.log(sum))