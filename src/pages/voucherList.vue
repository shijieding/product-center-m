<template>
    <div>
        <div class="main">
            <div class="v_list z_v">
                <div v-show="hasZV" class="v_item">
                    <div class="voucher_class my_content">
                        <h3>专用发票</h3>
                        <div class="voucher_list">
                            <div class="voucher_item">
                                <div class="key">
                                    <span>专用发票</span>
                                </div>
                                <div class="val">
                                    <input type="text" disabled :value="detailZV.CompanyName"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>注册地址</span>
                                </div>
                                <div class="val">
                                    <input type="text" disabled :value="detailZV.RegAddr"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>纳税识别号</span>
                                </div>
                                <div class="val">
                                    <input type="text" disabled :value="detailZV.PayerNumber"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>开户行账号</span>
                                </div>
                                <div class="val">
                                    <input type="text" disabled :value="detailZV.RegAccount"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>开户银行</span>
                                </div>
                                <div class="val">
                                    <input type="text" disabled :value="detailZV.RegBank"/>
                                </div>
                            </div>
                        </div>
                        <div class="compile">
                            <div class="default">
                                <!-- <input type="radio" data-role="none" name="voucher" class="check" checked/>
                                 <span>设为默认发票</span>-->
                            </div>
                            <div class="button_group">
                                <router-link :to="{path:'/voucherDetail',query:{id:detailZV.InvoinceId,voucher:'z'}}">
                                    编辑
                                </router-link>
                                <a @click="deleteZV(detailZV.InvoinceId)" class="delete">
                                    删除
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="!hasZV">
                    <p class="address_blank">
                        您还没有添加专用发票
                    </p>
                </div>
            </div>
            <div class="v_list p_v">
                <div v-show="hasPV" class="v_item">
                    <div class="voucher_class my_content" v-for="c in pvList">
                        <h3>普通发票</h3>
                        <div class="voucher_list">
                            <div class="voucher_item">
                                <div class="key">
                                    <span>发票抬头</span>
                                </div>
                                <div class="val">
                                    <input type="text" disabled :value="c.CompanyName"/>
                                </div>
                            </div>
                            <div class="voucher_item">
                                <div class="key">
                                    <span>纳税人识别号</span>
                                </div>
                                <div class="val">
                                    <input type="text" disabled :value="c.TaxPayer"/>
                                </div>
                            </div>
                        </div>
                        <div class="compile">
                            <div class="default">

                            </div>
                            <div class="button_group">
                                <router-link :to="{path:'/voucherDetail',query:{id:c.InvoiceId,voucher:'p'}}">
                                    编辑
                                </router-link>
                                <a @click="deletePV(c.InvoiceId)" class="delete">
                                    删除
                                </a>
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

        </div>





        <div class="footer">
            <div class="button_box">
                <router-link to="/voucherDetail" class="btn">添加发票信息</router-link>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        data() {
            return {
                hasZV:false,
                hasPV:false,
                detailZV:'',
                pvList:[],
                token:localStorage.getItem('token')
            }
        },
        components: {

        },
        mounted () {
            this.getZV();
            this.getPV();
        },
        methods: {
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
                });
            },
            getPV () {
                this.$emit('loadShow',true);
                this.axios.get('account/invoice/common?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor){
                        this.hasPV = true;
                        this.pvList = msg.data.res_infor;
                    }else {
                        console.log();
                        this.hasPV = false;
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                });
            },
            deleteZV (id) {
                let json =JSON.stringify({vid:id});
                this.$emit('loadShow',true);
                this.axios.post('account/invoice/special/delete?token='+this.token,json).then(msg=>{
                    this.$emit('loadShow',false);
                    this.getZV();
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                });
            },
            deletePV (id) {
                let json =JSON.stringify({vid:id});
                this.$emit('loadShow',true);
                this.axios.post('account/invoice/common/del?token='+this.token,json).then(msg=>{
                    this.$emit('loadShow',false);
                    this.getPV();
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                });
            }
        }
    }
</script>

<style>
    .my_content span {
        color:#c5c5c4;
    }
</style>
