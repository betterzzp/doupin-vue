<template>
    <div>
        <div> 
            <doupinHeader/>
        </div>

        <div class="market-wrapper" id="payment">
            <div class="payment-header">
                <h2 class="header-title">收银台</h2>
            </div>
        </div>
        <div class="pay-content">
            <div class="title">
                请选择付款方式
            </div>
            <div class="pay-info">
                <span>
                    订单号：1430705088
                </span>
                <span class="amount">
                    <em>实付金额：</em>
                    <em class="real_amount">168.00</em>
                </span>
            </div>
        </div>

        <div class="pay-box">
            <div class="alipay-box">
                <div calendar="auto-qr-code" qr-width="145" qr-height="145">
                    <div id="aliImg">
                        <iframe src="https://openapi.alipay.com/gateway.do?version=1.0&amp;timestamp=2019-12-08+22%3A03%3A57&amp;charset=utf-8&amp;app_id=2017120800461419&amp;biz_content=%7B%22body%22%3A+%22%5Cu8c46%5Cu74e3%5Cu7535%5Cu5f71%5Cu65e5%5Cu53862020%22%2C+%22out_trade_no%22%3A+%221050000001430705088%22%2C+%22passback_params%22%3A+%22%7Cpayment_id%3A683592%7Cuser_id%3A139238273%22%2C+%22total_amount%22%3A+168.0%2C+%22qrcode_width%22%3A+145%2C+%22qr_pay_mode%22%3A+4%2C+%22enable_pay_channels%22%3A+null%2C+%22product_code%22%3A+%22FAST_INSTANT_TRADE_PAY%22%2C+%22timeout_express%22%3A+%2230m%22%2C+%22subject%22%3A+%22%5Cu8c46%5Cu74e3%5Cu7f51+%5Cu8c46%5Cu74e3%5Cu7535%5Cu5f71%5Cu65e5%5Cu53862020%22%7D&amp;sign=sr6h25OAuLJglOQvOlmtM9LUQ7vo0M8M4Ya4IYgUxgKyQilzJbL1D2qSYwiVQytUzI%2F2lpo0fser%2BLXee59AmRKHz1Qgulg3HFThxpdC9Xcwd1wVchTDDNKwYB%2BC6vonkOQ4cxSWE71NqvakSbhm7fZBAXLF%2FylkRiEmruh5ENk8HEHGcEZO2CXDaKKyXiKJ9PumCVuK03OVjQuf7w8QCgnkKycND%2BLgsG2KEAwrIbwwZShZ62tSOXIPKp5QzRzsaSWzC83p0%2BVd5uZDk3BpujPQyacL2mmN12FEnb0Mlz6%2BXdNuJXzo894R%2Bnk1b0oZbV%2F5MPVTQL6RX1dofHQpUQ%3D%3D&amp;notify_url=https%3A%2F%2Fwinterfell.douban.com%2Fnotify%2Fcollect%2Falipay%2Fpay&amp;sign_type=RSA2&amp;method=alipay.trade.page.pay" width="145" height="145"></iframe>
                    </div>
                </div>

                <div class="pay-describe">
                    使用支付宝扫描此二维码进行支付
                </div>

                <div class="pay-title">
                    支付宝支付
                </div>
            </div>

            <div class="divide-line"></div>

            <div class="wechat-box">
                <div class="auto-qr-code" qr-src="weixin://wxpay/bizpayurl?pr=n8tgyqP" qr-id="wxQrcode" qr-width="140" qr-height="140" qr-finish="true">
                    <div class="wx-qrcode">
                    <canvas id="wxQrcode" height="145" width="145" style="height: 145px; width: 145px;"></canvas>
                    <img src="https://img3.doubanio.com/f/market/c4e25c7e72554c5112e5623a00be070b3c8112cd/pics/payment/wechat.png" class="wechat-log">
                    </div>
                </div>
                <div class="pay-describe">使用微信扫描此二维码进行支付</div>
                <div class="pay-title">微信支付</div>
            </div>

        </div>

        <div>
            <doupin-footer/>
        </div>
    </div>    
</template>

<script>
import doupinHeader from '@/components/header'
import doupinFooter from '@/components/footer'
export default {
    name: 'paymentComponent',
    components:{
        doupinHeader,doupinFooter
    },
    data(){
        return{
        }
    },
}
</script>

<style scoped>
.payment-header {
    margin: 40px 0 30px;
}
.payment-header .header-title {
    font-size: 21px;
    font-weight: 700;
    color: #3e3a39;
}
.market-wrapper {
    width: 950px;
    margin-left: auto;
    margin-right: auto;
}
.pay-content .title {
    font-size: 14px;
    color: #3e3a39;
}
.pay-content .pay-info, .pay-content .title {
    font-size: 14px;
    color: #3e3a39;
}
.pay-content .pay-info span {
    margin-right: 20px;
}
.pay-content .pay-info em {
    font-weight: 700;
    color: #3e3a39;
}
.pay-content .pay-info .real_amount {
    color: #dd1944;
}
.pay-content .pay-info em {
    font-weight: 700;
    color: #3e3a39;
}
.pay-box {
    text-align: center;
    margin-top: 50px;
}

.pay-box .alipay-box {
    display: inline-block;
}
.pay-box .alipay-box #aliImg {
    display: inline-block;
    margin: 0 109px 43px;
}
.pay-box .alipay-box #aliImg iframe {
    width: 150px;
    height: 150px;
}
.pay-box .pay-describe, .pay-box .pay-title {
    font-size: 14px;
    color: #3e3a39;
    text-align: center;
}
.pay-box .pay-describe {
    margin-bottom: 20px;
    vertical-align: bottom;
}
.pay-box .pay-title {
    line-height: 14px;
    font-weight: 600;
    margin-bottom: 17px;
}
.pay-box .pay-describe, .pay-box .pay-title {
    font-size: 14px;
    color: #3e3a39;
    text-align: center;
}
.pay-box .divide-line {
    display: inline-block;
    width: 1px;
    height: 200px;
    background-color: #6e6e6e;
    vertical-align: top;
}
.pay-box .wechat-box {
    display: inline-block;
}
.pay-box .wechat-box .wx-qrcode {
    display: inline-block;
    margin: 0 109px 48px;
    position: relative;
}
.pay-box .wechat-box .wechat-log {
    width: 35px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -17.5px;
    margin-top: -17.5px;
}
.pay-box {
    text-align: center;
    margin-top: 50px;
}
.pay-box .pay-describe, .pay-box .pay-title {
    font-size: 14px;
    color: #3e3a39;
    text-align: center;
}
.pay-box .pay-describe {
    margin-bottom: 20px;
    vertical-align: bottom;
}
.pay-box .pay-title {
    line-height: 14px;
    font-weight: 600;
    margin-bottom: 17px;
}
.pay-box .pay-describe, .pay-box .pay-title {
    font-size: 14px;
    color: #3e3a39;
    text-align: center;
}
</style>