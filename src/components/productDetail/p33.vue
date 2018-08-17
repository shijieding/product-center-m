<template>
    <div class="con">
        <div class="m_h">
            <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
        </div>
        <div class="m_c">
            <div v-show="id==1">
                <h1>电子耳标钳维护调节</h1>
                <h2>一、耳标钳标注图</h2>
                <h3 class="img">
                    <img src="../../assets/img/pdetail/p6-01.png" alt="">
                </h3>
                <h2>二、间距调节方法</h2>
                <h3 class="num"><span>1、</span>钳针和钳口的距离偏小调节步骤。</h3>
                <h3 class="img">
                    <img src="../../assets/img/pdetail/p6-02.png" alt="">
                </h3>
            </div>
            <div v-show="id==2">
                <h1>电子耳标钳操作说明</h1>
                <h2>一、操作方法</h2>
                <h3>建议工作中先将公扣安装在钳针上，再将母扣通过耳标压片安装在钳口的U型槽上。</h3>
                <h3 class="img">
                    <img src="../../assets/img/pdetail/p6-05.png" alt="">
                </h3>
            </div>
            <div v-show="id==3">
                <h1>电子耳标钳常见问题</h1>
                <h2>一、更换钳针方法</h2>
                <h3>一只手扳住钳柄把顶杆推出不动，另一只手把钳针拧下，然后换上新的钳针即可。</h3>
                <h3 class="img">
                    <img src="../../assets/img/pdetail/p6-04.png" alt="">
                </h3>
            </div>
        </div>


    </div>
</template>

<script type="es6">
    const list = [
        {
            id:1,
            name:'维护调节'
        },
        {
            id:2,
            name:'操作说明'
        },
        {
            id:3,
            name:'常见问题'
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
