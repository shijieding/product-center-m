<template>
    <div>
        <div class="my_head">
            <span>{{text}}订单</span>
        </div>
        <div class="main">
            <div id="wrapper" v-show="!noData">
                <div id="mescroll" class="mescroll">
                    <div id="dataList">
                        <div class="my_order" v-for="o in orderList">
                            <div>
                                <div class="order_key">订单编号：</div>
                                <div class="order_val">
                                    <p>{{o.OrderNo}}</p>
                                </div>
                            </div>
                            <div>
                                <div class="order_key">产品型号：</div>
                                <div class="order_val">
                                    <p v-for="p in o.ProductList">
                                        <span class="pname">{{p.ProName}}（{{p.ProModel}}）</span>
                                        <span class="pnum">{{p.Quantity}}台</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div class="order_key">状态：</div>
                                <div class="order_val">
                                    <p>{{o.CurrStatus}}</p>
                                </div>
                            </div>
                            <div>
                                <div class="order_key">总价：</div>
                                <div class="order_val">
                                    <p><b class="price">￥{{o.AllAmount.toFixed(2)}}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="noData" class="no_data">
                <i class="no_data"></i>
                <p>目前没有{{text}}订单</p>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    import '../../static/mescroll.min.css'
    import '../../static/mescroll.m'
    import MeScroll from 'mescroll.js'
    export default {
        data() {
            return {
                noData:true,
                sign:0,
                text:'',
                orderList:[],
                page:1,
                token:localStorage.getItem('token')
            }
        },
        components: {

        },
        mounted () {
            this.sign = this.$route.query.sign;
            switch (this.sign){
                case 0:
                    this.text = '待付款';
                    break;
                case 1:
                    this.text = '待收货';
                    break;
                case 2:
                    this.text = '已完成';
                    break;
            }
            this.mescroll = new MeScroll("mescroll", {
                up: {
                    auto:true,
                    isBoth:false,
                    page:{
                        num:0,
                        size:5,
                        time:1000
                    },
                    callback: this.getOrder,
                }
            });
        },
        methods: {
            getOrder (page) {
                this.axios.get('order?token='+this.token+'&sign='+this.sign+'&count='+page.size+'&page='+page.num).then(msg=>{
                    if(page.num == 1){
                        this.orderList = [];
                    }
                    if(msg.data.res_infor.length>0){
                        this.noData = false;
                        let list = msg.data.res_infor;
                        let has = list.length>0?true:false;
                        // console.log(list);
                        // this.orderList.concat(2,3);
                        // console.log(this.orderList);
                        for(let i=0;i<list.length;i++){
                            this.orderList.push(list[i]);
                        }
                        this.mescroll.endSuccess(list.length,has);
                    }else {
                        this.noData = true;
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            }
        }
    }
</script>


