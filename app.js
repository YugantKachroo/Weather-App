const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=a21f077d1e34429e8b99745463c2202c&query=New%20York?'

request({url: url, json:true}, (error,response)=>{
    console.log(response.body.current.weather_descriptions + ' It is currently ' + response.body.current.temperature)


})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieXVnYW50IiwiYSI6ImNrOXZlcWk3ZjBheGwzbW1vZTk3Z25kZGUifQ.YhSqsZWvGQ9vmyLDScaymQ&limit=1'
request({url: geocodeURL, json:true},(error,response)=>
{
    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]
    console.log(lat, long)

})