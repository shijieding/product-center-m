<template>
    <div>
        <div>
            <ul class="p_list">
                <li v-for="p in pList">
                  <router-link :to="{path:'/productDetail/'+p.ProNo}">
                        <div class="p_item">
                            <img class="item-pic" v-lazy='img_path+p.ProImages[0]'/>
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
        <Footer :cur="cur"></Footer>
    </div>
</template>

<script type="es6">

    import Footer from '../components/footer'
    import Alert from '../components/alert'


    export default {
        data () {
            return {
                cur:'index',
                img_path:'http://znswsse.com:8031/',
                showAlert:true
            }
        },
        metaInfo: {
          title: '产品中心'
        },
        components:{
            Footer,Alert
        },
        computed: {
          pList () {
            return this.$store.state.pList;
          }
        },
        mounted () {
          // let token =  window.location.search.substring(7);
          let token = '3e65cf87c3600ee53f24e061f0ee43b5';
          console.log(token);
          if(token){
            localStorage.setItem("token",token);
          }
          if(this.pList && this.pList.length < 1){
            this.getPList();
          }
        },
        created () {

        },
        asyncData ({ store }) {
          return store.dispatch('getRes')
        },
/*        beforeRouteLeave (to,from,next) {
          // let token =  window.location.search.substring(7);
          let token = '4cfdbb466f1e0b50115c3be30d2cbb09';
          console.log(token);
          if(token){
            localStorage.setItem("token",token);
          }
          next();
        },*/
        methods:{
            getPList () {
                this.$emit('loadShow',true);
                this.axios.get('/product').then(msg=>{
                    let list = msg.data.res_infor;
                    this.$store.commit('getList',list);
                    console.log(this.$store.state.pList);
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            myCloseAlert (bool) {
                this.showAlert = false;
                if(bool){
                    console.log('true');
                }else {
                    console.log('false');
                }
            }
        }
    }
</script>
<!--<style src="../assets/css/common.css"></style>-->

