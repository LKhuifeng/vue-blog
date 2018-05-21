const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser')

const model = require('./model')

const Router = require('./router')
const Login = require('./login')

const app = express()

//接受post
app.use(bodyParser.json())

app.use(cookieParser('gaisession'))
app.use(session({
    secret:'gaisession',//密匙，与cookieParser一致
    cookie:{
        path: '/',//session的路径要一致否则不会创建
        maxAge: 200000
    },
    resave: false,
    saveUninitialized: true
}))

app.use('/admin',Login)
app.use('/router',Router)


app.listen(9093,function(){
    console.log('Node app start at port 9093')
})