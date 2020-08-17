const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


//app
const app = express()

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true 
}).then(()=>console.log('DB Connect'))

//routes
app.get('/', (req, res) => {
    res.send('<h1>Hello from express  afwaef</h1>')
})

const port = process.env.PORT || 8000

app.listen(port)

module.export = app
