<template>
    <div>
        <div class="content">
            <p>
                您购买的产品数量共计 <span class="red">{{num}}</span> 件，
            </p>
            <p>
                需支付预付款<span class="red">{{totalPrice}}</span>元，
            </p>
        </div>
        <div class="footer">
            <div class="button_box">
                <router-link to="/payFinish" class="btn" style="background-color:#ef8300">微信支付</router-link>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        data() {
            return {
                num:'',
                totalPrice:''
            }
        },
      metaInfo: {
        title: '支付'
      },
        components: {},
        mounted () {
            this.num = this.$route.query.num;
            this.totalPrice = this.$route.query.totalPrice;
        },
        methods: {}
    }
</script>

<style scoped>
    div.button_box {
        margin:1em auto;
    }

    .button_box .btn {
        display:block;
        margin:0 auto;
        width:70%;
        height:3em;
        line-height: 3em;
        font-size: 1.4em;
        color:#131313;
        text-align: center;
        background-color: #c0c6cd;
        border-radius: .5em;
        font-weight: normal;
    }
    .footer .button_box .btn {
        color:#131313;
    }
    .content {
        margin:50% auto;
    }
    .content p {
        text-align: center;
        font-size: 1.5em;
        line-height: 2em;
        color:#fff;
    }
    .footer {
        position:fixed;
        bottom:1.2em;
        width:100%;
    }
    .footer .button_box .btn {
        color:#fff;
        background-color: #ff2347;
    }
    span.red {
        color:#ff2347;
    }
</style>
