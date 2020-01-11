<template>
    <div>
        <div class="section">
            <div class="content">
                <div class="address">
                    <div class="address-platform">
                        <div class="address-content">
                            <div  v-for="item in listAddress" v-bind:key="item.id" class="address-list">
                                <div  class="address-list-content" >
                                    <div class="address-col">
                                        <div class="address-card selected">
                                            <p class="address-name">收货人:{{item.receiveman}}</p>
                                            <div class="address-detail">
                                                <p class="address-area">{{item.provinceName}} / {{item.municipalName}} / {{item.districtName}}</p>
                                            </div>
                                            <p class="address-phone">{{item.receivePhone}}</p>
                                            <p class="address-action">
                                                <a @click="setDefault(item.id)">设为默认</a>
                                                <a>修改地址</a>
                                                <a>删除</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="address-creator" @click="addAddress()">
                                <div class="address-creator-btn">
                                    <i class="el-icon-plus"></i>
                                    <p>新建地址</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <el-dialog
            :visible.sync="dialogVisible"
            width="40%"
            :before-close="handleClose"
            :close-on-click-modal="false"
            center>
                <el-form :model="address"  ref="addressForm" :rules="rules">
                    <div style="height:20px"></div>
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="收货人名称:" prop="receiveman">
                                <el-input v-model="address.receiveman" style="width:400px"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div style="height:10px">

                    </div>
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="收货人地址:" prop="cityInfo">
                                <v-distpicker @selected="selectCity"></v-distpicker>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <div style="height:10px"></div>

                     <el-row>
                        <el-col :span="24">
                            
                            <el-form-item  label="详细地址:" prop="detail">
                                <el-input v-model="address.detail" style="width:400px"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <div style="height:10px"></div>

                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="手机号码:" prop="receivePhone">
                                <el-input v-model="address.receivePhone" style="width:400px"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="saveAddress()">保存信息</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
