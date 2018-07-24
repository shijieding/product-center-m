<template>
    <div>
        <div class="main">
            <div class="f_type">
                <div class="my_head">
                    <span>发票类型</span>
                </div>

                <div class="voucher_d">
                    <div v-show="showCommon">
                        <div class="vheader">
                            <input type="radio" name="type" class="check vleft" :checked="isCommon" @click.prevent="toggle(0)">
                            <div class="vright">
                                普通发票
                            </div>
                        </div>
                        <div class="voucher_list" v-show="isCommon">
                            <div class="voucher_item">
                                <div class="key">
                                    <span>普通发票</span>
                                </div>
                                <div class="val">
                                    <input type="text" v-model="detailPV.company" placeholder="发票抬头"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>纳税人识别号</span>
                                </div>
                                <div class="val">
                                    <input v-model="detailPV.payer" type="text" placeholder="务必填写"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="showDed">
                        <div class="vheader">
                            <input type="radio" name="type" class="check vleft" :checked="!isCommon" @click.prevent="toggle(1)">
                            <div class="vright">
                                专用发票
                            </div>
                        </div>
                        <div class="voucher_list" v-show="!isCommon">
                            <div class="voucher_item">
                                <div class="key">
                                    <span>您的姓名</span>
                                </div>
                                <div class="val">
                                    <input type="text" v-model="detailZV.ForUserName" placeholder="您的姓名"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>收票地址</span>
                                </div>
                                <div class="val">
                                    <input type="text" v-model="detailZV.ForUserAddr" placeholder="收票地址"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>联系电话</span>
                                </div>
                                <div class="val">
                                    <input type="text" v-model="detailZV.ForUserPhone" placeholder="联系电话"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>单位名称</span>
                                </div>
                                <div class="val">
                                    <input type="text" v-model="detailZV.CompanyName" placeholder="单位名称"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>注册地址</span>
                                </div>
                                <div class="val">
                                    <input type="text" v-model="detailZV.RegAddr" placeholder="单位注册详细地址"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>开户银行</span>
                                </div>
                                <div class="val">
                                    <input type="text" v-model="detailZV.RegBank" placeholder="开户银行"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>银行账号</span>
                                </div>
                                <div class="val">
                                    <input type="text" v-model="detailZV.RegAccount" placeholder="开户账号" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>纳税人识别号</span>
                                </div>
                                <div class="val">
                                    <input type="text" v-model="detailZV.PayerNumber" placeholder="纳税识别号"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="button_box">
                <button class="btn" id="btn" @click="postVoucher()">保存</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .vright {
        font-size: 10px;
    }
