const express = require('express')
require('dotenv').config()

const app = express()


app.get('/', (req, res) => {
    res.send('<h1>Hello from express</h1>')
})

const port = process.env.PORT || 8000

app.listen(port)

module.export = app
