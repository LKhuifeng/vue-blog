<template>
    <el-aside width="auto">
        <el-menu class="el-menu-vertical-demo" :default-openeds="['1']"  :collapse="isCollapse" unique-opened="false">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航二</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-search"></i>
                    <span  slot="title">导航三</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
        <el-button @click="isCollapse?isCollapse=false:isCollapse=true">go</el-button>
    </el-aside>
</template>

<script>
export default {
    data(){
        return {
            isCollapse: false
        } 
    },

}
</script>

<style lang="less">
    .el-aside{
        position: relative;
        height: 100vh;
        background-color: rgb(48, 65, 86);
        overflow: hidden;
        .el-menu{
            border-right: none;
            background-color: rgb(48, 65, 86);
            text-align: start;
            .el-submenu [class^=el-icon-]{
                margin-top: -5px;
            }
            .el-submenu [class^=el-icon-]:before{
                color: #bfcbd9;
            }
            
            .el-submenu__title{
                color: rgb(191, 203, 217);
                &:hover{
                    background-color: rgb(38, 52, 69);
                }
                &:focus{
                    background-color: rgb(38, 52, 69);
                    color: #0B7CF1;
                }
            }
            .el-menu-item{
                color: rgb(191, 203, 217);
                &:hover{
                    background-color: rgb(38, 52, 69);
                }
                &:focus{
                    background-color: rgb(38, 52, 69);
                    color: #0B7CF1;
                }
            }
        }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
    }
</style>
