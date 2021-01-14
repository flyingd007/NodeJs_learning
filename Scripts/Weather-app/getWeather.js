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

const request = require('postman-request')


const getWeather = (lat,lang,callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=b1248f2720286ad9d6324878ae7e7289&query="+encodeURIComponent(lat)+","+encodeURIComponent(lang)

    console.log(url);

    request({url : url,JSON : true},(error,response)=>{
        if(error)
        {
            return  callback("could not connect to the weather stack api",undefined);
        }
        data=JSON.parse(response.body)
        if(data.error)
        {
            return callback(data.error.info,undefined);
        }

        return callback(undefined,data.current)
    })

}

module.exports={ getWeather:getWeather }