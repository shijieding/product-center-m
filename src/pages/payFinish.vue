<template>
    <div>
        <div class="tit">
            <p>暂不支持微信支付</p>
            <p>请转到线下支付</p>
        </div>
        <div class="btn">
            <router-link to="/">返回首页</router-link>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        data() {
            return {}
        },
        components: {},
        methods: {

        }
    }
</script>

<style scoped>
    .tit {
        margin-top: 200px;
    }
p {
    font-size: 15px;
    color:#f0eded;
    text-align: center;
}
    .btn a {
        background: #ef8300;
        color:#f0eded;
        width:136px;
        height:30px;
        line-height: 30px;
        margin:0 auto;
        text-align: center;
        display:block;
        font-size: 12px;
        margin-top: 43px;
        border-radius: 6px;
    }
</style>