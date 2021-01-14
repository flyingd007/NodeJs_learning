// const urlMapBox = "https://api.mapbox.com/geocoding/v5/mapbox.places/new%20delhi.json?access_token=pk.eyJ1IjoiZmx5aW5nZDAwNyIsImEiOiJja2pxeDljYXIyM2V1MzBtamMzb2J5bmwyIn0.R3LwRqncSrzJNAp9VQ5zgg&limit=1"

// request({url : urlMapBox, JSON : true},(error,response) => {
//     if(error)
//     {
//         console.log("unable to connect to mapBox api");
//     }else if(JSON.parse(response.body).message){
//         console.log(JSON.parse(response.body).message);
//     }else {
//         const data=JSON.parse(response.body)
//         const latLang = data.features[0].center
//         console.log(data.features[0].place_name)
//         console.log("lat "+latLang[0]+" lang "+latLang[1]);
//     }
    
// })

const request = require('postman-request')

const geocode=(address,callback) => {
    url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiZmx5aW5nZDAwNyIsImEiOiJja2pxeDljYXIyM2V1MzBtamMzb2J5bmwyIn0.R3LwRqncSrzJNAp9VQ5zgg&limit=1"

    request({url : url,JSON : true},(error,response)=>{

        if(error)
        {
            return callback("could not connect to the mapbox api",undefined)
        }
        else if(JSON.parse(response.body).message){
            return callback("location not found",undefined)
        }

        const data=JSON.parse(response.body)
        const latLang = data.features[0].center
        const location = data.features[0].place_name
        return callback(undefined,{lat:latLang[1],lang:latLang[0],location:location})
    })
}


module.exports={geocode:geocode}

