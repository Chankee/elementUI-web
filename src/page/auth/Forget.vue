<template>
    <div class="login">
          <header><h1>TestPlatform --Forget</h1></header>
          <div class="submit_form" style="padding: 30px 30px">
                <el-form ref="rulesForm" :rules="formRules" :model="rulesForm" >
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
                            <el-button type="primary" @click="onSubmit('rulesForm')" class="submit">注册</el-button>
                            <p style="font-size: medium;margin-top: 10px;text-align: center">已有账户，请点击
                              <router-link to="/login" style="font-size:18px;color: #4262aa">登录</router-link></p>
                      </el-form-item>
                </el-form>
          </div>
    </div>
</template>

<script>
    export default {
        name: "Forget",
        data() {
            return {
                rulesForm: {},
                formRules: {}
            }
        }
    }
</script>

<style scoped>

</style>
