const request = require("postman-request")

const {geocode} = require('./geocode')
const {getWeather} = require('./getWeather')

geocode('Jahangirpuri Delhi',(error,response)=>{
    if(error)
    {
        return console.log(error);
    }
    
    console.log(response.lat+" "+response.lang+" "+response.location);
    getWeather(response.lat,response.lang,(error,response)=>{
        if(error)
        {
            return console.log(error);
        }
        console.log(response)
    })
    
})










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