<template>
    <div class="con">
        <div class="m_h">
            <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
        </div>
        <div class="m_c">
            <div v-show="id==1">
                <h1>电磁阀操作说明</h1>
                <h3 class="img">
                    <img src="../../assets/img/pdetail/p1-07.png" alt="">
                </h3>
            </div>
        </div>


    </div>
</template>

<script type="es6">
    const list = [
        {
            id:1,
            name:'操作说明'
        }
    ];
    export default {
        data() {
            return {
                list:list,
                id:1
            }
        },
        components: {},
        methods: {
            toggle(n){
                this.id = n;
            }
        }
    }
</script>

<style src="../../assets/css/detail.css"></style>