const express = require('express')

const Router = express.Router()

const models = require('./model')
const User = models.getModel('user')

//增
Router.get('/add',function(req,res){
    const someone = {
        user: 'gaosi',
        pwd: '123',
        type: 'auth',
        avatar: ''
    }
    const someoneUser = new User({user:someone.user,pwd:someone.pwd,type:someone.type})
    someoneUser.save(function(e,d){
        if(e){
            return res.json({code:1,msg:'后端出现错误'})
        }else{
            return res.json(d)
        }
    })
})
//删
Router.get('/delete',function(req, res){
    User.findOneAndRemove({"user":"gaosi"},function(e,d){
        if(e){
            return res.json({code:1,msg:'后端出现错误'})
        }else{
            return res.json(d)
        }
    })
})
//改
Router.get('/updata',function(req, res){
    User.findOneAndUpdate({user:"gaosi"},{user:"gaiusk"},function(e,d){
        if(e){
            return res.json({code:1,msg:'后端出现错误'})
        }else{
            return res.json(d)
        }
    })
})
//查
Router.get('/info',function(req, res){
    User.find({},function(e,d){
        return res.json(d)
    })
    console.log('check finished')
})

module.exports = Router