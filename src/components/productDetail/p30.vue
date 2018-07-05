<template>
    <div class="con">
        <div class="m_h">
            <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
        </div>
        <div class="m_c">
            <div v-show="id==1">
                <h1>智能计重秤常见问题及处理</h1>
                <h2>一、开机后显示"-SYS-"解决方法</h2>
                <h3>系统错误，请尝试重启。</h3>
                <h2>二、显示"-Lo-"解决方法</h2>
                <h3>电池电量低，请及时给计重秤充电。</h3>
                <h2>三、显示"-OF-"，并连续发声报警解决方法</h2>
                <h3>超出称重范围，请控制称重物在有效范围内。</h3>
                <h2>四、开机后显示"-UNSTA-"解决方法</h2>
                <h3>台面不平稳或强烈震动，请将计重秤放平稳后开机。</h3>
                <h2>五、无法开机解决方法</h2>
                <h3>计重秤电量已耗尽，请及时给计重秤充电。</h3>
            </div>
        </div>


    </div>
</template>

<script type="es6">
    const list = [
        {
            id:1,
            name:'常见问题及处理'
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