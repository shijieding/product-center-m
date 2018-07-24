<template>
    <div>
        <div id="p_header">
            <a href="javascript:" :class="[t.TypeId==typeId?'cur':'']" v-for="t in typeList" @click="getRes(t.TypeId)"><span>{{t.TypeName}}</span></a>
        </div>

        <div>
            <div class="product_classify">
                <div id="type1" style="display:block;">
                    <ul class="p_list">
                        <li v-for="p in pList">
                            <router-link :to="{path:'/productDetail/'+p.ProNo}">
                                <div class="p_item">
                                    <img :src='img_path+p.ProImages[0]'/>
                                    <div>
                                      <div class="p_d">
                                        <span>{{p.ProName}}</span>
                                        <span>￥{{p.SalePrice}}/{{p.ProSpec}}</span>
                                      </div>
                                      <div class="p_d">
                                        <span class="small">{{p.ProModel}}</span>
                                        <span class="small">{{p.ProStatus}}</span>
                                      </div>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <Footer :cur="cur"></Footer>
    </div>
</template>

<script type="es6">
    import Footer from '../components/footer'
    export default {
        data () {
            return {
                cur:'class',
                img_path:'http://znswsse.com:8031/',
                typeList:[],
                typeId:'',
                pList:[]
            }
        },
        components:{
            Footer
        },
      metaInfo: {
        title: '产品分类'
      },
        mounted () {
            this.getHeader();
            this.getRes(19);
        },
        methods:{
            getHeader () {
                this.axios.get('product/types?sign=0').then(msg=>{
                    console.log(msg);
                    this.typeList = msg.data.res_infor;
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            getRes (typeId) {
                this.$emit('loadShow',true);
                this.typeId = typeId;
                this.axios.get('product/list?typeId='+typeId).then(msg=>{
                        this.$emit('loadShow',false);
                    this.pList = msg.data.res_infor;
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            }
        }
    }
</script>


