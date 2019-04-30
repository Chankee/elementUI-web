<template>
    <div class="login">
          <header><h1>TestPlatform --Login</h1></header>
          <div class="submit_form" style="padding: 30px 30px">
                <el-form ref="rulesForm" :rules="formRules" :model="rulesForm" >
                      <el-form-item  prop="userName">
                            <label><i class="iconfont">&#xe623</i></label>
                            <el-input v-model="rulesForm.userName"  placeholder="请输入账号" class="el-inp"/>
                      </el-form-item>
                      <el-form-item  prop="password">
                            <label><i class="iconfont">&#xe628</i></label>
                            <el-input v-model="rulesForm.password" placeholder="请输入密码" class="el-inp" show-password/>
                      </el-form-item>



                      <el-form-item>
                            <p style="float: left;margin-left:60px;font-size: 18px">
                              <router-link to="/register" style="font-size:18px;color: #4262aa">注册账号</router-link></p>
                            <p style="float: right;font-size: 18px">
                              <router-link to="/forget" style="font-size:18px;margin-right:30px;color: #4262aa">忘记密码</router-link></p>
                            <el-button type="primary" @click="onSubmit('rulesForm')" class="submit">登录</el-button>
                      </el-form-item>
                </el-form>
          </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                rulesForm: {},
                formRules: {}
            }
        }
    }
</script>

<style>
    @import "../../assets/styles/auth.css"
</style>
