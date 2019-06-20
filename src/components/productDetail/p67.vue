<template>
  <div class="con">
    <div class="m_h">
      <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
    </div>
    <div class="m_c">
      <div v-show="id==1">
        <h1>智能饮水碗安装说明</h1>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:15%;">特别提醒：</div>
          <div class="left" style="width:80%;">
            <div>1、智能饮水碗需配合产房机器人使用，不可单独使用；</div>
            <div>2、请认真阅读本说明，未遵守或未满足本说明下述要求，造成设备故障，不在保修范围内。</div>
          </div>
        </div>
        <h2>一、设备储存、安装条件</h2>
        <h3>设备应储存于室内、安装于产床上仔猪饮水的位置。</h3>
        <h2>二、设备清单</h2>
        <h3 class="num"><span>1、</span>智能饮水碗 1台；</h3>
        <h3 class="num"><span>2、</span>数据线 1条；</h3>
        <h3 class="num"><span>3、</span>除饮水碗和数据线外，在安装过程中所涉及到的管、线、水阀等用户自备；</h3>
        <h3 class="num"><span>4、</span>设备图示</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p29.png" alt="">
        </h3>
        <h2>三、水、电配备</h2>
        <h3>1、电源：将数据线连接至产房机器人相应接口（一一对应）。</h3>
        <h3 class="pd73"><span>2、水源：①</span>水压范围在0.1Mpa-0.4Mpa为宜（调整至仔猪饮水合适位置）；</h3>
        <h3 class="pd73"><span><i style="color:transparent;">1、饲料：</i>②</span>建议在每组或每台设备上独立安装水阀，设备入水口为4分外螺纹；</h3>
        <h3 class="pd73"><span><i style="color:transparent;">1、饲料：</i>③</span>请使用情节水源或安装水源过滤器，保证电磁阀正常工作。</h3>
      </div>
      <div v-show="id==2">
        <h1>智能饮水碗安装准备</h1>
        <h2>一、安装准备工作</h2>
        <h3 class="num"><span>1、</span>安装规划</h3>
        <h3 class="num">每张产床安装一台饮水碗。</h3>
        <h3 class="num"><span>2、</span>设备固定方法</h3>
        <h3 class="num">通过饮水碗两边的四个固定孔用合适的方法固定于产床的围栏上，距离地面6cm左右（建议）。</h3>
        <h3 class="num"><span>3、</span>易损件</h3>
        <h3 class="num">本设备电磁阀为易损件，不在保修范围内。</h3>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:74px;text-align: right;">特别提醒：</div>
          <div class="left" style="width:77%;">应经常观察各紧固件是否松动，如发现问题应马上处理避免因紧固件松动产生故障隐患，影响设备正常使用。</div>
        </div>
        <h2>二、安装步骤</h2>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p30.png" alt="">
        </h3>
        <h3 class="num"><span>1、</span>将饮水碗固定于产床上仔猪饮水的位置（建议相邻产床背对背安装）；</h3>
        <h3 class="num"><span>2、</span>将饮水碗通过数据线连接至产房机器人相应接口，须对数据线进行有效防护；</h3>
        <h3 class="num"><span>3、</span>将饮水碗的电磁阀进水口通过4分软管连接到带水阀的外部水源。</h3>
        <h2>三、准备工作确认</h2>
        <h3>确认以下准备工作已完成，用户请及时通知服务人员联机使用。</h3>
        <h3 class="num"><span>1、</span>确认饮水碗可靠安装到位；</h3>
        <h3 class="num"><span>2、</span>确认管路供水正常（水压范围0.1-0.4Mpa为宜）；</h3>
        <h3 class="num"><span>3、</span>确认供电线路正常；</h3>
      </div>
      <div v-show="id==3">
        <h1>智能饮水碗常见问题</h1>
        <h2>一、下水异常解决方法</h2>
        <h3 class="num"><span>1、</span>检查是否停水；</h3>
        <h3 class="num"><span>2、</span>如下水仍异常，请清理电磁阀过滤网，操作方法如下所示；</h3>
        <h3 class="img">
          <img src="http://znswsse.com:8031/pdetail/p31.png" alt="">
        </h3>
        <h3 class="num m44"><span>①</span>逆时针方向拧开饮水管接口；</h3>
        <h3 class="num m44"><span>②</span>将电磁阀保护罩按图示方向取下；</h3>
        <h3 class="num m44"><span>③</span>逆时针方向拧开电磁阀螺丝帽，按图示方向将过滤网取出并清洗；</h3>
        <h3 class="num m44"><span>④</span>清洗过后将过滤网重新放回并按顺时针方向拧紧电磁阀螺丝帽；</h3>
        <h3 class="num m44"><span>⑤</span>将电磁阀保护罩放置原处并顺时针拧紧引水管接口；</h3>
        <h3 class="num m44"><span>⑥</span>顺时针方向拧紧引水管接口；</h3>
        <h3 class="num"><span>3、</span>若以上情况仍无效，请确认电磁阀是否损坏；如需更换电磁阀，请首先关闭设备电源后，参照易损件（电磁阀）；</h3>
        <h3 class="num"><span>4、</span>排除以上情况仍无效，请联系省饲儿的售后服务人员。</h3>
        <h2>二、个体识别异常解决方法</h2>
        <h3 class="num"><span>1、</span>检查设备是否供电正常；</h3>
        <h3 class="num"><span>2、</span>尝试关机重启；</h3>
        <h3 class="num"><span>3、</span>排除以上情况仍失效，请联系省饲儿的售后服务人员。</h3>
        <h2>三、环境检测异常解决方法</h2>
        <h3 class="num"><span>1、</span>检查设备是否供电正常；</h3>
        <h3 class="num"><span>2、</span>尝试关机重启；</h3>
        <h3 class="num"><span>3、</span>排除以上情况仍失效，请联系省饲儿的售后服务人员。</h3>
      </div>
      <div v-show="id==4">
        <h1>智能饮水碗相关配件</h1>
        <ul class="paretlist">
          <li class="paret">
            <div class="flex3">
              <div class="img_box">
                <img src="../../assets/img/pdetail/p1-08.png" alt="" style="border:1px solid #403f3f;">
              </div>
            </div>
            <div class="paret_detail">
              <div style="width:100%;">
                <div class="paret_top">
                  <p>电磁阀(易损件)</p>
                </div>
                <div class="paret_bottom">
                  <p>SSE-DCF01</p>
                  <router-link style="color:#ef8300;margin-bottom: 10px;font-size:15px;line-height: 20px;" :to="{path:'/productDetail/41'}">
                    查看详情
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>
<script type="es6">
  const list = [
    {
      id:1,
      name:'设备详情'
    },
    {
      id:2,
      name:'安装准备'
    },
    {
      id:3,
      name:'常见问题'
    },
    {
      id:4,
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
    },
    methods: {
      toggle(n){
        this.id = n;
      }
    }
  }
</script>

<style src="../../assets/css/detail.css"></style>
