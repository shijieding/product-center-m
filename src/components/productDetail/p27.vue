<template>
    <div class="con">
        <div class="m_h">
            <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
        </div>
        <div class="m_c">
            <div v-show="id==1">
                <h1>阅读器操作说明</h1>
                <h2>一、特别提醒</h2>
                <h3>用户首次使用前，打开黑色密封盖，取出跳线，设备自动开机。</h3>
                <h3>(跳线仅为避免设备在运输中误开机，取下跳线后，无需再插上)。</h3>
                <h3 class="img">
                    <img src="../../assets/img/pdetail/p5-01.png" alt="">
                </h3>
                <h2>二、开机方式</h2>
                <h3>一手持阅读器，另一只手敲击棒端，液晶屏点亮，证明设备已开机。</h3>
                <h3 class="img">
                    <img src="../../assets/img/pdetail/p5-02.png" alt="">
                </h3>
                <h2>三、联机使用方法</h2>
                <h3 class="img">
                    <img src="../../assets/img/pdetail/p5-03.png" alt="">
                </h3>
                <h2>四、航空插头拔下方法</h2>
                <h3>如图所示，手紧捏住航空插头下方的推拉卡扣，使劲往上拨即可。</h3>
                <h3 class="img">
                    <img src="../../assets/img/pdetail/p5-04.png" alt="">
                </h3>
                <h2>五、关机方式</h2>
                <h3>设备在没有读取电子标签的情况下，静止60s后，自动关机。</h3>
                <h3 style="margin-top: 20px;color:#aaa">该页面中手机只为演示物品，不在本产品的出售范围之内。</h3>
            </div>
            <div v-show="id==2">
                <h1>阅读器常见问题及处理</h1>
                <h2>一、液晶屏不点亮不显示解决方法</h2>
                <h3 class="num"><span>1、</span>尝试给设备充电；</h3>
                <h3 class="num"><span>2、</span>交厂商进行维修。</h3>
                <h2>二、阅读器提示"RF ERROR"或"BT ERROR"解决方法</h2>
                <h3 class="num"><span>1、</span>尝试重新开机；</h3>
                <h3 class="num"><span>2、</span>交厂商进行维修。</h3>
                <h2>三、出现未识别标签或阅读距离明显下降解决方法</h2>
                <h3 class="num"><span>1、</span>适当移动阅读器或标签；</h3>
                <h3 class="num"><span>2、</span>尝试给设备充电。</h3>
                <h2>四、阅读器与手机无法连接解决方法</h2>
                <h3 class="num"><span>1、</span>检查阅读器是否开机；</h3>
                <h3 class="num"><span>2、</span>手机蓝牙是否打开；</h3>
                <h3 class="num"><span>3、</span>阅读器蓝牙异常，尝试重新开机。</h3>
            </div>
        </div>


    </div>
</template>

<script type="es6">
    const list = [
        {
            id:1,
            name:'操作说明'
        },
        {
            id:2,
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