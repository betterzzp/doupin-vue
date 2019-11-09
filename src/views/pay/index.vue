<template>
    <div>
        <div>
            <doupinHeader/>
        </div>
        <div class="deal-info">
            <div class="hd">
                确认订单信息
            </div>
            <div class="section">
                <div class="title">
                    收货人信息
                </div>
                <div class="content">
                    <div class="address">
                        <div class="address-platform">
                            <div class="address-content">
                                <div class="address-list">
                                    <div class="address-list-content">
                                        <div class="address-col">
                                            <div class="address-card selected default">
                                                <p class="address-name">收货人：周忠平</p>
                                                <div class="address-detail">
                                                    <p class="address-area">云南省 / 昆明市 / 盘龙区 / 席子营小游乐园</p>
                                                </div>
                                                <p class="address-phone">18487376971</p>
                                                <p class="address-action">
                                                    <a class="address-default">默认</a>
                                                    <a>修改地址</a>
                                                    <a>删除</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="address-creator">
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

            </div>
        </div>
        <div>
            <doupinFooter/>
        </div>
    </div>
</template>
<script>
import doupinHeader from '@/components/header'
import doupinFooter from '@/components/footer'
export default {
    name:'',
    components:{
        doupinHeader,
        doupinFooter
    },
    data(){

    },
    created(){

    },
    methods:{

    }
}
</script>

<style scoped>
.deal-info .hd {
    color: #3e3a39;
    font-size: 21px;
    font-weight: 700;
    margin: 40px 0 30px;
    text-align: left;
}
.deal-info{
   width: 1100px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}
.title{
    text-align: left;
    font-size: 14px;
    font-weight: 700;
    color: #6e6e6e;
    margin-bottom: 10px;
}
.address{
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
}
.address-platform{
    min-height: 145px;
}
.address-platform .address-content {
    position: relative;
    z-index: 1;
}

.address-platform .address-content .address-list {
    float: left;
}
.address-list .address-list-content {
    display: inline-block;
    clear: both;
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.address-platform .address-content .address-list .address-list-content {
    margin-left: -10px;
}

.address-platform .address-content .address-list .address-col {
    width: 275px;
    display: inline-block;
    vertical-align: top;
}
.address-card.selected {
    border: 1px solid #44883e;
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
.address-card .address-name {
    color: #3e3a39;
    padding-bottom: 5px;
    border-bottom: .5px solid #d8d8d8;
    font-size: 12px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
.address-card .address-detail {
    color: #3e3a39;
    color: #3e3a39;
    padding-bottom: 5px;
    font-size: 12px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}

.address-phone{
    color: #3e3a39;
    color: #3e3a39;
    padding-bottom: 5px;
    font-size: 12px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;

}
address-card .address-detail p {
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.address-card .address-area {
    margin-top: 10px;
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

.address-card .address-action .address-default {
    color: #fff;
    line-height: 1;
    padding: 3px 10px;
    display: inline-block;
    background-color: #dd1944;
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
</style>