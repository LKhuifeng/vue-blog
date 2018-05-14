const mongoose = require('mongoose')
//链接mongodb 并且使用这个集合 mongoose操作mongodb存储json数据 更适合前端操作
const DB_URL = 'mongodb://127.0.0.1:27017/blog'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mogo connect success')
})
//数据库模型
const models = {
    user:{
        'user':{'type':String, 'require':true},
        'pwd':{'type':String, 'require':true},
        'type':{'type':String, 'require':true},
        //头像
        'avatar':{'type':String},
    }
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}