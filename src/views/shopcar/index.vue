<template>
    <div>
        <div>
            <doupinHeader/>
        </div>
        <div class="hd  incenter">
            确认订单信息
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
                        <button v-show="false" type="button"  class="mui-button disabled l default">
                            请先登录/注册
                        </button>
                        <button v-show="false"  type="button"  class="mui-button disabled l default">
                            请填写地址
                        </button>
                        <el-button type="danger"  class="mui-button red l default" >去支付</el-button>
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
import {getShopCar} from '@/api/shopcar'
export default {
    name:'rightNowBuy',
    components:{
        doupinHeader 
    },
    data(){
        return{
            requestUrl:'',
            menuId:'',
            number:undefined,
            menudetailinfo:null
        }
    },
    created(){
         this.createdMethod();
    },
    methods:{
        createdMethod(){
            this.getShopCar();
        },
        getShopCar(){
                getShopCar().then(response => {     
            })
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
    margin-top: 100px;
}
.receipt {
    color: #6e6e6e;
}
.light {
    color: #dd1944;
}
.deal-footer {
    background-color: #9588881f;
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
</style>