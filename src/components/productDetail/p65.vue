<template>
  <div class="con">
    <div class="m_h">
      <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
    </div>
    <div class="m_c">
      <div v-show="id==1">
        <h1>产房机器人安装说明</h1>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:15%;">特别提醒：</div>
          <div class="left" style="width:80%;">请认真阅读本说明，未遵守或未满足本说明下述要求，造成设备故障，不在保修范围内。</div>
        </div>
        <h2>一、设备储存、安装条件</h2>
        <h3>设备应储存、安装于室内。</h3>
        <h2>二、设备清单</h2>
        <h3 class="num"><span>1、</span>产房机器人1台；</h3>
        <h3 class="num"><span>2、</span>电源适配器1套；</h3>
        <h3 class="num"><span>3、</span>下水装置1套；</h3>
        <h3 class="num"><span>4、</span>除以上设备外，在安装过程中所涉及到的管、线、水阀、插座等，使用方自行准备；</h3>
        <h3 class="num"><span>5、</span>设备图示</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p17.png" alt="">
        </h3>
        <h2>三、水、电、饲料配备</h2>
        <h3 class="pd73"><span>1、饲料：①</span>粉料、颗粒料均可，建议使用颗粒料，如遇粉料结拱，请人工干预；</h3>
        <h3 class="pd73"><span><i style="color:transparent;">1、饲料：</i>②</span>设备断料将影响正常饲喂。</h3>
        <h3 class="pd73"><span><i style="color:transparent;">1、饲料：</i>③</span>粉料和颗粒料均不允许有杂物，因杂物造成的设备故障将影响设备正常运行和使用寿命。</h3>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:74px;text-align: right;">特别提醒：</div>
          <div class="left" style="width:77%;">粉料和颗粒料均不允许有杂物，因杂物造成的设备故障将影响设备正常运行和使用寿命。</div>
        </div>
        <h3 class="pd73"><span>2、电源：①</span>每台设备需配备10安培三孔防水插座(AC220V零火地三线良好接入)，要求插座与设备电源距离控制在1米以内；</h3>
        <h3 class="pd73"><span><i style="color:transparent;">1、饲料：</i>②</span>建议以舍为单位使用单独空气开关控制；</h3>
        <h3 class="pd73"><span><i style="color:transparent;">1、饲料：</i>③</span>每台设备功率最高不超过72W，请根据设备数量，选择合适的线径布线；</h3>
        <h3 class="pd73"><span><i style="color:transparent;">1、饲料：</i>④</span>请合理固定电源适配器及引线，以防止老鼠的啃咬。</h3>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:74px;text-align: right;">特别提醒：</div>
          <div class="left" style="width:77%;">请猪场保证电压平稳正常，否则容易导致电源适配器损坏或设备运行不正常。</div>
        </div>
        <h3 class="pd73"><span>3、水源：①</span>水压范围在0.1Mpa-0.4Mpa为宜，水压不足或超压将严重影响设备正常运行；</h3>
        <h3 class="pd73"><span><i style="color:transparent;">1、饲料：</i>②</span>请在每台设备上单独安装水阀，设备入水口为4公分外螺纹；</h3>
        <h3 class="pd73"><span><i style="color:transparent;">1、饲料：</i>③</span>请使用清洁水源或安装水源过滤器，保证电磁阀正常工作。</h3>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:74px;text-align: right;">特别提醒：</div>
          <div class="left" style="width:77%;">为确保设备正常运行，精准控制水料比，建议配置水宝(见产品中心)。</div>
        </div>
      </div>
      <div v-show="id==2">
        <h1>产房机器人操作说明</h1>
        <h2>一、基本操作</h2>
        <h3 class="num"><span>1、</span>产房机器人两侧面板图示</h3>
        <h3 class="img" style="overflow: hidden">
          <img src="http://znswsse.com:8031/pdetail/p19.png" alt="" style="margin-left: -20px;">
        </h3>
        <h3 class="num"><span>2、</span>指示灯介绍</h3>
        <h3 class="num m44"><span>①</span>产前饲喂时，白灯亮；</h3>
        <h3 class="num m44"><span>②</span>产后饲喂时，绿灯亮；</h3>
        <h3 class="num m44"><span>③</span>空栏状态时，蓝灯亮；</h3>
        <h3 class="num m44"><span>④</span>下料或下水异常时，红灯亮；</h3>
        <h3 class="num m44"><span>⑤</span>清料时，紫灯亮</h3>
        <h3 class="num"><span>3、</span>触摸键基本操作</h3>
        <h3 class="num m44"><span>①</span>按一次触摸键，可执行一次投料与下水；</h3>
        <h3 class="num m44"><span>②</span>连续触摸两次进入状态切换模式，再连续触摸两次确定状态；</h3>
        <h3 class="num m44"><span>③</span>连按触摸三次，进入清料状态。</h3>
        <h3 class="num m44"><span>④</span>连续触摸五次，进入产前状态。</h3>
        <h2 class="yellow">二、操作注意事项</h2>
        <h3 class="num yellow"><span>1、</span>确认料桶内饲料充足（粉料、颗粒料均可，建议使用颗粒料）；</h3>
        <h3 class="num yellow"><span>2、</span>确认管路供水正常（水压范围在0.1Mpa~0.4Mpa为宜）；</h3>
        <h3 class="num yellow"><span>3、</span>确认设备供电正常（设备运行需电源供电，频繁断电将影响正常饲喂）。</h3>
      </div>
      <div v-show="id==3">
        <h1>产房机器人安装准备</h1>
        <h2>一、安装准备工作</h2>
        <h3 class="num"><span>1、</span>安装规划</h3>
        <h3 class="num m44">每张产床安装一台产房机器人。</h3>
        <h3 class="num"><span>2、</span>设备固定方法</h3>
        <h3 class="num m44">产房机器人悬挂于料线下料开口下方，用扎带固定。</h3>
        <h3 class="num"><span>3、</span>避雷及电源保护</h3>
        <h3 class="num">必须保证电源插座可靠接地，并安装防雷设施，避免设备受损。</h3>
        <h3 class="num"><span>4、</span>易损件</h3>
        <h3 class="num">电磁阀为易损件，过滤网依据水质需要定期清洗。</h3>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:74px;text-align: right;">特别提醒：</div>
          <div class="left" style="width:77%;">应经常观察各紧固件是否松动，如发现问题应马上处理避免因紧固件松动产生故障隐患，影响设备正常使用。</div>
        </div>
        <h2>二、安装步骤</h2>
        <h3>产房机器人安装步骤如下图所示</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p18.png" alt="">
        </h3>
        <h3 class="num m44"><span>①</span>在产床料线下料开口下方悬挂产房机器人，可用扎带捆绑；</h3>
        <h3 class="num m44"><span>②</span>用随机提供的软管连接料线的下料三通（料线供应方提供并安装）与产房机器人的进料口；</h3>
        <h3 class="num m44"><span>③</span>将产房机器人的出料口对准母猪料槽下料管上端的接料装置；</h3>
        <h3 class="num m44"><span>④</span>在合适的位置固定好下水装置；</h3>
        <h3 class="num m44"><span>⑤</span>在合适的位置安装固定好电源适配器；</h3>
        <h3 class="num m44"><span>⑥</span>如已选装智能饮水碗，请安装固定饮水碗并连接数据线（数据线与接口一一对应）；</h3>
        <h3 class="num m44"><span>⑦</span>保证机器人与料线连接紧固、料线的下料三通与产房机器人进料口连接不漏料、产房机器人的出料口对准母猪料槽的下料管上端的接料装置。</h3>
        <h2>三、准备工作确认</h2>
        <h3>确认以下准备工作已完成，用户请及时通知服务人员联机使用。</h3>
        <h3 class="num"><span>1、</span>确认设备是否可靠安装到位；</h3>
        <h3 class="num"><span>2、</span>确认电源、水阀接入是否正常；</h3>
        <h3 class="num"><span>3、</span>确认供料是否正常；</h3>
        <h3 class="num"><span>4、</span>确认猪场内手机通信信号是否正常。</h3>
      </div>
      <div v-show="id==4">
        <h1>产房机器人常见问题</h1>
        <h2>一、下水异常解决方法</h2>
        <h3 class="num"><span>1、</span>检查是否停水；</h3>
        <h3 class="num"><span>2、</span>如未停水，手动按触摸键，如下水仍异常，请清理电磁阀过滤网，操作方法见下图；</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p20.png" alt="">
        </h3>
        <h3 class="num m44"><span>①</span>电磁阀如图所示，逆时针拧开螺丝帽；</h3>
        <h3 class="num m44"><span>②</span>按图示方向取出过滤网，并用清水清洗过滤网；</h3>
        <h3 class="num m44"><span>③</span>将过滤网重新放回，并按顺时针拧紧图示螺丝帽。</h3>
        <h3 class="num"><span>3、</span>若以上情况仍无效，请确认电磁阀是否损坏；如需更换电磁阀，请首先关闭设备电源后，参照易损件（电磁阀）；</h3>
        <h3 class="num"><span>4、</span>排除以上情况仍无效，请联系省饲儿的售后服务人员。</h3>
        <h2>二、下料异常解决方法</h2>
        <h3 class="num"><span>1、</span>尝试关机重启；</h3>
        <h3 class="num"><span>2、</span>检查料桶内是否有异物卡住旋转轴；</h3>
        <h3 class="num"><span>3、</span>排除以上情况仍失效，请联系省饲儿的售后服务人员。</h3>
        <h2>三、通讯异常解决方法</h2>
        <h3 class="num"><span>1、</span>检查设备是否供电正常；</h3>
        <h3 class="num"><span>2、</span>尝试关机重启；</h3>
        <h3 class="num"><span>3、</span>排除以上情况仍失效，请联系省饲儿的售后服务人员。</h3>
        <h2>四、个体识别异常解决方法</h2>
        <h3 class="num"><span>1、</span>检查设备是否供电正常；</h3>
        <h3 class="num"><span>2、</span>尝试关机重启；</h3>
        <h3 class="num"><span>3、</span>排除以上情况仍失效，请联系省饲儿的售后服务人员。</h3>
        <h2>五、环控异常解决方法</h2>
        <h3 class="num"><span>1、</span>检查设备是否供电正常；</h3>
        <h3 class="num"><span>2、</span>尝试关机重启；</h3>
        <h3 class="num"><span>3、</span>排除以上情况仍失效，请联系省饲儿的售后服务人员。</h3>
      </div>
      <div v-show="id==5">
        <h1>产房机器人相关配件</h1>
        <peijian></peijian>
      </div>
    </div>


  </div>
</template>
<script type="es6">
  import peijian from '../productDetail/bypeijian.vue'
  const list = [
    {
      id:1,
      name:'设备详情'
    },
    {
      id:3,
      name:'安装准备'
    },
    {
      id:2,
      name:'操作说明'
    },
    {
      id:4,
      name:'常见问题'
    },
    {
      id:5,
      name:'相关配件'
    }

  ];
  export default {
    data() {
      return {
        list:list,
        id:1
      }
    },
    components: {
      peijian
    },
    methods: {
      toggle(n){
        this.id = n;
      }
    }
  }
</script>

<style src="../../assets/css/detail.css"></style>
