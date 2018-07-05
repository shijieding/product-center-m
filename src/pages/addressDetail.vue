<template>
    <div>
        <div class="main">
            <ul>
                <li class="address_d">
                    <div class="key">
                        <span>收货人：</span>
                    </div>
                    <div class="val">
                        <input type="text" class="myInput" placeholder="收货人姓名" v-model="uName"/>
                    </div>
                </li>
                <li class="address_d">
                    <div class="key">
                        <span>联系电话：</span>
                    </div>
                    <div class="val">
                        <input type="text" class="myInput" placeholder="收货人手机号" v-model="uPhone"/>
                    </div>
                </li>
                <li class="address_d arrow_r">
                    <div class="key">
                        <span>所在区域：</span>
                    </div>
                    <div class="val" @click="mouse()">
                        <input type="text" id="city-picker" v-model="picker" placeholder="请选择所在区域"/>
                    </div>
                </li>
                <li class="address_d">
                    <div class="key">
                        <span>详细地址：</span>
                    </div>
                    <div class="val">
                        <input type="text" class="myInput" placeholder="详细收货地址" v-model="detailAddr"/>
                    </div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="button_box">
                <button @click="postAddr()" class="btn" v-if="!addrId">保存</button>
                <button @click="updateAddr()" class="btn" v-if="addrId">保存</button>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    import $ from 'jquery'
    import '../../static/jquery-weui.min'
    import '../../static/city-picker.min'
    import '../../static/jquery-weui.min.css'
    //浏览器高度变化
    let htmlHeight = $('body').height()-1;
    $(window).resize(function(){
        let height = $('body').height();
        console.log(height);
        if(height < htmlHeight){
            $('div.footer').hide();
        }else if(height >= htmlHeight){
            $('div.footer').show();
        }
    });

    window.addEventListener("popstate", function(e) {
        let el = document.getElementsByClassName("weui-picker-container");
        if(el){
          el[0].style.display = 'none';
        }

        //根据自己的需求实现自己的功能
    }, false);
    export default {
        data() {
            return {
                addrId:'',
                uName:'',
                uPhone:'',
                detailAddr:'',
                picker:[],
                Province:'',
                City:'',
                Area:'',
                deliveryId:'',
                isDefault:'',
                token:localStorage.getItem('token')
            }
        },
        mounted () {
            let _this = this;
            $("#city-picker").cityPicker({
                title: "选择省市区/县",
                onChange: function (picker, values, displayValues) {
                    _this.picker = displayValues;
                    console.log(_this.picker);
                }
            });
            this.addrId = this.$route.query.id;
            if(this.addrId){
                this.getAddr(this.addrId);
            }
        },
        components: {

        },
        methods: {
            postAddr () {
                this.$emit('loadShow',true);
                console.log(this.picker);
                let address = this.senAddress(this.picker);
                let jsonstr ={
                    Area:address[2],
                    City:address[1],
                    Province:address[0],
                    DeliveryPhone:this.uPhone,
                    DeliveryUserName:this.uName,
                    DetailAddr:this.detailAddr
                };
                console.log(jsonstr);
                let json =JSON.stringify(jsonstr);
                if(this.uName && this.uPhone && this.picker && this.detailAddr){
                    this.axios.post('account/shopping-address?token='+this.token,json).then(msg=>{
                        this.$emit('loadShow',false);
                        this.$router.go(-1);
                    }).catch(err=>{
                        this.$emit('loadErrShow',true);
                    })
                }else {
                    this.$emit('loadShow',false);
                    alert('请填写完整的信息');

                }

            },
            mouse () {
              console.log('失去焦点');
                let input = document.getElementsByTagName('INPUT');
                console.log(input);
                for(let i=0;i<input.length;i++){
                    input[i].blur();
                }
            },
            getAddr (id) {
                this.$emit('loadShow',true);
                this.axios.get('account/shopping-address?token='+this.token).then(msg=>{
                    this.$emit('loadShow',false);
                    if(msg.data.res_infor && msg.data.res_infor.length > 0){
                        for(let i=0;i<msg.data.res_infor.length;i++){
                            if(msg.data.res_infor[i].DeliveryId == id){
                                this.uName = msg.data.res_infor[i].DeliveryUserName;
                                this.uPhone = msg.data.res_infor[i].DeliveryPhone;
                                this.detailAddr = msg.data.res_infor[i].DetailAddr;
                                this.deliveryId = msg.data.res_infor[i].DeliveryId;
                                this.isDefault = msg.data.res_infor[i].IsDefault;
                                this.Area = msg.data.res_infor[i].Area;
                                this.City = msg.data.res_infor[i].City;
                                this.Province = msg.data.res_infor[i].Province;
                                this.picker = this.getCity(msg.data.res_infor[i]);
                            }
                        }
                        console.log(this.picker);
                    }
                }).catch(err=>{
                    this.$emit('loadErrShow',true);
                })
            },
            updateAddr () {
                this.$emit('loadShow',true);
                let address = this.senAddress(this.picker);
                let jsonstr ={
                    Area:address[2],
                    City:address[1],
                    Province:address[0],
                    DeliveryPhone:this.uPhone,
                    DeliveryUserName:this.uName,
                    DetailAddr:this.detailAddr,
                    DeliveryId:this.deliveryId,
                    IsDefault:this.isDefault
                };
                console.log(jsonstr);
                let json =JSON.stringify(jsonstr);
                if(this.uName && this.uPhone && this.picker && this.detailAddr){
                    this.axios.post('account/shopping-address/update?token='+this.token,json).then(msg=>{
                        this.$emit('loadShow',false);
                        this.$router.go(-1);
                    }).catch(err=>{
                        this.$emit('loadErrShow',true);
                    })
                }else {
                    this.$emit('loadShow',false);
                    alert('请填写完整的信息');
                }

            },
            senAddress (add) {
                let address = add;
                let pro = address[0];
                let city = address[1];
                let area = address[2];
                let spro,scity,sarea;
                let addArr = [];
                $.ajax({
                    url:'http://ssfile.znswsse.com/product/mobile/static/area.json',
                    type:'GET',
                    dataType:'json',
                    async:false,
                    success:function(msg){
                        var list = msg.lists;
                        $.each(list, function(i,sheng) {
                            if(sheng.area==pro){
                                spro = sheng.code;
                                addArr.push(spro);
                                $.each(sheng.city,function(i,shi){
                                    if(shi.area==city){
                                        scity = shi.code;
                                        addArr.push(scity);
                                        $.each(shi.city,function(i,xian){
                                            if(xian.area==area){
                                                sarea = xian.code;
                                                addArr.push(sarea);
                                            }
                                        })
                                    }
                                })
                            }
                        });
                    }
                });
                //console.log(addArr);
                return addArr;
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
