<template>
    <header id="market-header" class="market-global-header">
    <div class="header-inner">
        <div class="logo">
            <a href="/"><i class="mui-icon logo"></i></a>
        </div>
        <div class="market-user" v-show="!show">
            <div class="user-people">
                <el-dropdown>
                    <div>
                        <i>
                            <div class="user-pic" id="header-user-pic">
                                <img src="http://zhouzhongping.cn/bo.jpg">
                                <span>个人中心</span>
                                <el-dropdown-menu slot="dropdown">

                                    <el-dropdown-item>
                                        <a href="/order">我的豆品订单</a>
                                    </el-dropdown-item>

                                    <el-dropdown-item>
                                        <a href="/myshopcar">我的购物车</a>
                                    </el-dropdown-item>

                                    <el-dropdown-item>
                                        <a @click="signout">退出</a>
                                    </el-dropdown-item>

                                    
                                </el-dropdown-menu>
                            </div>
                        </i>
                    </div>
                </el-dropdown>
            </div>
        </div>
        <div class="market-user" v-show="show">
            <div class="user-people">
                <div class="user-pic" id="header-user-pic">
                <el-button type="text" @click="login">注册/登录</el-button>
                </div>
            </div>
        </div>
  </div>
  <el-dialog
    :close-on-click-modal=false
    :visible.sync="dialogVisible"
    width="340px"
    top="10vh"
    :append-to-body=true
    :before-close="handleClose">
    <div class = "tab-start">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane  label="短信登录/注册" name="first">
                <div class="account-form-tips">请仔细阅读
                    <a target="_blank" href="https://accounts.douban.com/passport/agreement">豆瓣使用协议、隐私政策</a>
                </div>
                <div class="account-form-raw  phoneNumber" :v-model="phonenumberLogin">
                    <div class="account-form-field account-form-field-phone">
                    <span class="icon clear-input hide"></span>
                    <input type="phone" name="phone" maxlength="13" class="account-form-input"  v-model="phonenumberLogin.phoneNumber"   placeholder="手机号" tabindex="1">
                    <div class="account-form-field-area-code">
                        <div class="account-form-field-area-code-label js-choose-district">+86</div>
                    </div>
                    </div>
                </div>
                <div class="account-form-raw">
                    <div class="account-form-field account-form-codes">
                    <input id="code" type="text" name="code" maxlength="6" class="account-form-input"  v-model="phonenumberLogin.validatecode"  placeholder="验证码" tabindex="2" autocomplete="off">
                    <div class="account-form-field-code">
                        <a href="javascript:;" @click="sendMessage">获取验证码</a>
                    </div>
                    </div>
                </div>
                <div>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" :disabled="loginwithValidatecode" @click="loginwithValidate">登录豆瓣</el-button>
                    </span>
                </div>
            </el-tab-pane>
            <el-tab-pane  label="密码登录" name="second">
                <div class="account-form-raw">
                    <div class="account-form-field">
                    <input id="username" name="username" type="text" class="account-form-input"  v-model="phonenumberLogin.phoneNumber" placeholder="用户名" tabindex="1">
                    <span class="icon clear-input hide"></span>
                    </div>
                </div>
                <div class="account-form-raw">
                    <div class="account-form-field account-form-codes">
                    <input id="code" type="text" name="code" maxlength="16" class="account-form-input"  v-model="phonenumberLogin.password" placeholder="密码" tabindex="2" autocomplete="off">
                    <div class="account-form-field-code">
                        <a href="javascript:;"></a>
                    </div>
                    </div>
                </div>
                <div>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" :disabled="loginwithPasswords" @click="loginwithPassword">登录豆瓣</el-button>
                    </span>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
 </el-dialog>
