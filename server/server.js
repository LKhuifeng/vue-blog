const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')

const Router = require('./router')

const app = express()

//接受post
app.use(bodyParser.json())

app.use('/router',Router)

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})