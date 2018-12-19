<template>
  <div class="con">
    <div class="m_h">
      <a href="javascript:void(0);" v-for="p in list" @click="toggle(p.id)" :class="[p.id==id?'cur':'']">{{p.name}}</a>
    </div>
    <div class="m_c">
      <div v-show="id==1">
        <h1>电源适配器安装说明</h1>
        <div class="red" style="overflow: hidden;">
          <div class="left" style="width:15%;">特别提醒：</div>
          <div class="left" style="width:80%;">请认真阅读本说明，未遵守或未满足本说明下述要求，造成设备故障，不在保修范围内。</div>
        </div>
        <h2>一、设备储存、安装条件</h2>
        <h3>设备应储存、安装于室内。</h3>
        <h2>二、设备清单</h2>
        <h3 class="num"><span>1、</span>电源适配器 &nbsp;&nbsp;&nbsp;1套；</h3>
        <h3 class="num"><span>2、</span>除电源适配器以外，在安装过程中所涉及到的螺丝、插座等，请使用方自行准备；</h3>
        <h3 class="num"><span>3、</span>设备图示</h3>
        <h3 class="img">
          <img src="../../assets/img/pdetail/p60-02.png" alt="">
        </h3>
      </div>
    </div>


  </div>
</template>
<script type="es6">
  const list = [
    {
      id:1,
      name:'安装准备'
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
