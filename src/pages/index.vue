<template>
    <div>
        <div>
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
        <Footer :cur="cur"></Footer>
    </div>
</template>

<script type="es6">

    import Footer from '../components/footer'
    import Alert from '../components/alert'
    // let token =  window.location.search.substring(7);
    let token = '8074cbe52eacab89d9a13b3c36d03dc4';
    console.log(token);
    if(token){
        localStorage.setItem("token",token);
    }
    export default {
        data () {
            return {
                cur:'index',
                img_path:'http://znswsse.com:8031/',
                showAlert:true,
                pList:[]
            }
        },
        components:{
            Footer,Alert
        },
        mounted () {
            this.getPList();
        },
        created () {

        },
        methods:{
            getPList () {
                this.$emit('loadShow',true);
                this.axios.get('/product').then(msg=>{
                    console.log(msg);
                    this.pList = msg.data.res_infor;
                    this.$emit('loadShow',false);
                }).catch(err=>{
                    console.log(err);
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

