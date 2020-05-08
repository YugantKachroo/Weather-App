const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=a21f077d1e34429e8b99745463c2202c&query=' + latitude + ',' + longitude
    request ({url, json: true} , (error, {body})=> {
    if(error)
    {
        callback('Unable to connect to weather services', undefined)

    }
    else if(body.error)
    {

        callback('Unable to find location', undefined)
    }
    else
    {
        callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees.')

    }

    })

}

module.exports = forecast