</header>
</template>
<script>
import {sendMsg,loginwithPassword,loginwithValidate} from '@/api/header'
import {setToken,getToken,removeToken} from '@/util/auth'
export default {
  name: 'doupinHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dialogVisible: false,
      activeName: 'first',
      token:null,
      show:true,
      loginwithPasswords:true,
      loginwithValidatecode:true,
      phonenumberLogin:{
          phoneNumber:"",
          validatecode:"",
          password:""
      }
    }
  },
created(){
    var loginToken = getToken()
    if(loginToken!=null&&loginToken!=''){
        this.show = false;
    }
},

watch: {
    phonenumberLogin:{//深度监听，可监听到对象、数组的变化
         handler(){
             if(this.phonenumberLogin.phoneNumber!=""&&this.phonenumberLogin.phoneNumber!=null
              &&this.phonenumberLogin.password!=""&&this.phonenumberLogin.password!=null
              ){
                 this.loginwithPasswords = false;
             }
             if(this.phonenumberLogin.phoneNumber!=""&&this.phonenumberLogin.phoneNumber!=null
              &&this.phonenumberLogin.validatecode!=""&&this.phonenumberLogin.validatecode!=null
             ){
                 this.loginwithValidatecode = false;
             }
         },
         deep:true
     }
},

  methods:{
      login(){
          this.dialogVisible=true;
      },
      signout(){
          removeToken();
          var router = this.$route.path;
          if("/" == router){
               location.reload();
          }else{
               this.$router.push({path: '/'});
          }
      },
      sendMessage(){
          console.log("I WILL ALWAYS LOVE U");
          let phoneNumber = this.phonenumberLogin.phoneNumber
          sendMsg(phoneNumber).then(response => {
              console.log("HELLO WORLD");
        })
      },
      loginwithPassword(){
          loginwithPassword(this.phonenumberLogin).then(response => {
               if(response.data.code == "200"){
                    this.token = response.data.content;
                    setToken(this.token);
                    this.show = false;
                    console.log("HELLO WORLD");
                    this.dialogVisible = false;
               }else{
                   this.$notify.error({
                        title: '',
                        message: '用户名或密码错误',
                        duration: 0
                    });
               }
        })
      },
      loginwithValidate(){
          loginwithValidate(this.phonenumberLogin).then(response => {
               if(response.data.code == "200"){
                    this.token = response.data.content;
                    setToken(this.token);
                    this.show = false;
                    console.log("HELLO WORLD");
                    this.dialogVisible = false;
               }else if(response.data.code == "204"){
                    console.log("验证码已经过期");
                    this.$notify.error({
                        title: '',
                        message: '验证码已经过期'
                    });
               }else if(response.data.code == "205"){
                    debugger
                    this.$notify.error({
                        title: '',
                        message: '验证码错误'
                    });
               }else if(response.data.code == "210"){
                    this.$notify.error({
                        title: '',
                        message: '请完成注册信息',
                        duration: 0
                    });
                    this.$router.push({path: '/registory?phoneNumber='+this.phonenumberLogin.phoneNumber})
               }
        })
      }
  }
}
</script>

<style>
.el-dialog__header {
    padding: 0px 20px 20px 10px;
}
</style>

<style scoped>
#dialog{
    transform-origin: center top; z-index: 2015; position: absolute; top: 80px; left: 1220px;
}
#market-header {
    position: relative;
    z-index: 2;
    box-shadow: 0 1px 2px #f9f9f9;
}
a {
    text-decoration: none;
    border: none;
}
.account-form-tips {
    color: #9b9b9b;
    margin-bottom: 14px;
    display: block;
}
.account-form-tips a {
    color: #41ac52;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}
.account-form-codes .account-form-field-code a {
    color: #41ac52;
}
.account-form-codes .account-form-field-code {
    position: absolute;
    padding: 0 80px;
    right: 0;
    top: 0;
    line-height: 42px;
}
#market-header .header-inner {
    zoom: 1;
    width: 1100px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;
}
#market-header .logo {
    float: left;
    font-size: 26px;
    color: #44883e;
    line-height: 100px;
}
.el-button--text {
    color: #6e6e6e;
}
.mui-icon {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#market-header .market-user {
    float: right;
    line-height: 100px;
    margin-left: 20px;
}
#market-header .market-user .user-people {
    display: inline-block;
    cursor: pointer;
}
#market-header .market-user .user-people .user-pic {
    color: #6e6e6e;
    font-size: 14px;
}
#market-header .market-user .user-people .user-pic img {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 4px;
}
.mui-icon.logo:before {
    content: "豆瓣|豆品";
}
.el-dialog__body {
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
}
.el-button--primary {
    color: #FFF;
    background-color: rgba(66,189,86,.5);
    border-color: rgba(66,189,86,.5);
    width: 300px;
    height: 40px;
}

