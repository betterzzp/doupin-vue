<template>
    <div id="footer">
        <div class="footer-wrapper">
            <div class="footer-left">
                <span class="logo">
                    <i class="mui-icon logo"></i>
                </span>
                <div class="info">
                    <p>
                    © 2019 market.douban.com, all rights reserved <a href="https://img3.doubanio.com/img/files/file-1558339469-0.png" target="_blank">北京豆瓣豆品文化有限公司</a>
                    </p>
                    <p>
                    <a href="https://img3.doubanio.com/img/files/file-1565582107-0.jpg" target="_blank">食品经营许可证: JY11105111524423</a>
                    </p>
                    <p>
                    <a href="https://img3.doubanio.com/img/files/file-1565582243-0.jpg" target="_blank">出版物经营许可证：新出发京批字第直170330号</a>
                    </p>
                </div>
            </div>
            <div class="footer-right">
                <div class="footer-kits">
                    <a class="item" id="openMarketInfo">
                    <i class="mui-icon question-circle"></i>
                    <span>购物说明</span>
                    </a>
                    <a class="item" target="_blank" href="https://www.douban.com/doumail/write?to=119347429">
                    <i class="mui-icon pencil"></i>
                    <span>意见反馈</span>
                    </a>
                    <a class="item" href="https://bizpage.douban.com/business/">
                    <i class="mui-icon message"></i>
                    <span>商务合作</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'doupinFooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }  
}
</script>
<style scoped>
#footer {
    width: 100%;
    background-color: #f9f9f9;
    border-top: 1px solid #f9f9f9;
    padding-top: 1000px;
    padding-bottom: 45px;
    margin-top: 60px;
    height:120px;
    color: #ababac;
}
#footer .footer-wrapper {
    zoom: 1;
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
    color: #ababac;
    text-align: center;
}
#footer .footer-left {
    float: left;
}
#footer .logo {
    font-size: 26px;
    line-height: 1em;
    margin-bottom: 10px;
    text-align: left;
}
#footer .info, #footer .logo {
    display: block;
    vertical-align: top;
    color: #ababac;
}
#footer .logo {
    font-size: 26px;
    line-height: 1em;
    margin-bottom: 10px;
    text-align: left;
}
#footer .logo {
    font-size: 26px;
    line-height: 1em;
    margin-bottom: 10px;
    text-align: left;
}
.mui-icon {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.mui-icon.logo:before {
    content: "豆瓣|豆品";
}
#footer .info {
    font-size: 12px;
    line-height: 21px;
    text-align: left;
}

#footer .info, #footer .logo {
    display: block;
    vertical-align: top;
    color: #ababac;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
#footer .footer-right {
    float: right;
}
#footer .footer-kits {
    font-size: 14px;
    margin-bottom: 30px;
    margin-top: 5px;
}
#footer .footer-kits .item {
    color: #ababac;
    margin-left: 60px;
    text-align: right;
}

a, a:active, a:hover, a:link, a:visited {
    color: #ababac;
    cursor: pointer;
    text-decoration: none;
}
a {
    cursor: pointer;
    text-decoration: none;
}
</style>