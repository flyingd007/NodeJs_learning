const request = require("postman-request")
// const fs=require("fs")
// const url = 'http://api.weatherstack.com/current?access_key=b1248f2720286ad9d6324878ae7e7289&query=77.2,28.7'

// request({url : url,JSON:true},(error,response) => {
//     if(error){
//         console.log("Could not connect to weather stack api");
//     }else if(JSON.parse(response.body).error)
//     {
//         console.log(JSON.parse(response.body).error.info);
//     }
//     else{
//         data=JSON.parse(response.body)
//         fs.writeFileSync("./weather.JSON",JSON.stringify(data.current))
//         console.log(data.current);
//     }
// })

const urlMapBox = "https://api.mapbox.com/geocoding/v5/mapbox.places/new%20delhi.json?access_token=pk.eyJ1IjoiZmx5aW5nZDAwNyIsImEiOiJja2pxeDljYXIyM2V1MzBtamMzb2J5bmwyIn0.R3LwRqncSrzJNAp9VQ5zgg&limit=1"

request({url : urlMapBox, JSON : true},(error,response) => {
    if(error)
    {
        console.log("unable to connect to mapBox api");
    }else if(JSON.parse(response.body).message){
        console.log(JSON.parse(response.body).message);
    }else {
        const data=JSON.parse(response.body)
        const latLang = data.features[0].center
        console.log(data.features[0].place_name)
        console.log("lat "+latLang[0]+" lang "+latLang[1]);
    }
    
})