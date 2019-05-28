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
                formRules: {
                    userName:[
                        {
                            required: true,
                            message: "请输入用户名称",
                            trigger: "blur"
                        },
                    ],
                    password:[
                        {
                            required:true,
                            message: "请输入密码",
                            trigger:"blur"
                        }
                    ]
                }
            }
        },
        methods:{
            onSubmit(){
                var that = this;
                this.$refs.rulesForm.validate((valid) => {
                    if (valid) {
                        this.$axios.request({
                            url: "http://127.0.0.1:8888/api/user/login/",
                            method: "POST",
                            data: {
                                username: this.rulesForm.userName,
                                password: this.rulesForm.password
                            },
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        }).then(function (res) {
                                if (res.data.status){
                                    that.$store.commit('saveToken',{token:res.data.token,username:res.data.user});
                                    that.$router.push('/home')
                                }else {
                                    this.$message.error({
                                        message: res["msg"],
                                        duration: res["code"],
                                        center: true
                                    })
                                }
                            })
                    } else {
                         console.log('error submit!!');
                         return false;
                    }
                })
            }
        }
    }
</script>

<style>
    @import "../../assets/styles/auth.css";
</style>
