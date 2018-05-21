<template>
    <div>
        <p>已经登录</p>
        <el-button type="primary" @click="outLogin()">注销</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    beforeCreate: function(){
        var outAdmin = ()=>{
            alert('你还未登录')
            this.$router.replace({ path: 'login'})
        }
        this.axios.get('/api/admin/isLogin')
            .then((res)=>{
                res.data.code?outAdmin():null
            })
            .catch(function(err){
                console.log(err)
            })
    },
    methods:{
        outLogin(){
            this.axios.get('/api/admin/outLogin')
                .then((res)=>{
                    res.data.code?(alert('后端出错')):(this.$router.replace({ path: 'login'}))
                })
                .catch(function(err){
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="less">

</style>
