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
        name: "register",
        data() {
            var checkPwd = (rule, value, callback) => {
                if (value === '') {
	                  callback(new Error('请再次输入密码'));
                } else if (value !== this.rulesForm.password) {
	                  callback(new Error('两次输入密码不一致!'));
                } else {
	                  callback();
                }
	          };

            return {
                rulesForm: {},
                formRules: {
                    userName: [
                        {
                            required: true,
                            message: "请输入用户名称",
                            trigger: "blur"
                        },{
                            pattern: /^[a-zA-Z0-9_-]{4,25}$/,
                            message: '用户名是字母,数字,下划线以及连字符的4到25位组合'
                        }
                    ],
                    password:[
                        {
                            required:true,
                            message: "请输入密码",
                            trigger:"blur"
                        },{
                            pattern:/^[a-zA-Z\d_]{6,}$/,
                            message:"密码长度最少6位"
                        }
                    ],
                    userEmail: [
                        {
                            required: true,
                            message: "请输入用户邮箱",
                            trigger: "blur"
                        },{
                            pattern: /^([A-Za-z0-9_\-\.]*)+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                            message: '邮箱格式不正确'
                        }
                    ],
                    checkPwd:[
                        {
                            required:true,
                            validator:checkPwd,
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
                          url:"http://127.0.0.1:8888/api/user/register/",
                          method:"POST",
                          data:{
                              username:this.rulesForm.userName,
                              password:this.rulesForm.password,
                              confirm_pwd:this.rulesForm.checkPwd,
                              email:this.rulesForm.userEmail
                          },
                          headers:{
                              'Content-Type':'application/json',
                          }
                      }).then(function(res){
                          if (res.data.status) {

                              that.$router.push('/login')
                          } else {
                              this.$message.error({
                                  message: res["msg"],
                                  duration: res["code"],
                                  center: true
                              })
                          }
                      })
                  }  else {
                          console.log('error submit!!');
                          return false;
                      }
              });

          }
        }
    }
</script>

<style>
    @import "../../assets/styles/auth.css"
</style>
