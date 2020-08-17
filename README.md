# E-commerce

## install

- npm init -y

- npm i express dotenv nodemon

- create file(.env and .gitignore)



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