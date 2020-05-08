const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=a21f077d1e34429e8b99745463c2202c&query=' + latitude + ',' + longitude
    request ({url: url, json: true} , (error, response)=> {
    if(error)
    {
        callback('Unable to connect to weather services', undefined)

    }
    else if(response.body.error)
    {

        callback('Unable to find location', undefined)
    }
    else
    {
        callback(undefined, response.body.current.weather_descriptions + '. It is currently ' + response.body.current.temperature)

    }

    })

}

module.exports = forecast