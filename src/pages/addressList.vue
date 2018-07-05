<template>
    <div>
        <div class="main" v-show="hasAddr">
            <div class="address_list">
                <div class="address_item" v-for="addr in addrList">
                    <div class="address_class my_content">
                        <p>
                            <span class="name">{{addr.DeliveryUserName}}</span>
                            <span class="tel">{{addr.DeliveryPhone}}</span>
                        </p>
                        <p>
                            <span class="address">{{getCity(addr)}} {{addr.DetailAddr}}</span>
                        </p>
                        <div class="compile">
                            <div class="default">
                                <input type="radio" :checked="addr.IsDefault" class="check" @click="setDefault(addr.DeliveryId)"/>
                                <span>设为默认地址</span>
                            </div>
                            <div class="button_group">
                                <router-link :to="{path:'/addressDetail',query:{id:addr.DeliveryId}}">
                                    编辑
                                </router-link>
                                <a @click="deleteAddr(addr.DeliveryId)">
                                    删除
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!hasAddr">
            <p class="address_blank" v-show="!hasAddr">
                暂无收货地址信息
            </p>
        </div>
        <div class="footer">
            <div class="button_box">
                <div>
                    <router-link to="/addressDetail" class="btn">添加收货地址</router-link>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="alert" v-show="showAlert">
                <Alert @on-close="myCloseAlert">
                    <p slot="delete">你确定要删除该地址吗？</p>
                </Alert>
            </div>
        </transition>
    </div>
</template>

<script type="es6">
    import $ from 'jquery'
    import Alert from '../components/alert'
    export default {
        data() {
            return {
                addrList:[],
                hasAddr:false,
                city:'',
                addrId:'',
                showAlert:false,
                token:localStorage.getItem('token')
            }
        },
        components: {
            Alert
        },
        mounted () {
          this.getAddrList();
        },
        methods: {
            getAddrList () {
                this.$emit('loadShow',true);
                this.axios.get('account/shopping-address?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor && msg.data.res_infor.length > 0){
                        this.hasAddr = true;
                        this.addrList = msg.data.res_infor;
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            setDefault (id) {
                this.$emit('loadShow',true);
                let json = JSON.stringify({addr_id:id});
                this.axios.post('account/shopping-address/default?token='+this.token,json).then(msg=>{
                    this.addrList = [];
                    this.getAddrList();
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            deleteAddr (id) {
                console.log(id);
                this.addrId = id;
                this.showAlert = true;
            },
            myCloseAlert (bool) {
                this.showAlert = false;
              if(bool){
                  this.$emit('loadShow',true);
                  let json = JSON.stringify({addr_id:this.addrId});
                  this.axios.post('account/shopping-address/delete?token='+this.token,json).then(msg=>{
                      this.getAddrList();
                  }).catch(err=>{
                      this.$emit('loadErrShow',true);
                  })
              }
            },
            getCity (msg) {
                let pro = msg.Province;
                let city = msg.City;
                let area = msg.Area;
                let spro,scity,sarea;
                $.ajax({
                    url:'http://ssfile.znswsse.com/product/mobile/static/area.json',
                    type:'GET',
                    dataType:'json',
                    async:false,
                    success:function(msg){
                        var list = msg.lists;
                        $.each(list, function(i,sheng) {
                            if(sheng.code==pro){
                                spro = sheng.area;
                                $.each(sheng.city,function(i,shi){
                                    if(shi.code==city){
                                        scity = shi.area;
                                        $.each(shi.city,function(i,xian){
                                            if(xian.code==area){
                                                sarea = xian.area
                                            }
                                        })
                                    }
                                })
                            }
                        });
                    },
                    error: function (msg) {
                        console.log(msg);
                        console.log('请求错误');
                    }
                });
                return spro+' '+scity+' '+sarea;
            }
        }
    }
</script>

<style>
    .my_content span {
        color:#c5c5c4;
    }
</style>