const path = require('path')
const express = require ('express')

const app = express()
const publicDirectoryPath = path.join(__dirname + '/../public')

app.set('view engine', 'hbs')

app.use(express.static(publicDirectoryPath))


app.get('', (req,res)=>{

    res.render('index', {
        title: 'Weather',
        name: 'Yugant'
    })
})

app.get('/about', (req,res)=>{

    res.render('about', {
        title: 'Weather',
        name: 'Yugant'
    })
})

app.get('/help', (req,res)=>{

    res.render('help', {
        title: 'Weather',
        name: 'Yugant'
    })
})

app.get('/weather', (req,res)=>{

    res.send("Welcome to weather page")
})

app.listen(3000, ()=>
{
   console.log("Express is running.")

}
)