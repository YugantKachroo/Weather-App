const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=a21f077d1e34429e8b99745463c2202c&query=New%20York'

request({url: url, json:true}, (error,response)=>{
    console.log(response.body)


})