</style>
<script type="es6">
    import $ from 'jquery'
    //浏览器高度变化
    let htmlHeight = $('body').height()-1;
    console.log(htmlHeight);
    $(window).resize(function(){
        let height = $('body').height();
        console.log(height);
        if(height < htmlHeight){
            $('div.footer').hide();
        }else if(height >= htmlHeight){
            $('div.footer').show();
        }
    });
    export default {
        data() {
            return {
                showCommon:true, //修改哪种发票，隐藏另一种
                showDed:true,
                isCommon:true,
                vid:'',
                detailZV:{
                    CompanyName:'',
                    ForUserAddr:'',
                    ForUserName:'',
                    ForUserPhone:'',
                    InvoinceId:'',
                    PayerNumber:'',
                    RegAccount:'',
                    RegAddr:'',
                    RegBank:''
                },
                blockZV:true,
                blockPV:true,
                detailPV:{
                    company:'',
                    vid:0,
                    payer:''
                },
                voucherType:'',  //修改的发票类型
                token:localStorage.getItem('token')
            }
        },
        components: {

        },
      metaInfo: {
        title: '订单详情'
      },
        mounted () {
            this.vid = this.$route.query.id;
            this.voucherType = this.$route.query.voucher;
            if(this.vid){
                if(this.voucherType == 'z'){
                    this.showCommon = false;
                    this.isCommon = false;
                    this.getZV();
                }else {
                    this.showDed = false;
                    this.isCommon = true;
                    this.getPV(this.vid);
                }
            }else {
                this.getZV();
            }
        },
        methods: {
            toggle (n) {
                n==0 ? this.isCommon=true : this.isCommon=false;
            },
            getZV () {
                this.$emit('loadShow',true);
                this.axios.get('account/invoice/special?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor){
                        if(this.vid){
                            this.detailZV = msg.data.res_infor;
                            console.log(this.detailZV);
                        }else {
                            this.showDed = false;
                        }

                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                });
            },
            readZV () {
                this.blockZV = true;
              for(let key in this.detailZV){
                  if(this.detailZV[key] || key == 'InvoinceId'){

                  }else {
                        console.log('buxing1');
                        console.log(this.detailZV[key]+key);
                      this.blockZV = false;
                  }
              }
            },
            readPV () {
                this.blockPV = true;
                for(let key in this.detailPV){
                    if(this.detailPV[key] || key == 'vid'){

                    }else {
                        console.log('buxing1');
                        console.log(this.detailPV[key]+key);
                        this.blockPV = false;
                    }
                }
            },
            getPV (id) {
                this.$emit('loadShow',true);
                this.axios.get('account/invoice/common?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor){
                        for(let i=0;i<msg.data.res_infor.length;i++){
                            if(msg.data.res_infor[i].InvoiceId == id){
                                this.detailPV.vid = msg.data.res_infor[i].InvoiceId;
                                this.detailPV.company = msg.data.res_infor[i].CompanyName;
                                this.detailPV.payer = msg.data.res_infor[i].TaxPayer;
                            }
                        }
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                });
            },
            postVoucher () {
                this.$emit('loadShow',true);
                if(this.vid){   //修改发票
                    if(this.voucherType == 'z'){ //修改专用发票
                        let json = JSON.stringify(this.detailZV);
                        this.readZV();
                        if(this.blockZV){
                            this.axios.post('account/invoice/special/update?token='+this.token,json).then(msg=>{
                                this.$emit('loadShow',false);
                                this.$router.go(-1);
                            }).catch(err=>{
                                this.$emit('loadErrShow',true);
                            });
                        }else {
                            this.$emit('loadShow',false);
                            alert('请填写完整的信息');
                        }

                    }else {                     //修改普通发票
                        let json = JSON.stringify(this.detailPV);
                        this.readPV();
                        if(this.blockPV){
                            this.axios.post('account/invoice/common?token='+this.token,json).then(msg=>{
                                this.$emit('loadShow',false);
                                this.$router.go(-1);
                            }).catch(err=>{
                                this.$emit('loadErrShow',true);
                            });
                        }else {
                            this.$emit('loadShow',false);
                            alert('请填写完整的信息');
                        }
                    }
                }else {      //添加发票
                    if(this.isCommon){          //添加普通发票
                        let json = JSON.stringify(this.detailPV);
                        this.readPV();
                        if(this.blockPV){
                            this.axios.post('account/invoice/common?token='+this.token,json).then(msg=>{
                                this.$emit('loadShow',false);
                                this.$router.go(-1);
                            }).catch(err=>{
                                this.$emit('loadErrShow',true);
                            });
                        }else {
                            this.$emit('loadShow',false);
                            alert('请填写完整的信息');
                        }
                    }else {                     //添加专用发票
                        let json = JSON.stringify(this.detailZV);
                        this.readZV();
                        if(this.blockZV){
                            this.axios.post('account/invoice/special?token='+this.token,json).then(msg=>{
                                this.$emit('loadShow',false);
                                this.$router.go(-1);
                            }).catch(err=>{
                                this.$emit('loadErrShow',true);
                            });
                        }else {
                            this.$emit('loadShow',false);
                            alert('请填写完整的信息');
                        }
                    }
                }
            }
        }
    }
</script>
