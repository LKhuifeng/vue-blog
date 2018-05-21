const express = require('express')

const Router = express.Router()

const models = require('./model')
const User = models.getModel('user')



Router.post('/AdminLogin',function(req,res){
    const { name,password } = req.body
    req.session.name = name
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

Router.get('/isLogin',function(req,res){
    if(!req.session.name){
        return res.json({code:1,msg:'未登录'})
    }else{
        return res.json({code:0,msg:req.session.name})
    }
})

Router.get('/outLogin',function(req,res){
    if(req.session.name){
        req.session.name = null
        return res.json({code:0,msg:'注销成功'})
    }else{
        return res.json({code:1,msg:'后端出错'})
    }
})

Router.post('/AdminRegister',function(req,res){
    const { name, password, repassword } = req.body
    const registerOne = new User({
        user: name,
        pwd: password
    })
    User.findOne({"user":name},function(e,d){
        if(d){
            return res.json({code:2,msg:'该账号已存在'})
        }else{
            registerOne.save(function(e,d){
                if(e){
                    return res.json({code:1,msg:'后端出现错误'})
                }else{
                    return res.json(d)
                }
            })
        }
    })
})

module.exports = Router