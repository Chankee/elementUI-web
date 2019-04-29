<template>
    <div class="login">
          <header><h1>TestPlatform --Register</h1></header>
          <div class="submit_form" style="padding: 30px 30px">
                <el-form ref="rulesForm" :rules="formRules" :model="rulesForm" >
                      <el-form-item  prop="userName">
                            <label><i class="iconfont">&#xe623</i></label>
                            <el-input v-model="rulesForm.userName"  placeholder="请输入账号" class="el-inp"/>
                      </el-form-item>
                      <el-form-item  prop="userEmail" >
                            <label><i class="iconfont">&#xe64d</i></label>
                            <el-input v-model="rulesForm.userEmail" placeholder="请输入邮箱" class="el-inp"/>
                      </el-form-item>
                      <el-form-item  prop="password">
                            <label><i class="iconfont">&#xe628</i></label>
                            <el-input v-model="rulesForm.password" placeholder="请输入密码" class="el-inp" show-password/>
                      </el-form-item>
                      <el-form-item  prop="checkPwd">
                            <label><i class="iconfont">&#xe628</i></label>
                            <el-input v-model="rulesForm.checkPwd" placeholder="请确认密码" class="el-inp" show-password/>
                      </el-form-item>
                      <el-form-item>
                            <el-button type="primary" @click="onSubmit('rulesForm')">保存</el-button>
                            <el-button @click="cancel">取消</el-button>
                      </el-form-item>
                </el-form>
          </div>
    </div>
</template>

<script>
    export default {
        name: "register",
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