import CnRegionPicker from 'cn-region-picker'
import vueCityPicker from 'vue-city-bspicker'
import {getUserAddress,addAddress,setDefaultAddress} from '@/api/address'

 export default {
    name: 'addressComponent',
    components:{CnRegionPicker,VDistpicker,vueCityPicker},
    data () {
        return {
            dialogVisible:false,
            
            cityInfo:'',
            listAddress:[],
            address:{
                id:'',
                userId:'',
                receiveman:'',
                receivePhone:'',
                provinceCode:'',
                municipalCode:'',
                districtCode:'',
                detail:'',
                isdefault:'',
                provinceName:'',
                municipalName:'',
                districtName:''
            },
            rules: {
                receiveman: [
                    {required: true,message:'请填写收货人名称'}
                ],
                receivePhone: [
                    {required: true }
                ],
                detail: [
                    {required: true, message: '请填写详细地址' }
                ],
                cityInfo:[
                     {required: false, message: '请填写手机号码' }
                ]
        },
 
            pickCity: []
        }
    },
 created(){
     this.getAddressMethod();
    },
    methods:{
        addAddress(){
            this.resetAddress();
            this.dialogVisible = true;
        },
        resetAddress(){
            this.addAddress = {
                id:'',
                userId:'',
                receiveman:'',
                receivePhone:'',
                provinceCode:'',
                municipalCode:'',
                districtCode:'',
                detail:'',
                isdefault:'',
                provinceName:'',
                municipalName:'',
                districtName:''
            }
        },
        setDefault(addressId){
            console.log(addressId);
            console.log("I WILL ALWAYS LOVE U CHEN SI QI");
             setDefaultAddress(addressId).then(response =>{
                debugger
                if(response.data.content.length>0){
                         this.getAddressMethod();
                        //this.showLogin = false;
                        //this.showAddress = false;
                        //this.showPay = true;
                }else{

                }
            });

        },
        getAddressMethod(){
             getUserAddress().then(response =>{
                    debugger
                    if(response.data.content.length>0){
                         this.listAddress = response.data.content;
                         //this.showLogin = false;
                         //this.showAddress = false;
                         //this.showPay = true;
                    }else{
                         //this.showLogin = false;
                         //this.showAddress = true;
                         //this.showPay = false;
                    }
                });
        },
        selected(data){
            console.log(data);
        },
        selectCity(data) {
            console.log("HELLO WORLD, I WILL ALWASY LOVE U");
        },
        show: function(){
            this.$refs['picker'].show();
        },
        select: function(){
            console.log(arguments)
        },
        selectCity:function(data){
            this.cityInfo = data;
        },
        saveAddress(){
            console.log(this.cityInfo);
            if(this.cityInfo ==""){
                this.$message.error('错了哦，地址填写错误');
            }else if(this.cityInfo.area.code==undefined || this.cityInfo.city.code==undefined || this.cityInfo.province.code==undefined){
                this.$message.error('错了哦，地址填写错误');
            }else{
                    this.$refs['addressForm'].validate((valid) => {
                        if (valid) {
                            debugger
                            this.address.provinceCode = this.cityInfo.province.code;
                            this.address.municipalCode = this.cityInfo.city.code;
                            this.address.districtCode = this.cityInfo.area.code;
                            this.address.provinceName = this.cityInfo.province.value;
                            this.address.municipalName = this.cityInfo.city.value;
                            this.address.districtName = this.cityInfo.area.value;
                            console.log();
                            console.log(this.address);
                            addAddress(this.address).then(response => {
                                if(response.data.code == "200"){
                                    this.dialogVisible = false;
                                     this.getAddressMethod();
                                    this.$notify({
                                        title: '成功',
                                        message: '添加地址成功',
                                        type: 'success'
                                        });
                                }else{

                                }
                            })


                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                        });
                


            }
        }
    }
} 
</script>
<style scoped>
.section {
    margin-bottom: 20px;
}
.section .title {
    font-size: 14px;
    font-weight: 700;
    color: #6e6e6e;
    margin-bottom: 10px;
}
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
}
.address-platform {
    min-height: 145px;
}

.address-platform .address-content {
    position: relative;
    z-index: 1;
}
.address-platform .address-content .address-list {
    float: left;
}
.address-platform .address-content .address-list .address-list-content {
    margin-left: -10px;
}
.address-list .address-list-content {
    display: inline-block;
    clear: both;
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.address-platform .address-content .address-list .address-col {
    width: 275px;
    display: inline-block;
    vertical-align: top;
}
.address-card {
    cursor: pointer;
    height: 145px;
    padding: 14px;
    position: relative;
    z-index: 1;
    border: 1px solid #d8d8d8;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.address-card.selected {
    border: 1px solid #44883e;
}
.address-card .address-name {
    color: #3e3a39;
    padding-bottom: 5px;
    border-bottom: .5px solid #d8d8d8;
    font-size: 12px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.address-card .address-detail {
    color: #3e3a39;
}
.address-card .address-area {
    margin-top: 10px;
}
.address-card .address-detail p {
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.address-card .address-phone {
    color: #3e3a39;
    margin: 4px 0;
}
.address-card .address-action {
    position: absolute;
    z-index: 1;
    bottom: 12px;
    font-size: 12px;
}
.address-card .address-action a {
    margin-right: 10px;
    color: #dd1944;
}
.address-creator {
    float: left;
    width: 255px;
    min-height: 145px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #d8d8d8;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.address-creator .address-creator-btn {
    margin-top: 41px;
    color: #dd1944;
}
.address-creator .address-creator-btn .mui-icon {
    font-size: 30px;
    color: #d8d8d8;
}
.section .title {
    font-size: 14px;
    font-weight: 700;
    color: #6e6e6e;
    margin-bottom: 10px;
}
</style>

<style >
.distpicker-address-wrapper select {
    width: 131px;
}
.el-form-item__label {
    width: 86px;
}
</style>