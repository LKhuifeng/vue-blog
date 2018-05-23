<template>
    <el-container>
        <el-header>
            <el-row :gutter="20">
                <el-col :span="1">
                    <i class="el-icon-arrow-left"></i>
                </el-col>
                <el-col :span="3">Admin</el-col>
                <el-col :span="3" :offset="17">
                    <el-dropdown trigger="click"  @command="outLogin">
                        <el-button type="primary">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">个人信息</el-dropdown-item>
                            <el-dropdown-item command="b">开源地址</el-dropdown-item>
                            <el-dropdown-item command="c">登出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-header>
        <el-main height="">
                <!-- Main content -->
        </el-main>
    </el-container>
</template>

<script>
export default {
    data(){
        return {
            items:[]
        }
    },
    methods:{
        outLogin(command){
            // this.$message('click on item ' + command);
            if(command=="c"){
                this.axios.get('/api/admin/outLogin')
                    .then((res)=>{
                        console.log('123')
                        res.data.code?(alert('后端出错')):(this.$router.replace({ path: 'login'}))
                    })
                    .catch(function(err){
                        console.log(err)
                    })
            }
        }
    }
}
</script>

<style lang="less">
    .el-header{
        border-bottom: 1px solid #ddd;
        box-shadow: 1px 1px 5px #aaa;
        background: #fff;
        .el-row{
            height: 100%;
            .el-col{
                height: 100%;
                color: #aaa;
                line-height: 64px;
                .el-icon--right{
                    margin-left: 0
                }
            }
        }
    }
</style>

