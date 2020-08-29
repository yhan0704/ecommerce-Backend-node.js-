# E-commerce

## install

- npm init -y

- npm i express dotenv nodemon

- create file(.env and .gitignore)

- npm install uuid

- npm i body-parser morgan(show console for request)

- npm i express-validator

- npm i express-jwt jsonwebtoken

- npm i formidable(for upload file) lodash * 

- npm i cors

----------- learning ---------

- require('dotenv').config()   <- for .env file

- start with nodeman
"scripts": {
    "start": "nodemon app.js"
    }

connect to database
- mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true 
}).then(()=>console.log('DB Connect'))

DATABASE=mongodb://localhost/ecommerce


for uuid => 
const { v1: uuidv1 } = require('uuid');