<template>
    <div class="con">
        <div class="m_h">
            <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
        </div>
        <div class="m_c">
            <div v-show="id==1">
                <h1>猪宝设备安装说明</h1>
                <div class="red">
                    <h2 class="left red" style="width:17%;">特别提醒：</h2>
                    <h2 class="left red" style="width:83%;">请认真阅读本说明，未遵守或未满足本说明下述要求，造成设备故障，不在保修范围内。</h2>
                </div>
                <h2>一、设备储存、安装条件</h2>
                <h3>设备应储存、安装于室内。</h3>
                <h2>二、设备清单</h2>
                <h3 class="num"><span>1、</span>猪宝设备  1台；</h3>
                <h3 class="num"><span>2、</span>除猪宝设备以外，在安装过程中所涉及到的螺丝、插座等，请使用方自行准备；</h3>
                <h3 class="num"><span>3、</span>设备图示</h3>
              <h3 class="img">
                <img src="../../assets/img/pdetail/p3-02.png" alt="">
              </h3>
                <h2>三、设备安装步骤</h2>
                <h3 class="num"><span>1、</span>安装位置手机须能正常通话；</h3>

              <h3 class="img">
                <img src="../../assets/img/pdetail/p3-01.png" alt="" style="margin-left: -65px;">
              </h3>
                <h3 class="num"><span>2、</span>如图所示，设备两侧共4个圆孔，用于设备固定；</h3>
                <h3 class="num"><span>3、</span>建议配备10安培三孔防水插座（AC220V零火地三线良好接入），接通电源，设备自动开机。</h3>
            </div>
            <div v-show="id==2">
                <h1>猪宝设备操作说明</h1>
                <h2>一、猪宝配对操作步骤</h2>
                <h2 class="red">提示：确保猪宝配对的保育或育肥设备是开启状态</h2>
                <h3 class="img">
                    <img src="../../assets/img/pdetail/p3-03.png" alt="">
                </h3>
            </div>
            <div v-show="id==3">
                <h1>猪宝设备常见问题</h1>
                <h2>一、猪宝异常解决方法</h2>
                <h3 class="num"><span>1、</span>确认猪宝供电是否正常；</h3>
                <h3 class="num"><span>2、</span>将猪宝断电，1分钟后重新插上电源；</h3>
                <h3 class="num"><span>3、</span>猪宝安装位置手机须能正常通话，如手机信号偏弱，请将猪宝安装在手机能正常通话的位置。</h3>
            </div>
        </div>


    </div>
</template>

<script type="es6">
    const list = [
        {
            id:1,
            name:'安装说明'
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
