<template>
    <div>
        <div class="banner">
            <slider :pages="pages" :sliderinit="sliderinit">
                <!-- slot  -->
            </slider>
        </div>
        <div class="pd_msg">
            <div>
                <p class="pleft">
                    <span class="pname" style="text-align: left">{{detail.ProName}}</span>
                    <span class="ptype" style="text-align: left;font-size: 12px;">{{detail.ProModel}}</span>
                </p>
                <p class="pright">
                    <span style="text-align: right"><b class="price">￥{{detail.SalePrice?detail.SalePrice.toFixed(2):0}}元</b></span>
                    <span style="text-align: right;font-size: 12px;" class="small">{{detail.ProStatus}}</span>
                </p>
            </div>
        </div>
        <div class="img_box" v-if="detail.DesContent">
            <img :src="img_path+detail.DesContent" alt=""/>
        </div>
        <div class="msg_detail" v-if="detail.ProOperates">
            <component :is="com"></component>
        </div>
        <div class="footer">
            <div id="footer" class="border">
                <div class="cart">
                    <div class="cur">
                        <router-link to="/cart">
                            <i class="cart has" v-show="!showQ"></i>
                            <i class="cart" v-show="showQ"></i>
                            <span class="cart_num" v-show="showQ">{{quantity}}</span>
                        </router-link>
                    </div>
                </div>

                <div class="add_cart f_item">
                <span>
                    <a @click="addCart()" id="addCart">加入购物车</a>
                </span>
                </div>
                <div class="buy f_item">
                <span>
                    <a @click="buy()" id="buy">立即购买</a>
                </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {
                pid:'',
                com:'',
                showQ:false,
                img_path:'http://znswsse.com:8031/',
                showBanner:false,
                banner:[],
                pList:[],
                detail:'',
                pages:[],
                sliderinit:{
                    currentPage:0,
                    autoplay:5000,
                    loop:true
                },
                quantity:0,
                token:localStorage.getItem('token')
            }
        },
        props:['id'],
        watch:{
          '$route' (to, from) {
            // this.$router.go(0);
            location.reload();
          }
        },
        components: {
            slider:resolve => {
                require(['vue-concise-slider'],resolve)
            },
            P24:resolve => {
                require(['../components/productDetail/p24.vue'],resolve)
            },
            P25:resolve => {
                require(['../components/productDetail/P25.vue'],resolve)
            },
            P27:resolve => {
                require(['../components/productDetail/P27.vue'],resolve)
            },
            P29:resolve => {
                require(['../components/productDetail/P29.vue'],resolve)
            },
            P30:resolve => {
                require(['../components/productDetail/P30.vue'],resolve)
            },
            P33:resolve => {
                require(['../components/productDetail/P33.vue'],resolve)
            }
            // slider,P24,P25,P27,P29,P30,P33
        },
        //24-保育25-育肥29-猪宝30-智能计重秤27-阅读器26-电子耳标01 34-电子耳标03 33-电子耳标钳 41-电磁阀 43-电源适配器
        mounted () {
          this.pid = this.$route.params.id;
          this.com = 'P'+this.pid;
          this.getRes();
          this.getQuantity();
        },
        methods: {
            getRes () {
                this.$emit('loadShow',true);
                this.axios.get('product/newdetail?pid='+this.pid).then(msg=>{
                    this.$emit('loadShow',false);
                    this.banner = msg.data.ProImages;
                    for(let i=0;i<this.banner.length;i++){
                        this.pages.push({
                            title: '',
                            html:'<img src="'+this.img_path+this.banner[i]+'"style="height:200px">'
                        });
                        console.log(this.img_path+this.banner[i]);
                    }
                    this.detail = msg.data;
                    this.showBanner = true;
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            getQuantity () {
                this.$emit('loadShow',true);
                this.axios.get('account/shopping-cart?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor.length>0){
                        this.showQ = true;
                        this.pList = msg.data.res_infor;
                        let n = 0;
                        for(let i=0;i<this.pList.length;i++){
                            n += this.pList[i].ProQuantity;
                        }
                        this.quantity = n;
                    }else {
                        this.showQ = false;
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            addCart () {
                this.$emit('loadShow',true);
                let json = JSON.stringify({proid:this.pid,proquantity:1,singleprice:this.detail.SalePrice,totalprice:this.detail.SalePrice});
                this.axios.post('account/shopping-cart?token='+this.token,json).then(msg=>{
                    this.$emit('loadShow',false);
                    this.getQuantity();
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            buy () {
                this.addCart();
                this.$router.push({path:'/orderDetail',query:{ids:[this.pid]}});
            }
        }
    }
</script>
<style scoped>
    .border {
        border-top: 1px solid #ef8201!important;
        border-bottom: 1px solid #ef8201;
    }
</style>
