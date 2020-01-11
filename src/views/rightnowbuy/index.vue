<template>
    <div>
        <div>
            <doupinHeader/>
            <logincomponent v-bind:logindialogVisible="logindialogVisible"/>
        </div>
        <div class="hd  incenter">
            确认订单信息
        </div>

        <div v-show="!showLogin" class="addresscomponent">
            <div class="getGoodsPersonInfo">
                收货人信息
            </div>
             <addressComponent/>
        </div>

        <div class="section">

        </div>

        <div  v-show="false"  class="hd  incenter">
            您未登录 点此登录 或使用手机号注册下单
        </div>

        <div class="rightnowbuy">
            <div>
                <el-table
                    :data="menudetailinfo"
                    border
                    style="width: 100%">
                    <el-table-column label="商品图片" width="300">
                        <template slot-scope="scope"><img style="height:210px" :src="scope.row.pic"></template>
                    </el-table-column>

                    <el-table-column label="商品名称" width="300"  prop="name">
                    </el-table-column>

                    <el-table-column
                        prop="price"
                        label="单价"
                        width="200">
                    </el-table-column>

                    <el-table-column
                        prop="number"
                        label="数量"
                        width="200">
                    </el-table-column>

                    <el-table-column
                        prop="all"
                        label="小计">
                    </el-table-column>
                </el-table>
            </div>

            <div class="timeandmoneyinfo">
                <div class="timelimita">
                    <p class="receipt">请在下单后30分钟之内完成付款，否则订单将被取消</p>
                </div>

                <div class="timelimitb receipt">
                    小计:
                    <span class="light">¥{{this.menudetailinfo[0].all}}</span>
                    运费:
                    <span class="light">¥10.00</span>
                    店铺总计:
                    <span class="light">¥{{this.menudetailinfo[0].all+10}}</span>
                </div>
            </div>


            <div class="deal-footer">
                <div class="wrapper">
                    <div class="right">
                        <span class="result">
                            <em>
                                共计
                                <b class="quantity">{{number}}</b>
                                件商品
                            </em>
                            <em>
                                应付总额:
                                <b class="amount-real">
                                    ¥{{this.menudetailinfo[0].all+10}}
                                </b>
                            </em>
                        </span>
                        <button v-show="showLogin"   @click="logindialogVisible = true" v-bind:class="showLoginClasss">
                            请先登录/注册
                        </button>
                        <button v-show="showAddress"  type="button"  class="mui-button disabled l default">
                            请填写地址
                        </button>
                        <el-button v-show="showPay"  @click="goToPayPage" class="mui-button red l default" >去支付</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>
<script>
import doupinHeader from '@/components/header'
import {getMenuDetails} from '@/api/menudetails'
import {setToken,getToken} from '@/util/auth'
import {getUserAddress} from '@/api/address'
import loginComponent from '@/components/logincomponent/logincomponent'
import  addressComponent from '@/components/address/address'
export default {
    name:'rightNowBuy',
    components:{
        doupinHeader,
        loginComponent,
        addressComponent,
    },
    data(){
        return{
            showLogin:false,
            showAddress:false,
            showPay:false,
            requestUrl:'',
            menuId:'',
            number:undefined,
            showLoginClasss:'',
            showPayClass:'',
            showAddressClass:'',
            menudetailinfo:null,
            logindialogVisible:false,
        }
    },
    created(){
         this.createdMethod();
    },
    methods:{
        createdMethod(){
            //http://localhost:8050/deal?id=1c2b680940b54fedb14c84b66d5ed561&number=2
            this.requestUrl = window.location.href;
            let index1 = this.requestUrl.indexOf('=',0);
            let index2=this.requestUrl.indexOf('&');
            this.menuId=this.requestUrl.substring(index1+1,index2);

            let index3 = this.requestUrl.lastIndexOf('=');
            this.number =  this.requestUrl.substring(index3+1,this.requestUrl.length);
            this.getMenuDetails();
            
            var loginToken = getToken();
            if(loginToken == null || loginToken == undefined || loginToken == ''){
                 this.showLogin = true;
                 this.showAddress = false;
                 this.showPay = false;
                this.showLoginClasss = 'mui-button disabled l default';
            }else{
                //已经登录，去检查是否有收货地址
                getUserAddress().then(response =>{
                    if(response.data.content.length>0){
                        this.showLogin = false;
                         this.showAddress = false;
                         this.showPay = true;
                    }else{
                         this.showLogin = false;
                         this.showAddress = true;
                         this.showPay = false;
                    }
                });
                this.showPay = true;
            }
        },
        getMenuDetails(){
                getMenuDetails(this.menuId).then(response => {
                console.log(response);
                this.menudetailinfo = response.data.content;
                this.menudetailinfo[0].number = this.number;
                this.menudetailinfo[0].all = this.number*this.menudetailinfo[0].price;
            })
        },
        goToLogin(){
            this.logindialogVisible = true;
        },
        goToPayPage(){
            console.log("I WILL ALWAYS LOVE U");
        }
    }
}
</script>
<style>
.rightnowbuy{
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
}
.timelimita{
    float: left;
}
.timelimitb{
    float: right;
}
.timeandmoneyinfo{
    margin-top: 50px;
    height: 150px;
}
.receipt {
    color: #6e6e6e;
}
.light {
    color: #dd1944;
}
.addresscomponent{
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
}
.deal-footer {
    background-color: #f9f9f9;
    margin-bottom: 0;
    padding-bottom: 0;
    position: fixed;
    z-index: 10;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
}
.deal-footer .wrapper {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
    clear: both;
    overflow: hidden;
    padding: 16px 0;
    height: 36px;
    line-height: 36px;
}
.deal-footer .right {
    float: right;
}
.deal-footer .result {
    font-size: 14px;
    margin-bottom: 10px;
    display: inline-block;
    vertical-align: middle;
}
.amount-real {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    color: #dd1944;
    vertical-align: middle;
}
.deal-footer .result em {
    margin-left: 10px;
    margin-right: 10px;
}
.deal-footer .result .quantity {
    font-weight: 500;
    color: #dd1944;
    margin-left: 5px;
    margin-right: 5px;
}
.deal-footer .result .amount-real {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    color: #dd1944;
    vertical-align: middle;
}
.mui-button.disabled, a.mui-button.disabled, button.mui-button.disabled {
    color: #fff;
    background-color: #d8d8d8;
    cursor: not-allowed;
}
.mui-button.l, .mui-modal .mui-modal-footer .mui-modal-cancel, .mui-modal .mui-modal-footer .mui-modal-confirm, a.mui-button.l, button.mui-button.l {
    padding-top: 11px;
    padding-bottom: 11px;
    font-size: 14px;
    border: none;
}
.hd {
    color: #3e3a39;
    font-size: 21px;
    font-weight: 700;
    margin: 40px 0 30px;
    text-align:left;
}
.incenter{
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
}
.mui-button.red, a.mui-button.red, button.mui-button.red {
    background-color: #dd1944;
    color: #fff;
}
.getGoodsPersonInfo{
    text-align: left;
    margin-bottom: 20px;
}
</style>