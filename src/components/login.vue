<template>
    <div class="login">
        <div class="login-form">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
                <h3>后台登陆</h3>
                <el-form-item prop="name">
                    <el-input v-model="ruleForm.name" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                    <el-button type="success" @click="resigerForm()" plain>注册</el-button>
                    <div class="other">
                        <a href="#">忘记密码</a>
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            const checkName = (rule, value, callback) => {
                const nameReg = /^[\w\?%&=\-_]+$/
                if (!value) {
                    return callback(new Error('账号不能为空'))
                }else if(!nameReg.test(value)){
                    return callback(new Error('账号只能是数字、字母和符号'))
                }else{
                    callback()
                }
            }
            const checkpw = (rule, value, callback) => {
                const pwReg = /^\w{4,16}$/
                if (!value) {
                    return callback(new Error('密码不能为空'))
                }else if(!pwReg.test(value)){
                    return callback(new Error('只能是由4~16位数字、字母组成的密码'))
                }else{
                    callback()
                }
            }
            return {
                ruleForm: {
                    name: '',
                    password: ''
                },
                rules: {
                    name: [
                        { validator: checkName,trigger: 'blur' }
                    ],
                    password: [
                        { validator: checkpw,trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post('/api/admin/AdminLogin',{
                            name: this.ruleForm.name,
                            password: this.ruleForm.password
                        })
                            .then(function(res){
                                console.log(res.data)
                                if(res.data.code==2){
                                    alert(res.data.msg)
                                }
                                else if(res.data.code==1){
                                    alert(res.data.msg)
                                }else{
                                    alert("成功登陆")
                                }
                            })
                            .catch(function(err){
                                console.log(err)
                            })
                    } else {
                        console.log('error submit!!')
                        return false;
                    }
                })
            },
            resigerForm(){
                if(false){
                    alert('error!')
                }else{
                    this.axios.get('/api/router/info')
                        .then(function(res){
                            console.log(res)
                        })
                        .catch(function(err){
                            console.log(err)
                        })
                }
            }
        },
    }
</script>

<style lang="less">
    .login{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background: #001e3e;
        .login-form{
            width: 400px;
            padding: 12px 36px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
            box-shadow: 0px 0px 5px #ddd;
            background: #fff;
            .el-input,.el-button,.other{
                margin: 5px 0;
            }
            .el-button{
                width: 100%;
            }
            .other{
                display: flex;
                justify-content: flex-end;
                a{
                    font-size: 12px;
                    color: #aaa;
                }
            }
        }
    }
</style>

