<template>
    <div>
        <div class="goods_card">
          <span  v-for="item in list" :key="item">
                <el-col :span="8">
                    <div class="grid-content">
                      <a :href="'/product?keyword='+item.id+''">
                      <div>
                        <img style="height:300px" :src="item.pic">
                      </div>
                      </a>
                      <div class="product-info">
                        <h5 class="product-title">{{item.name}}</h5>
                        <p class="product-descption">{{item.descption}}</p>
                        <div class="product-prices">
                          <span  class="sale-price">
                            ¥{{item.price}}
                          </span>
                          <span v-if="item.tag" class="product-tag">
                            <span>
                              {{item.tag}}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                </el-col>
          </span>
        </div>
    </div>
</template>
<script>
import {getGoods} from '@/api/good'
import { debug } from 'util';
    export default {
    name: 'doupinMenu',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        list:null,
        listTotal:null
      }
    },
    created() {
      this.getBannerInfo();
    },
     methods: {
       getBannerInfo(){
         getGoods().then(response => {
           debugger
           debugger
           console.log(response);
           this.list = response.data.content;
        })
       }
     }
}
</script>
<style scoped>
    .el-row {
    margin-bottom: 20px;
    margin-top: 30px;
  }
   .el-row last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
    margin-top: 40px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .goods_card{
    margin-top: 50px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .product-title{
    font-size: 18px;
    color: #3e3a39;
    line-height: 1em;
    margin-left: 48px;
  }
  .product-info{
    overflow: hidden;
    padding-top: 20px;
    padding-bottom: 0px;
    position: relative;
    z-index: 1;
    float: left;
    display: block;
    margin-top: 20px;
    text-align:left; padding:0px;
  }
  .product-descption{
    font-size: 14px;
    color: #ababac;
    line-height: 1em;
    height: 1em;
    overflow: hidden;
    margin: 10px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 48px;
  }
  h5{
    margin: 0;
    padding: 0;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    border: 0;
    font-size: 100%;
    font: inherit;
  }
  .product-prices{
    margin-top: 12px;
    margin-left: 48px;
  }
  .sale-price{
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    color: #dd1944;
    -webkit-font-smoothing: antialiased;
    text-align:left; padding:0px;
  }
  .product-tag{
    display: inline-block;
    font-size: 12px;
    font-weight: 300;
    height: 20px;
    line-height: 20px;
    color: #fff;
    background: #dd1944;
    padding-left: 3px;
    padding-right: 3px;
    position: relative;
    z-index: 1;
  }
</style>
