<template>
    <div>
        <div class="main">
            <div class="user">
                <div class="left">
                    <img src="../assets/img/head.jpg" alt=""/>
                    <span id="username">{{userName}}</span>
                </div>

                <!--<div class="right">-->
                <!--<a href="login.html" data-ajax="false">-->
                <!--账号绑定-->
                <!--</a>-->
                <!--</div>-->
            </div>
            <div style="border-bottom: 4px solid #242424;">
                <div class="my_head">
                    <span style="color:#f1f1ef">我的订单</span>
                    <div class="write_p">
                        <!--<a href="order_all.html" data-ajax="false">查看全部订单</a>-->
                    </div>
                </div>

                <div class="order_class my_content">
                    <div>
                        <router-link :to="{path:'/orderList',query:{sign:0}}">
                            <i class="wait1"></i>
                            <span class="order_msg msg1">1</span>
                            <p>待付款</p>
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="{path:'/orderList',query:{sign:1}}">
                            <i class="wait2"></i>
                            <span class="order_msg msg2"></span>
                            <p>待收货</p>
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="{path:'/orderList',query:{sign:2}}">
                            <i class="wait3"></i>
                            <span class="order_msg msg3"></span>
                            <p>已完成</p>
                        </router-link>
                    </div>
                </div>
            </div>
            <div>
                <div class="my_head">
                    <span style="color:#f1f1ef">我的收货地址</span>
                    <div class="write_p">
                        <router-link to="/addressList">查看全部收货地址</router-link>
                    </div>
                </div>

                <div class="address_class my_content" v-show="hasAddr" style="padding:19px;color:#c5c5c4;">
                    <p>
                        <span class="name">{{addrDetail.DeliveryUserName}}</span>
                        <span class="tel">{{addrDetail.DeliveryPhone}}</span>
                    </p>
                    <p>
                        <span class="address">{{city}} {{addrDetail.DetailAddr}}</span>
                    </p>
                </div>

<!--                <p class="address_blank" v-show="!hasAddr">
                    暂无收货地址信息
                </p>-->
            </div>
            <div>
                <div class="my_head">
                    <span style="color:#f1f1ef">我的发票</span>
                    <div class="write_p">
                        <router-link to="/voucherList">查看全部发票信息</router-link>
                    </div>
                </div>

                <div class="voucher_class my_content" v-show="hasVouc" style="padding:19px;color:#c5c5c4;">
                    <h3>发票信息</h3>
                    <div class="voucher_list">
                        <div class="voucher_item">
                            <div class="key">
                                <span>专用发票</span>
                            </div>
                            <div class="val">
                                <input type="text" readonly :value="voucDetail.CompanyName"/>
                            </div>
                        </div>
                        <div class="voucher_item">
                            <div class="key">
                                <span>纳税人识别号</span>
                            </div>
                            <div class="val">
                                <input type="text" readonly :value="voucDetail.PayerNumber"/>
                            </div>
                        </div>
                        <div class="voucher_item">
                            <div class="key">
                                <span>注册地址</span>
                            </div>
                            <div class="val">
                                <input type="text" readonly :value="voucDetail.ForUserAddr"/>
                            </div>
                        </div>
                        <div class="voucher_item">
                            <div class="key">
                                <span>开户行</span>
                            </div>
                            <div class="val">
                                <input type="text" readonly :value="voucDetail.RegAccount"/>
                            </div>
                        </div>
                        <div class="voucher_item">
                            <div class="key">
                                <span>开户行账号</span>
                            </div>
                            <div class="val">
                                <input type="text" readonly :value="voucDetail.RegBank"/>
                            </div>
                        </div>
                    </div>
                </div>

<!--                <p class="voucher_blank" v-show="!hasVouc">
                    暂无专用发票信息
                </p>-->
            </div>
        </div>
        <Footer :cur="cur"></Footer>
    </div>
</template>

<script type="es6">
    import Footer from '../components/footer'
    import $ from 'jquery'
    export default {
        data () {
            return {
                cur:'userCenter',
                userName:'',
                hasAddr:false,
                hasVouc:false,
                addrDetail:'',
                voucDetail:'',
                city:'',
                token:localStorage.getItem('token')
            }
        },
        components:{
            Footer
        },
        mounted () {
            this.getUser();
            this.getAddrList();
            this.getVoucList();
        },
        methods:{
            getUser () {
                this.$emit('loadShow',true);
                this.axios.get('account/person?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor.UserName){
                        this.userName = msg.data.res_infor.UserName;
                    }else {
                        this.userName = msg.data.res_infor.UserNick;
                    }

                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                });
            },
            getAddrList () {
                this.$emit('loadShow',true);
                this.axios.get('account/shopping-address?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor && msg.data.res_infor.length > 0){
                        this.hasAddr = true;
                        for(let i=0;i<msg.data.res_infor.length;i++){
                            if(msg.data.res_infor[i].IsDefault){
                                this.addrDetail = msg.data.res_infor[i];
                                this.city = this.getCity(i,msg.data)
                            }
                        }
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                });
            },
            getVoucList () {
                this.$emit('loadShow',true);
                this.axios.get('account/invoice/special?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor){
                        this.hasVouc = true;
                        this.voucDetail = msg.data.res_infor;
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                });
            },
            getCity (i,msg) {
                console.log(msg);
                let pro = msg.res_infor[i].Province;
                let city = msg.res_infor[i].City;
                let area = msg.res_infor[i].Area;
                console.log(pro);
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


