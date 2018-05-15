const express = require('express')

const Router = express.Router()

const models = require('./model')
const User = models.getModel('user')

Router.post('/AdminLogin',function(req,res){
    const { name,password } = req.body
    User.findOne({"user":name},function(e,d){
        if(!d){
            return res.json({code:2,msg:'该账号不存在'})
        }
        User.findOne({"user":name,"pwd":password},function(e,d){
            if(!d){
                return res.json({code:1,msg:"账号密码错误"})
            }
            return res.json({code:0,msg:d})
        })
    })
})

module.exports = Router