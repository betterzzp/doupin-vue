<template>
    <div>
        <div>
            <doupinHeader/>
        </div>
        <div>
            <div class="shopCarInfo">
                <h2 class="textinfo">
                    购物车
                </h2>
            </div>
            <div class="shopCarInfo">
                <el-table ref="multipleTable" :data="shopCarInfoList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>

                    <el-table-column label="商品名称" width="190">
                        <template slot-scope="scope">{{ scope.row.goodName }}</template>
                    </el-table-column>

                    <el-table-column  label="商品图片"  width="200">
                        <template slot-scope="scope"><img style="height:100px" :src="scope.row.goodPic"></template>
                    </el-table-column>

                    <el-table-column  label="单价" style="text-align:center" width="150">
                        <template slot-scope="scope">
                            <span class="item-price">
                                <em>
                                    <i>¥</i>
                                </em>
                                {{ scope.row.price }}
                            </span>
                        </template>
                    </el-table-column>

                    <el-table-column label="商品数量" style="text-align:center" width="250">
                        <template slot-scope="scope">
                            <el-input-number v-model="scope.row.number" @change="handleChange"  label="描述文字"></el-input-number>
                        </template>
                    </el-table-column>

                    <el-table-column prop="address" width="150"  label="小计(元)">
                         <template slot-scope="scope">
                             <span class="item-price">
                                <em>
                                    <i>¥</i>
                                </em>
                                {{scope.row.number*scope.row.price}}
                            </span>
                        </template>
                    </el-table-column>

                    <el-table-column prop="address" width="100" label="操作">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </div>

            <div class="deal-footer">
                <div class="wrapper">
                    <div class="right">
                        <span class="result">
                            <em>
                                共计
                                <b class="quantity">{{goodNumber}}</b>
                                件商品
                            </em>
                            <em>
                                应付总额:
                                <b class="amount-real">
                                    ¥{{shouldPayNumber}}
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
    </div>
</template>
<script>
import doupinHeader from '@/components/header'
import {getShopCarList} from '@/api/shopcar'
import {deleteShopcarMenu} from '@/api/shopcar'
export default {
    name:'shopcar',
    components:{
        doupinHeader
    },
    data(){
        return{
            shopCarInfoList:undefined,
            goodNumber:0,
            shouldPayNumber:0,
            multipleSelection: []//购物车中被选中的数据
        }
    },
    created(){
         this.getShopCarList();
    },

     watch: {
            shopCarInfoList: {
                handler(newVal, oldVal){
                    this.calulateAllMenuNumberAndTotalMoney();
                },
                deep: true
            }
        },
    methods:{
        getShopCarList(){
            debugger
            getShopCarList().then(response => {
            console.log("I WILL ALWAYS LOVE U");
            this.shopCarInfoList = response.data.content;
        })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            this.calulateAllMenuNumberAndTotalMoney();
        },
        calulateAllMenuNumberAndTotalMoney(){
            debugger;
            let  totalNumber = 0;
            let  totalPrice = 0;
            for(let i=0;i<this.multipleSelection.length;i++){
                for(let j=0;j<this.shopCarInfoList.length;j++){
                    if(this.multipleSelection[i].id == this.shopCarInfoList[j].id){
                        totalNumber = totalNumber+this.multipleSelection[i].number;
                        totalPrice = totalPrice+this.multipleSelection[i].price*this.multipleSelection[i].number;
                    }
                }
            }
            this.goodNumber = totalNumber;
            this.shouldPayNumber = totalPrice;
        },
        handleDelete(index, row) {
            
            this.$confirm('是否要删除该品牌', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'

        }).then(() => {
          deleteShopcarMenu(row.id).then(response => {
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000
            });
            this.getShopCarList();
          });
        });
      },
    }
}
</script>
<style>
.shopCarInfo{
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
}
.textinfo{
    text-align: left;
}
.item-price{
    font-size: 14px;
    color: #dd1944;
    position: relative;
    z-index: 1;
    left: -4px;
}
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