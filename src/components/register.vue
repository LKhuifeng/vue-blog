<template>
    <div class="register">
        <div class="register-form">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
                <h3>注册</h3>
                <el-form-item prop="name">
                    <el-input v-model="ruleForm.name" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item prop="repassword">
                    <el-input type="password" v-model="ruleForm.repassword" placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认注册</el-button>
                    <router-link to="login">
                        <el-button type="success" plain>返回登录</el-button>
                    </router-link>
                    <div class="other">
                        <a href="#">忘记密码</a>
                    </div>
                </el-form-item>
            </el-form>
        </div>
        <!--提示框-->
        <el-dialog
            title="注册失败"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>{{dialogMsg}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            :visible.sync="centerDialog2"
            width="30%"
            center>
            <span>注册成功</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="registerSuccess()">确 定</el-button>
            </span>
        </el-dialog>
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
            const checkrepw = (rule, value ,callback) => {
                if (!value) {
                    return callback(new Error('确认密码不能为空'))
                }else if(this.ruleForm.password != value){
                    return callback(new Error('密码和确认密码不同'))
                }else{
                    callback()
                }
            }
            return {
                dialogMsg: '',
                centerDialogVisible: false,
                centerDialog2: false,
                ruleForm: {
                    name: '',
                    password: '',
                    repassword: ''
                },
                rules: {
                    name: [
                        { validator: checkName,trigger: 'blur' }
                    ],
                    password: [
                        { validator: checkpw,trigger: 'blur' }
                    ],
                    repassword: [
                        { validator: checkrepw,trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post('/api/admin/AdminRegister',{
                            name: this.ruleForm.name,
                            password: this.ruleForm.password
                        })
                            .then((res)=>{
                                console.log(res.data)
                                if(res.data.code==2){
                                    this.dialogMsg = res.data.msg
                                    this.centerDialogVisible = true
                                }
                                else if(res.data.code==1){
                                    this.dialogMsg = res.data.msg
                                    this.centerDialogVisible = true
                                }else{
                                    this.centerDialog2 = true
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
            loginForm(){
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
            },
            registerSuccess(){
                this.centerDialog2 = false
                this.$router.replace({ path: 'login'})
            }
        },
}
</script>

<style lang="less">
    .register{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background: #001e3e;
        .register-form{
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
