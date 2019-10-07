<template>
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
                    <input id="username" name="username" type="text" class="account-form-input"  v-model="phonenumberLogin.phoneNumber" placeholder="手机号" tabindex="1">
                    <span class="icon clear-input hide"></span>
                    </div>
                </div>
                <div class="account-form-raw">
                    <div class="account-form-field account-form-codes">
                    <input id="code" type="text" name="code" maxlength="6" class="account-form-input"  v-model="phonenumberLogin.password" placeholder="密码" tabindex="2" autocomplete="off">
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
</template>