<template>
  <div class="con">
    <div class="m_h">
      <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
    </div>
    <div class="m_c">
      <div v-show="id==1">
        <h1>育肥机器人安装说明</h1>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:15%;">特别提醒：</div>
          <div class="left" style="width:80%;">请认真阅读本说明，未遵守或未满足本说明下述要求，造成设备故障，不在保修范围内。</div>
        </div>
        <h2>一、设备储存、安装条件</h2>
        <h3>设备应储存、安装于室内。</h3>
        <h2>二、设备清单</h2>
        <h3 class="num"><span>1、</span>饲喂设备 &nbsp;&nbsp;&nbsp;1台；</h3>
        <h3 class="num"><span>2、</span>电源适配器 &nbsp;&nbsp;&nbsp;1套；</h3>
        <h3 class="num"><span>3、</span>除饲喂设备和电源适配器以外，在安装过程中所涉及到的管、线、水阀、插座等，使用方自行准备；</h3>
        <h3 class="num"><span>4、</span>设备图示</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p06.png" alt="">
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
        <h1>育肥机器人操作说明</h1>
        <h2>一、基本操作</h2>
        <h3 class="num"><span>1、</span>指示灯介绍</h3>
        <h3 class="num m44"><span>①</span>正常状态：绿灯点亮，自动饲喂状态；</h3>
        <h3 class="num m44"><span>②</span>故障状态：红灯点亮，下料或下水异常；</h3>
        <h3 class="num m44"><span></span><i style="color:transparent;">故障状态：</i>黄灯点亮，通信中断，饲喂仍可继续；</h3>
        <h3 class="num m44"><span>③</span>清料状态：紫灯点亮，正在清料或清洗。</h3>
        <h3 class="img" style="overflow: hidden">
          <img src="../../assets/img/pdetail/p1-02.png" alt="" style="margin-left: -20px;">
        </h3>
        <h3 class="num"><span>2、</span>触摸键基本操作</h3>
        <h3 class="num m44"><span>①</span>按一次触摸键，可执行一次投料与下水；</h3>
        <h3 class="num m44"><span>②</span>连按三次触摸键，进入清料及清洗状态。</h3>
        <h3 class="num"><span>3、</span>出栏清料操作</h3>
        <h3 class="num m44"><span>①</span>连按三次触摸键，紫色灯点亮，进入清料状态；</h3>
        <h3 class="num m44"><span>②</span>清料过程2分钟会自动退出，如需直接退出请再按一次触摸键；</h3>
        <h3 class="num m44"><span>③</span>请将料桶中的残余料清理干净，避免料板结，影响设备正常运行。</h3>
        <h3 class="num"><span>4、</span>设备清洗操作</h3>
        <h3 class="num m44"><span>①</span>接通电源，连按三次触摸键，紫色灯点亮，进入清洗状态；</h3>
        <h3 class="num m44"><span>②</span>用水冲洗设备，包括料桶内残余饲料、粉尘等，需冲洗干净；</h3>
        <h3 class="num m44"><span>③</span>设备冲洗干净后，断电晾干。</h3>
        <h2 class="yellow">二、操作注意事项</h2>
        <h3 class="num yellow"><span>1、</span>确认料桶内饲料充足（粉料、颗粒料均可，建议使用颗粒料）；</h3>
        <h3 class="num yellow"><span>2、</span>确认管路供水正常（水压范围在0.1Mpa~0.4Mpa为宜）；</h3>
        <h3 class="num yellow"><span>3、</span>确认设备供电正常（设备运行需电源供电，频繁断电将影响正常饲喂）。</h3>
      </div>
      <div v-show="id==3">
        <h1>育肥机器人安装准备</h1>
        <h2>一、安装准备工作</h2>
        <h3 class="num"><span>1、</span>安装规划</h3>
        <h3 class="num m44"><span>①</span>建议每台设备饲喂35-45头仔猪；</h3>
        <h3 class="num m44"><span>②</span>两栏共用1台设备（小栏）或1栏1台设备（大栏），为方便操作，建议将指示灯一侧靠近通道安装（见下图）；</h3>
        <h3 class="num m44"><span>③</span>为方便料线、水线、电源安装使用，建议设备离通道距离小于1米。</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p35.png" alt="">
        </h3>
        <h3 class="num"><span>2、</span>避雷及电源保护</h3>
        <h3 class="num">必须保证电源插座可靠接地，并安装防雷设施，避免设备受损。</h3>
        <h3 class="num"><span>3、</span>易损件</h3>
        <h3 class="num">本设备电磁阀和电源适配器为易损件，不在保修范围内。(建议将水线和加药线分开，或经常清洁水线和电磁阀过滤网，避免水线杂物影响电磁阀正常工作)。</h3>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:74px;text-align: right;">特别提醒：</div>
          <div class="left" style="width:77%;">应经常观察各紧固件是否松动，如发现问题应马上处理避免因紧固件松动产生故障隐患，影响设备正常使用。</div>
        </div>
        <h2>二、安装步骤</h2>
        <h3 class="num"><span>1、</span>料盘与主支架固定</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p09.png" alt="">
        </h3>
        <h3 class="num m44"><span>①</span>料盘放置合适位置；</h3>
        <h3 class="num m44"><span>②</span>将主支架放置于料盘上方；</h3>
        <h3 class="num m44"><span>③</span>主支架探棒须缓慢穿过保护探棒组件限位孔；</h3>
        <h3 class="num m44"><span>④</span>用螺丝将探棒保护组件与主支架紧固,螺丝孔位共2个；</h3>
        <h3 class="num m44"><span>⑤</span>用铆钉将主支架料盘固定板与料盘紧密固定，铆钉孔单侧6个，共12个。</h3>
        <h3 class="num"><span>2、</span>料桶与主支架固定</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p10.png">
        </h3>
        <h3 class="num m44"><span>①</span>主支架放置合适位置；</h3>
        <h3 class="num m44"><span>②</span>将料桶缓慢放置于主支架正上方；</h3>
        <h3 class="num m44"><span>③</span>料桶底部与下料机构U型槽底部完全贴合</h3>
        <h3 class="num m44"><span>④</span>料桶和育肥机器人主支架通过自攻螺钉连接紧固</h3>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:44px;text-align: right;">注意：</div>
          <div class="left" style="width:77%;">
            <div>1、安装、固定料桶时，注意将料桶两侧自攻螺钉通槽与育肥机器人主支架两侧料桶固定板的自攻螺钉通孔对齐；</div>
            <div>2、可用橡胶锤轻击料桶上部边缘，以保证料桶底部与下料机构U型槽底部完全贴合。</div>
          </div>
        </div>
        <h3 class="num"><span>3、</span>主支架与地面固定</h3>
        <h3 class="num m44"><span>1、</span>分为水泥地面固定和与漏缝板地面固定两种</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p11.png">
        </h3>
        <h3 class="num m44"><span>①</span>水泥地面建议用膨胀螺栓固定，地面打孔直接为14mm，数量为4个，打孔位置如上图所示；</h3>
        <h3 class="num m44"><span>②</span>漏缝地板建议用T型螺栓固定。T型螺栓固定位置如上图所示；</h3>
        <h3 class="num m44"><span>2、</span>平垫、弹垫、螺母、盖母依次从下到上放置并紧固，机器人即安装固定完成（如下图）。</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p12.png">
        </h3>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:44px;text-align: right;">注意：</div>
          <div class="left" style="width:77%;">
            <div>1、无论选用何种安装固定方式，都应确保与地面安装牢固、耐用，并且保证料盘水平；</div>
            <div>2、为确保设备牢固不松动，建议无论用哪种方式固定，最后都应该用水泥将料盆、底脚及固定连接件加固。</div>
            <div>3、两侧立柱内因有导线和水管，严禁焊接或钻孔。</div>
          </div>
        </div>
        <h3 class="num"><span>4、</span>设备与围栏固定</h3>
        <h3 class="num">围栏固定板尺寸如下图所示，围栏与设备建议用规格为M10螺栓以对穿的方式固定。</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p13.png">
        </h3>

        <h2>三、准备工作确认</h2>
        <h3>确认以下准备工作已完成，用户请及时通知服务人员联机使用。</h3>
        <h3 class="num"><span>1、</span>确认设备是否可靠安装到位；</h3>
        <h3 class="num"><span>2、</span>确认电源、水阀接入是否正常；</h3>
        <h3 class="num"><span>3、</span>确认供料是否正常；</h3>
        <h3 class="num"><span>4、</span>确认猪场内手机通信信号是否正常。</h3>
      </div>
      <div v-show="id==4">
        <h1>育肥机器人常见问题</h1>
        <h2>一、下水异常解决方法</h2>
        <h3 class="num"><span>1、</span>检查是否停水；</h3>
        <h3 class="num"><span>2、</span>如未停水，手动按触摸键，如下水仍异常，请清理电磁阀过滤网，操作方法见下图；</h3>
        <h3 class="img">
          <img src="../../assets/img/pdetail/p1-03.png" alt="">
        </h3>
        <h3 class="num"><span>3、</span>若以上情况仍无效，请确认电磁阀是否损坏；如需更换电磁阀，请首先关闭设备电源后，参照易损件（电磁阀）更换步骤操作（见下图）；</h3>
        <h3 class="num"><span>4、</span>排除以上情况仍无效，请联系省饲儿的售后服务人员。</h3>
        <h3 class="img">
          <img src="../../assets/img/pdetail/p1-07.png" alt="">
        </h3>
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
        <h1>育肥机器人相关配件</h1>
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
