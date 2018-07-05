<template>
    <div class="myloader">
        <div style="background: #000;height:100%;text-align: center;display:flex;align-items: center;">
            <img src="../assets/img/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
    export default {
      name: 'loading'
    }
</script>

<!--<style scoped src="../assets/css/loading.css"></style>-->
<style scoped>
    .myloader {
        width:100%;
        height:100%;
        position: fixed;
        left:0;
        top:0;
        z-index: 999;
    }
    img {
        margin:0 auto;
      width:120px;
    }
</style>