.account-form-raw {
    margin-bottom: 10px;
}
.account-form-raw {
    margin-bottom: 20px;
    position: relative;
}
.account-form-label {
    display: none;
}
.account-form-label {
    float: left;
    display: block;
    line-height: 40px;
    height: 40px;
    width: 60px;
    font-size: 13px;
}
.account-form-field {
    display: block;
    width: 100%;
    position: relative;
}
.account-form-field {
    margin-bottom: 10px;
    margin: 0;
    width: 350px;
    display: inline-block;
}

.account-form-field {
    position: relative;
    margin-bottom: 10px;
    margin: 0;
    width: 350px;
    display: inline-block;
}
.account-form-field input {
    box-shadow: none;
}
.account-form-field-phone input {
    padding-left: 60px;
    padding-right: 40px;
}
input[type=number], input[type=password], input[type=phone], input[type=text], textarea {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    background: transparent;
}
.account-form-field-phone input {
    padding-left: 60px;
    padding-right: 40px;
}
input[type=number], input[type=password], input[type=phone], input[type=text], textarea {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    background: transparent;
}
.account-form-input {
    width: 280px;
    font-size: 13px;
    padding: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid #e4e6e5;
}
.account-form-input {
    width: 280px;
    font-size: 13px;
    padding: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid #e4e6e5;
}

a:focus, button, input {
    outline: 0;
}
.account-form-field-area-code {
    width: 50px;
    position: absolute;
    top: 1px;
    left: 1px;
    overflow: hidden;
}
.account-form-field-area-code {
    top: 0;
    left: 0;
}
.account-form-field-area-code {
    width: 50px;
    position: absolute;
    top: 1px;
    left: 1px;
    overflow: hidden;
}
.account-form-field-area-code {
    top: 0;
    left: 0;
}

body, div, h1, h2, h3, h4, h5, h6, li, ol, p, ul {
    margin: 0;
    padding: 0;
}

.account-form-field-area-code-label {
    width: 100%;
    margin: 0;
    padding-right: 1px;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    line-height: 40px;
    background: none;
    cursor: pointer;
}
.account-form-field-area-code-label {
    position: relative;
    padding-right: 5px;
    line-height: 43px;
    margin-right: 20px;
}
.account-form-field-area-code-label {
    width: 100%;
    margin: 0;
    padding-right: 1px;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    line-height: 40px;
    background: none;
    cursor: pointer;
}
.account-form-field-area-code-label {
    position: relative;
    padding-right: 5px;
    line-height: 43px;
    margin-right: 20px;
}
.el-dropdown-menu__item {
    top: 49px;
    left: 1215px;
}

.el-dropdown {
    vertical-align: top;
}
.el-dropdown + .el-dropdown {
margin-left: 15px;
}
.el-icon-arrow-down {
font-size: 12px;
}

.el-popper[x-placement^=bottom] {
    margin-top: -28px;
    left: 1220px!important;
}

.el-tabs__item:hover {
    color: #333;
}
.el-tabs__item.is-active {
    color: #333;
}
.el-dialog__body {
    padding: 10px 20px 30px 10px;
}
</style>
