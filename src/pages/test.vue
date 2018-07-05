<template>
    <div>
        <img :src="mysrc" style="margin-top: 70%;width:30%;" alt="">
    </div>
</template>

<script type="es6">
    export default{
        name: 'index',
        data () {
            return {
               mysrc:'/static/img/aaaaaa.png'
            }
        }
    }
</script>

