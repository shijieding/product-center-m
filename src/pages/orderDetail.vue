<template>
    <div>
        <div class="address_class my_content order_border">
            <router-link to="/addressList">
                <p>
                    <span class="name">{{addr.DeliveryUserName}}</span>
                    <span class="tel">{{addr.DeliveryPhone}}</span>
                </p>
                <p>
                    <span class="address">{{getCity(addr)}} {{addr.DetailAddr}}</span>
                </p>
                <p class="order_ok_bg"> </p>
            </router-link>
        </div>
        <ul class="cart_list">
            <li class="cart_item" v-for="p in pList">
                <div class="cart_detail">
                    <div class="cart_img">
                        <img :src="img_path+p.ProImage"/>
                    </div>
                    <div class="cart_msg">
                        <p class="p_name">
                            <span class="proname">{{p.ProName}}</span>(<span class="promodel">{{p.ProModel}}</span>)
                        </p>
                        <div>
                            <div class="p_price">
                                <b class="price">￥<span class="pri">{{p.SinglePrice.toFixed(2)}}</span></b>
                            </div>
                            <div class="p_number">
                                <button class="min adm" @click="changeNum(0,p)"></button><span class="num">{{p.ProQuantity}}</span><button class="add adm" @click="changeNum(1,p)"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="order_ok_voucher">
            <div>
                <h3></h3>
            </div>
            <div>
                <input type="radio" name="vtype" @click="toggleV(true)" class="check" id="vou"/>
                <span>需要发票</span>
            </div>
            <div>
                <input type="radio" name="vtype" @click="toggleV(false)" class="check" checked id="no_vou"/>
                <span>不需要发票</span>
            </div>
        </div>
        <div class="voucher_class my_content" style="margin-bottom: 50px;" v-show="needVoucher">
            <h3>发票信息
                <router-link to="/voucherDetail">添加发票</router-link>
            </h3>
            <div v-show="hasZV" class="v_item">
                <div class="voucher_class my_content">
                    <div class="voucher_list">
                        <div class="voucher_item">
                            <div class="key">
                                <input type="radio" name="voucher" class="check" @click="getVid(c.InvoinceId,'3')"/>
                                <span>专用发票</span>
                            </div>
                            <div class="val">
                                <input data-role="none" type="text" readonly :value="detailZV.CompanyName"/>
                                <input type="hidden" name="voucherId" :value="detailZV.InvoinceId"/>
                            </div>
                        </div>
                        <div class="voucher_item">
                            <div class="key pl28">
                                <span>注册地址</span>
                            </div>
                            <div class="val">
                                <input data-role="none" type="text" disabled :value="detailZV.ForUserAddr"/>
                            </div>
                        </div>
                        <div class="voucher_item">
                            <div class="key pl28">
                                <span>纳税识别号</span>
                            </div>
                            <div class="val">
                                <input data-role="none" type="text" disabled :value="detailZV.PayerNumber"/>
                            </div>
                        </div>
                        <div class="voucher_item">
                            <div class="key pl28">
                                <span>开户行账号</span>
                            </div>
                            <div class="val">
                                <input data-role="none" type="text" disabled :value="detailZV.RegAccount"/>
                            </div>
                        </div>
                        <div class="voucher_item">
                            <div class="key pl28">
                                <span>开户银行</span>
                            </div>
                            <div class="val">
                                <input data-role="none" type="text" disabled :value="detailZV.RegBank"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="!hasZV">
                <p class="address_blank">
                    您还没有添加专用发票
                </p>
            </div>
            <div v-show="hasPV" class="v_item">
                <div class="voucher_class my_content">
                    <div class="voucher_list">
                        <div class="voucher_item" v-for="c in pvList">
                            <div class="key">
                                <input type="radio" name="voucher" class="check" @click="getVid(c.InvoiceId,'1')"/>
                                <span>发票抬头</span>
                            </div>
                            <div class="val">
                                <input type="text" disabled :value="c.CompanyName"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="!hasPV">
                <p class="address_blank">
                    您还没有添加普通发票
                </p>
            </div>
        </div>


        <div class="footer_box">
            <div id="footer">
                <div class="cart">
                    <div>

                    </div>
                </div>
                <div class="f_item">
                    <p class="price">
                        总计:
                        <b class="price">￥<span class="AllPrice">{{allPrice}}</span></b>
                    </p>
                    <span>(不含运费)</span>
                </div>
                <div class="jiesuan f_item">
                    <a id="btn" style="font-size: 16px;" @click="postOrder()">提交订单</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    import $ from 'jquery'
    export default {
        data() {
            return {
                showVoucher:false,
                img_path:'http://znswsse.com:8031/',
                addr:{
                    DeliveryUserName:'',
                    DeliveryPhone:'',
                    DetailAddr:'',
                    DeliveryId:'',
                },
                needVoucher:false,
                ids:[],
                pList:[],
                hasZV:false,
                hasPV:false,
                detailZV:'',
                pvList:[],
                vid:'0',
                orderList:[],
                voucherType:'0',
                token:localStorage.getItem('token')
            }
        },
        components: {

        },
      metaInfo: {
        title: '订单详情'
      },
        computed:{
            allPrice () {
                let n=0;
                for(let i=0;i<this.pList.length;i++){
                    n+=this.pList[i].SinglePrice * this.pList[i].ProQuantity;
                }
                return n;
            }
        },
        mounted () {
            this.ids = this.$route.query.ids;
            this.getAddr();
            this.getPList();
            this.getZV();
            this.getPV();
        },
        methods: {
            postOrder () {
                this.$emit('loadShow',true);
                if(this.needVoucher){

                }else {
                    this.vid = '0';
                    this.voucherType = '0';
                }
                console.log(this.pList);
                let num=0,totalPrice=0;
                for(let i=0;i<this.pList.length;i++){
                    console.log(this.pList[i].ProQuantity);
                    num += Number(this.pList[i].ProQuantity);
                    totalPrice += Number(num*this.pList[i].SinglePrice);
                    this.orderList.push({
                        ProNo:this.pList[i].ProId,
                        ProCount:this.pList[i].ProQuantity,
                        ProPrice:this.pList[i].SinglePrice
                    });
                }
                let json = JSON.stringify({ConsgId:this.addr.DeliveryId,InvoiceId:this.vid,InvoiceType:this.voucherType,ProList:this.orderList});
                this.axios.post('order/create?token='+this.token,json).then(msg=>{
                    this.$emit('loadShow',false);
                    this.pList = [];
                    this.$router.push({path:'/pay',query:{'num':num,'totalPrice':totalPrice}});
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            changeNum (n,p) {
                this.$emit('loadShow',true);
                if(n){
                    let json = JSON.stringify({proid:p.ProId,proquantity:1,singleprice:p.SinglePrice,totalprice:p.SinglePrice});
                    this.axios.post('account/shopping-cart?token='+this.token,json).then(msg=>{
                        this.pList = [];
                        this.getPList();
                    }).catch(err=>{
                        this.$emit('loadErrShow',true);
                    })
                }else {
                    if(p.ProQuantity==1){
                        this.$emit('loadShow',false);
                    }else {
                        let json = JSON.stringify({proid:p.ProId,proquantity:-1,singleprice:p.SinglePrice,totalprice:p.SinglePrice});
                        this.axios.post('account/shopping-cart?token='+this.token,json).then(msg=>{
                            this.pList = [];
                            this.getPList();
                        }).catch(err=>{
                            this.$emit('loadErrShow',true);
                        })
                    }
                }
            },
            getVid (id,type) {
                this.vid = id;
                this.voucherType = type;
            },
            getAddr () {
                this.$emit('loadShow',true);
                this.axios.get('account/shopping-address?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor && msg.data.res_infor.length > 0){
                        for(let i=0;i<msg.data.res_infor.length;i++){
                            if(msg.data.res_infor[i].IsDefault){
                                this.addr = msg.data.res_infor[i];
                            }
                        }
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            toggleV (bool) {
                if(bool){
                    this.needVoucher = true;
                }else {
                    this.needVoucher = false;
                }
            },
            getZV () {
                this.$emit('loadShow',true);
                this.axios.get('account/invoice/special?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor){
                        this.hasZV = true;
                        this.detailZV = msg.data.res_infor;
                    }else {
                        this.hasZV = false;
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            getPV () {
                this.$emit('loadShow',true);
                this.axios.get('account/invoice/common?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor.length>0){
                        this.hasPV = true;
                        this.pvList = msg.data.res_infor;
                    }else {
                        console.log('没有普通发票');
                        this.hasPV = false;
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            getPList () {
                this.$emit('loadShow',true);
                this.axios.get('account/shopping-cart?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    let list = msg.data.res_infor;
                    let ids=[];
                    ids = ids.concat(this.ids);
                    for(let i=0;i<list.length;i++){
                        for(let t=0;t<ids.length;t++){
                            if(list[i].ProId == ids[t]){
                                this.pList.push(list[i]);
                            }
                        }
                    }
                    if(this.pList.length>0){

                    }else {
                        this.$router.push({path:'/'});
                    }
                    console.log(this.pList);
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
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
<style scoped>
    .cart_item {
        padding:1.2em;
    }
    div.cart_detail {
        width:100%;
    }
    div.address_class {
        padding-bottom: 0;
    }
    .cart_item:last-child {
        border-bottom: 4px solid #242424;
    }
    .voucher_list input.check {
        display:inline-block;
        vertical-align: middle;
        margin-right: 1em;
    }
    .voucher_class h3 {
        line-height: 2em;
    }
    .voucher_class h3 a {
        float:right;
        color:#6a6a6a;
    }
    .pl28 span {
        padding-left: 36px;
    }
</style>

