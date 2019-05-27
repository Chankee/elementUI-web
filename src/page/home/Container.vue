<template>
    <el-container>
        <el-header>
            <div style="float: left;">
                 <el-breadcrumb separator-class="el-icon-arrow-right">
                     <el-breadcrumb-item
                         v-for="(item, index) in title"
                                    :key="index"
                     >
                                {{title[index]}}
                     </el-breadcrumb-item>

                 </el-breadcrumb>
            </div>
            <el-dropdown  @command="userEdit">
                 <span class="el-dropdown-link">{{userName}}<i class="iconfont">&#xe623</i></span>
                     <el-dropdown-menu slot="dropdown" style="line-height:10px">
                          <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
                          <el-dropdown-item command="logout">退出系统</el-dropdown-item>
                     </el-dropdown-menu>
            </el-dropdown>
        </el-header>

        <el-container>
            <el-aside style="width: 200px">
                  <el-menu>
                        <el-menu-item index="ProjectList">
                            <i class="iconfont" style="float: left" >&#xe615;</i>&nbsp;&nbsp;首  页
                        </el-menu-item>
                        <el-menu-item v-for="item in menu_title" :key="index">
                            <span class="iconfont" v-html="item.code"></span>&nbsp;&nbsp;{{item.name}}
                        </el-menu-item>
                  </el-menu>
            </el-aside>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "header",
        data(){
            return {
                title: [

                ],
                menu_title:[
                  {name:"项目管理",code:"&#xe63a"},
                  {name:"测试用例",code:"&#xe607"},
                  {name:"测试报告",code:"&#xe604"},
                ],
            }
        }
    }
</script>

<style scoped>
    .el-main {
        padding: 0px;
    }
    .el-header {
        background-color: #717275;
        color: #ffffff;
        height: 50px;
        line-height: 60px;
    }
    .el-dropdown{
        float:right;
        line-height:20px;
        top:12px;
        color: rgb(255, 255, 255);
        margin-top: 10px;
    }
    .el-menu{
        background: white;
    }
    .iconfont{
        color: #165aaa;
        font-size: 25px;
    }
    .el-menu-item .iconfont{
        float: left;
    }
</style>
