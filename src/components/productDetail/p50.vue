<template>
  <div class="con">
    <div class="m_h">
      <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
    </div>
    <div class="m_c">
      <div v-show="id==1">
        <h1>水宝产品详情</h1>
        <h2>一、产品储存、安装条件</h2>
        <h3>产品应储存、安装于室内。</h3>
        <h2>二、标准配置</h2>
        <h3 class="num"><span>1、</span>水宝1个；</h3>
        <h3 class="num"><span>2、</span>水宝与机器人电磁阀连接水管1根(1.5m)；</h3>
        <h3 class="num"><span>3、</span>水宝过滤网1个；</h3>
        <h3 class="num"><span>4、</span>产品图示:</h3>
        <h3 class="img">
          <img src="../../assets/img/pdetail/p7-01.png" alt="">
        </h3>
      </div>
      <div v-show="id==2">
        <h1>水宝产品安装准备</h1>
        <h2>一、安装示意</h2>
        <h3 class="num"><span>1、</span>每个水宝配合一台(保育、育肥)机器人使用；</h3>
        <h3 class="num"><span>2、</span>建议水宝吊装固定在机器人电磁阀一侧，安装建议高于机器人电磁阀0.5-1米(见下图)；</h3>
        <h3 class="img">
          <img src="../../assets/img/pdetail/p7-02.png" alt="">
        </h3>
        <h2 class="yellow">二、安装注意事项</h2>
        <h3 class="num yellow"><span>1、</span>如水宝停止使用，请清掉水，以防变质，水宝根据需要定期清理清洁；</h3>
        <h3 class="num yellow"><span>2、</span>避免水宝及水管安装在料桶正上方，防止漏水对饲料影响，保证水宝底部安装在高于机器人电磁阀50cm以上；</h3>
        <h3 class="num yellow"><span>3、</span>设备运行状态下时刻保证水宝桶内有水，水龙头处于下水状态；</h3>
        <h3 class="num yellow"><span>4、</span>避免水宝连接管弯折，造成水流不畅；</h3>
        <h3 class="num yellow"><span>5、</span>安装时保证猪舍内所有水宝处于统一高度，保证设备水压一致；</h3>
        <h3 class="num yellow"><span>6、</span>水宝入口处有过滤网，可滤除某些杂质，拆除时注意避免过滤网丢失，丢失需另行购买；</h3>
        <h3 class="num yellow"><span>7、</span>与水宝入水口连接的水管及阀门，用户需自行准备。</h3>
      </div>
      <div v-show="id==3">
        <h1>水宝常见问题及处理</h1>
        <h2 class="yellow">一、水宝桶内没水？</h2>
        <h3>· 查看是否停水；</h3>
        <h3>· 清洗过滤网；</h3>
        <h3 class="red">特别提醒：桶内没水将严重导致设备运行不正常。</h3>
      </div>
      <div v-show="id==4">
        <h1>水宝相关配件</h1>
        <ul class="paretlist">
          <li class="paret">
            <div class="flex3">
              <div class="img_box">
                <img src="../../assets/img/pdetail/p7-03.png" alt="" style="border:1px solid #403f3f;">
              </div>
            </div>
            <div class="paret_detail">
              <div style="width:100%;">
                <div class="paret_top">
                  <p>过滤网(易损件)</p>
                </div>
                <div class="paret_bottom">
                  <p>SSE-GLW01</p>
                  <router-link style="color:#ef8300;margin-bottom: 10px;font-size:15px;line-height: 20px;" :to="{path:'/productDetail/54'}">
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
      name:'产品详情'
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
    components: {},
    methods: {
      toggle(n){
        this.id = n;
      }
    }
  }
</script>

<style src="../../assets/css/detail.css"></style>
