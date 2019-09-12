<template>
    <header id="market-header" class="market-global-header">
    <div class="header-inner">
        <div class="logo">
            <a href="/"><i class="mui-icon logo"></i></a>
        </div>
        <div class="market-user">
            <div class="user-people">
                <div class="user-pic" id="header-user-pic">
                <img src="https://img3.doubanio.com/icon/user_large.jpg">
                <span>个人中心</span>
                </div>
            </div>
        </div>
        <div class="market-user">
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
    :append-to-body=true
    :before-close="handleClose">
    <div class = "tab-start">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane  label="短信登录/注册" name="first">
                <div class="account-form-tips">请仔细阅读 
                    <a target="_blank" href="https://accounts.douban.com/passport/agreement">豆瓣使用协议、隐私政策</a>
                </div>
                <div class="account-form-raw" :v-model="phonenumberLogin">
                    <label class="account-form-label"></label>
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

            </el-tab-pane>
            <el-tab-pane  label="密码登录" name="second">
                <div class="account-form-raw">
                    <div class="account-form-field">
                    <input id="username" name="username" type="text" class="account-form-input" placeholder="手机号 / 邮箱" tabindex="1">
                    <span class="icon clear-input hide"></span>
                    </div>
                </div>
                <div class="account-form-raw">
                    <div class="account-form-field account-form-codes">
                    <input id="code" type="text" name="code" maxlength="6" class="account-form-input" placeholder="验证码" tabindex="2" autocomplete="off">
                    <div class="account-form-field-code">
                        <a href="javascript:;">找回密码</a>
                    </div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="loginwithValidate">登录豆瓣</el-button>
    </span>
 </el-dialog>


</header>
</template>
<script>
import {sendMsg,loginWithValidatecode} from '@/api/header'
export default {
  name: 'doupinHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dialogVisible: false,
      activeName: 'first',
      phonenumberLogin:{
          phoneNumber:"",
          validatecode:"",
      }
    }
  },
  methods:{
      login(){
          this.dialogVisible=true;
      },
      sendMessage(){
          console.log("I WILL ALWAYS LOVE U");
          let phoneNumber = this.phonenumberLogin.phoneNumber
          sendMsg(phoneNumber).then(response => {
              console.log("HELLO WORLD");
        })
      },
      loginwithValidate(){
          loginWithValidatecode(this.phonenumberLogin).then(response => {
              console.log("HELLO WORLD");
        })
      }
  }
}
</script>
<style>
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
</style>