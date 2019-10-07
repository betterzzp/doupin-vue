<template>
    <div>
        <div>
            <doupinHeader/>
        </div>

        <div class="market-wrapper">
            <div id="market-header">
                <div class="payment-header">
                    <h2 class="header-title">收银台</h2>
                </div>
            </div>
            <div class="pay-content">
                <div class="title">
                    请选择付款方式
                </div>

                <div class="pay-info">
                    <span>订单号：4707718340</span>
                    <span class="amount">
                    <em>实付金额：</em>
                    <em class="real_amount">66.00</em>
                    </span>
                </div>

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
.market-wrapper {
    width: 950px;
    margin-left: auto;
    margin-right: auto;
}
.payment-header {
    margin: 40px 0 30px;
}

.pay-content .title {
    margin-bottom: 10px;
    text-align: left;
}

.payment-header .header-title {
    font-size: 21px;
    font-weight: 700;
    color: #3e3a39;
    text-align: left;
}

.pay-content .pay-info, .pay-content .title {
    font-size: 14px;
    color: #3e3a39;
    text-align:left;
}

.pay-content .pay-info span {
    margin-right: 20px;
}

.pay-content .pay-info .real_amount {
    color: #dd1944;
}
.pay-content .pay-info em {
    font-weight: 700;
    color: #3e3a39;
}
</style>