<template>
  <div class="con">
    <div class="m_h">
      <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
    </div>
    <div class="m_c">
      <div v-show="id==1">
        <h1>秤宝设备安装说明</h1>
        <div class="red">
          <h2 class="left red" style="width:17%;">特别提醒：</h2>
          <h2 class="left red" style="width:83%;">请认真阅读本说明，未遵守或未满足本说明下述要求，造成设备故障，不在保修范围内。</h2>
        </div>
        <h2>一、设备储存、安装条件</h2>
        <h3>设备应储存、安装于室内。</h3>
        <h2>二、设备清单</h2>
        <h3 class="num"><span>1、</span>秤宝设备一台，配套充电器一个；</h3>
        <h3 class="num"><span>2、</span>除秤宝设备以外，在安装过程中所涉及到的螺丝、插座等，请使用方自行准备；</h3>
        <h3 class="num"><span>3、</span>设备图示</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p32.jpg" alt="">
        </h3>
        <h2>三、设备安装步骤</h2>
        <h3 class="num"><span>1、</span>安装位置须有移动网络；</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p33.jpg" alt="">
        </h3>
        <h3 class="num"><span>2、</span>如图所示，设备两侧共4个圆孔，用于设备固定。</h3>
        <div class="red" style="overflow: hidden;">
          <h2 class="left red" style="width:17%;">特别提醒：</h2>
          <h2 class="left red" style="width:83%;">移动使用秤宝时，可断开防水插头（内置锂电池），但应每天及时充电。</h2>
        </div>
      </div>
      <div v-show="id==2">
        <h1>秤宝设备操作说明</h1>
        <h3 class="num"><span>①、</span>设备连接电子秤数据线，开启电子秤；</h3>
        <h3 class="num"><span>②、</span>设备连接充电器（电量充足可不用连接）；</h3>
        <h3 class="num"><span>③、</span>按一下功能按键，设备开机，信号指示灯闪烁，开始联网。联网成功灯常亮并用七种颜色指示信号强度。红、绿、蓝、黄、紫、青、白对应信号强度0、1、2、3、4、5、6.最强级别为6。</h3>
        <h3 class="num"><span>④、</span>秤上无重物，称重指示灯熄灭，称重过程中称重指示灯闪烁，得到有效数据随即上传，传送成功灯常亮；</h3>
        <h3 class="num"><span>⑤、</span>按一次功能键，可重新上传一次称重数据（未接收到有效数据等特殊情况下使用）；</h3>
        <h3 class="num"><span>⑥、</span>电子秤关闭或数据线未接入，设备将自动关机；</h3>
        <h3 class="num"><span>⑦、</span>长按功能键（3秒）将关机。</h3>
        <h3><span></span>设备图示</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p34.jpg" alt="">
        </h3>
      </div>
      <div v-show="id==3">
        <h1>秤宝设备常见问题</h1>
        <h2>秤宝异常解决方法</h2>
        <h2>1、信号指示灯一直闪烁直至关机、信号很弱或无法连接网络；请更换位置重试；</h2>
        <h2>2、物体拿下后称重指示灯不熄灭，请将电子秤归零。</h2>
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
