import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex);

export  default new Vuex.Store({
    state:{
        username:Cookie.get('username'),
        token:Cookie.get('token'),
    },
    mutations:{
        //组件中通过this.$store.commit(方法名，参数)  调用
        saveToken:function(state,userToken){
            state.username = userToken.username;
            state.token = userToken.token;
            Cookie.set("username",userToken.username,60 * 60 * 24)
            Cookie.set("token",userToken.token,60 * 60 * 24)
        },
        clearToken:function (state) {
            state.username = null;
            state.token = null;
            Cookie.remove('username');
            Cookie.remove('token')
        }
    }
})
