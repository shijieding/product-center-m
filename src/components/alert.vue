<template>
    <div>
        <div class="mark">
            <div class="alert-content">
                <p>
                    <slot name="delete"></slot>
                </p>
                <div class="button-box textcenter">
                    <div><button class="true" @click="myDelete">确定</button></div>
                    <div><button class="false" @click="closeMySelf">取消</button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
  .mark {
    position: absolute;
    z-index: 99;
    left:0;
    bottom:0;
    top:0;
    right: 0;
    width:100%;
    height:100%;
    /*background-color: rgba(200,200,200,0.1);*/
  }
</style>
<!--<style>
    .mark {
        position: absolute;
        z-index: 99;
        left:0;
        bottom:0;
        top:0;
        right: 0;
        width:100%;
        height:100%;
        /*background-color: rgba(200,200,200,0.1);*/
    }
    .mark .alert-content {
        width:305px;
        /*height:130px;*/
        margin:200px auto;
        background-color: #fff;
        border-radius: 5px;
        padding:10px;
    }
    .alert-content p {
        font-size: 14px;
        line-height: 14px;
        color:#000;
        margin:20px 0;
        padding:0 10px;
    }
    .button-box {
        overflow:hidden;
    }
    .button-box>div {
        float:left;
        width:50%;
        text-align: center;
        overflow: hidden;
    }
    .alert-content .button-box button {
        width:70px;
        height:34px;
        border:1px solid #bebebe;
        color:#0c0c0c;
        border-radius: 3px;
        margin: 10px 30px;
    }
    .button-box button.false {
        background-color: transparent;
    }
    .alert-content .button-box button:hover {
        cursor:pointer;
    }
</style>-->
<script type="es6">
    export default {
        data () {
            return {

            }
        },
        methods:{
            closeMySelf () {
                this.$emit('on-close',false)
            },
            myDelete () {
                this.$emit('on-close',true)
            }
        }
    }

</script>
