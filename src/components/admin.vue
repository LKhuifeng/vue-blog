<template>
    <el-container>
        <slide></slide>
        <container></container>
    </el-container>
</template>

<script>
import slide from './components/slide'
import container from './components/container'

export default {
    components: {slide,container},  
    data(){
        return {
            items:[]
        }
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
    }
}
</script>

<style lang="less">

</style>
