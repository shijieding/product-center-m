(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{122:function(t,s,i){},123:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=function(t){return t&&t.__esModule?t:{default:t}}(i(97));s.default={data:function(){return{showVoucher:!1,img_path:"http://znswsse.com:8031/",addr:{DeliveryUserName:"",DeliveryPhone:"",DetailAddr:"",DeliveryId:""},needVoucher:!1,ids:[],pList:[],hasZV:!1,hasPV:!1,detailZV:"",pvList:[],vid:"0",orderList:[],voucherType:"0",token:localStorage.getItem("token")}},components:{},metaInfo:{title:"订单详情"},computed:{allPrice:function(){for(var t=0,s=0;s<this.pList.length;s++)t+=this.pList[s].SinglePrice*this.pList[s].ProQuantity;return t}},mounted:function(){this.ids=this.$route.query.ids,this.getAddr(),this.getPList(),this.getZV(),this.getPV()},methods:{postOrder:function(){var t=this;this.$emit("loadShow",!0),this.needVoucher||(this.vid="0",this.voucherType="0"),console.log(this.pList);for(var s=0,i=0,e=0;e<this.pList.length;e++)console.log(this.pList[e].ProQuantity),s+=Number(this.pList[e].ProQuantity),i+=Number(s*this.pList[e].SinglePrice),this.orderList.push({ProNo:this.pList[e].ProId,ProCount:this.pList[e].ProQuantity,ProPrice:this.pList[e].SinglePrice});var a=JSON.stringify({ConsgId:this.addr.DeliveryId,InvoiceId:this.vid,InvoiceType:this.voucherType,ProList:this.orderList});this.axios.post("order/create?token="+this.token,a).then(function(e){t.$emit("loadShow",!1),t.pList=[],t.$router.push({path:"/pay",query:{num:s,totalPrice:i}})}).catch(function(s){t.$emit("loadErrShow",!0)})},changeNum:function(t,s){var i=this;if(this.$emit("loadShow",!0),t){var e=JSON.stringify({proid:s.ProId,proquantity:1,singleprice:s.SinglePrice,totalprice:s.SinglePrice});this.axios.post("account/shopping-cart?token="+this.token,e).then(function(t){i.pList=[],i.getPList()}).catch(function(t){i.$emit("loadErrShow",!0)})}else if(1==s.ProQuantity)this.$emit("loadShow",!1);else{var a=JSON.stringify({proid:s.ProId,proquantity:-1,singleprice:s.SinglePrice,totalprice:s.SinglePrice});this.axios.post("account/shopping-cart?token="+this.token,a).then(function(t){i.pList=[],i.getPList()}).catch(function(t){i.$emit("loadErrShow",!0)})}},getVid:function(t,s){this.vid=t,this.voucherType=s},getAddr:function(){var t=this;this.$emit("loadShow",!0),this.axios.get("account/shopping-address?token="+this.token).then(function(s){if(t.$emit("loadShow",!1),s.data.res_infor&&s.data.res_infor.length>0)for(var i=0;i<s.data.res_infor.length;i++)s.data.res_infor[i].IsDefault&&(t.addr=s.data.res_infor[i])}).catch(function(s){t.$emit("loadErrShow",!0)})},toggleV:function(t){this.needVoucher=!!t},getZV:function(){var t=this;this.$emit("loadShow",!0),this.axios.get("account/invoice/special?token="+this.token).then(function(s){t.$emit("loadShow",!1),s.data.res_infor?(t.hasZV=!0,t.detailZV=s.data.res_infor):t.hasZV=!1}).catch(function(s){t.$emit("loadErrShow",!0)})},getPV:function(){var t=this;this.$emit("loadShow",!0),this.axios.get("account/invoice/common?token="+this.token).then(function(s){t.$emit("loadShow",!1),s.data.res_infor.length>0?(t.hasPV=!0,t.pvList=s.data.res_infor):(console.log("没有普通发票"),t.hasPV=!1)}).catch(function(s){t.$emit("loadErrShow",!0)})},getPList:function(){var t=this;this.$emit("loadShow",!0),this.axios.get("account/shopping-cart?token="+this.token).then(function(s){t.$emit("loadShow",!1);var i=s.data.res_infor,e=[];e=e.concat(t.ids);for(var a=0;a<i.length;a++)for(var n=0;n<e.length;n++)i[a].ProId==e[n]&&t.pList.push(i[a]);t.pList.length>0||t.$router.push({path:"/"}),console.log(t.pList)}).catch(function(s){t.$emit("loadErrShow",!0)})},getCity:function(t){var s=t.Province,i=t.City,a=t.Area,n=void 0,o=void 0,r=void 0;return e.default.ajax({url:"http://ssfile.znswsse.com/product/mobile/static/area.json",type:"GET",dataType:"json",async:!1,success:function(t){var c=t.lists;e.default.each(c,function(t,c){c.code==s&&(n=c.area,e.default.each(c.city,function(t,s){s.code==i&&(o=s.area,e.default.each(s.city,function(t,s){s.code==a&&(r=s.area)}))}))})},error:function(t){console.log(t),console.log("请求错误")}}),n+" "+o+" "+r}}}},124:function(t,s,i){"use strict";i.r(s);var e=i(123),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);s.default=a.a},165:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"address_class my_content order_border"},[i("router-link",{attrs:{to:"/addressList"}},[i("p",[i("span",{staticClass:"name"},[t._v(t._s(t.addr.DeliveryUserName))]),t._v(" "),i("span",{staticClass:"tel"},[t._v(t._s(t.addr.DeliveryPhone))])]),t._v(" "),i("p",[i("span",{staticClass:"address"},[t._v(t._s(t.getCity(t.addr))+" "+t._s(t.addr.DetailAddr))])]),t._v(" "),i("p",{staticClass:"order_ok_bg"})])],1),t._v(" "),i("ul",{staticClass:"cart_list"},t._l(t.pList,function(s){return i("li",{staticClass:"cart_item"},[i("div",{staticClass:"cart_detail"},[i("div",{staticClass:"cart_img"},[i("img",{attrs:{src:t.img_path+s.ProImage}})]),t._v(" "),i("div",{staticClass:"cart_msg"},[i("p",{staticClass:"p_name"},[i("span",{staticClass:"proname"},[t._v(t._s(s.ProName))]),t._v("("),i("span",{staticClass:"promodel"},[t._v(t._s(s.ProModel))]),t._v(")\n                    ")]),t._v(" "),i("div",[i("div",{staticClass:"p_price"},[i("b",{staticClass:"price"},[t._v("￥"),i("span",{staticClass:"pri"},[t._v(t._s(s.SinglePrice.toFixed(2)))])])]),t._v(" "),i("div",{staticClass:"p_number"},[i("button",{staticClass:"min adm",on:{click:function(i){t.changeNum(0,s)}}}),i("span",{staticClass:"num"},[t._v(t._s(s.ProQuantity))]),i("button",{staticClass:"add adm",on:{click:function(i){t.changeNum(1,s)}}})])])])])])})),t._v(" "),i("div",{staticClass:"order_ok_voucher"},[t._m(0),t._v(" "),i("div",[i("input",{staticClass:"check",attrs:{type:"radio",name:"vtype",id:"vou"},on:{click:function(s){t.toggleV(!0)}}}),t._v(" "),i("span",[t._v("需要发票")])]),t._v(" "),i("div",[i("input",{staticClass:"check",attrs:{type:"radio",name:"vtype",checked:"",id:"no_vou"},on:{click:function(s){t.toggleV(!1)}}}),t._v(" "),i("span",[t._v("不需要发票")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.needVoucher,expression:"needVoucher"}],staticClass:"voucher_class my_content",staticStyle:{"margin-bottom":"50px"}},[i("h3",[t._v("发票信息\n            "),i("router-link",{attrs:{to:"/voucherDetail"}},[t._v("添加发票")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.hasZV,expression:"hasZV"}],staticClass:"v_item"},[i("div",{staticClass:"voucher_class my_content"},[i("div",{staticClass:"voucher_list"},[i("div",{staticClass:"voucher_item"},[i("div",{staticClass:"key"},[i("input",{staticClass:"check",attrs:{type:"radio",name:"voucher"},on:{click:function(s){t.getVid(t.c.InvoinceId,"3")}}}),t._v(" "),i("span",[t._v("专用发票")])]),t._v(" "),i("div",{staticClass:"val"},[i("input",{attrs:{"data-role":"none",type:"text",readonly:""},domProps:{value:t.detailZV.CompanyName}}),t._v(" "),i("input",{attrs:{type:"hidden",name:"voucherId"},domProps:{value:t.detailZV.InvoinceId}})])]),t._v(" "),i("div",{staticClass:"voucher_item"},[t._m(1),t._v(" "),i("div",{staticClass:"val"},[i("input",{attrs:{"data-role":"none",type:"text",disabled:""},domProps:{value:t.detailZV.ForUserAddr}})])]),t._v(" "),i("div",{staticClass:"voucher_item"},[t._m(2),t._v(" "),i("div",{staticClass:"val"},[i("input",{attrs:{"data-role":"none",type:"text",disabled:""},domProps:{value:t.detailZV.PayerNumber}})])]),t._v(" "),i("div",{staticClass:"voucher_item"},[t._m(3),t._v(" "),i("div",{staticClass:"val"},[i("input",{attrs:{"data-role":"none",type:"text",disabled:""},domProps:{value:t.detailZV.RegAccount}})])]),t._v(" "),i("div",{staticClass:"voucher_item"},[t._m(4),t._v(" "),i("div",{staticClass:"val"},[i("input",{attrs:{"data-role":"none",type:"text",disabled:""},domProps:{value:t.detailZV.RegBank}})])])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasZV,expression:"!hasZV"}]},[i("p",{staticClass:"address_blank"},[t._v("\n                您还没有添加专用发票\n            ")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.hasPV,expression:"hasPV"}],staticClass:"v_item"},[i("div",{staticClass:"voucher_class my_content"},[i("div",{staticClass:"voucher_list"},t._l(t.pvList,function(s){return i("div",{staticClass:"voucher_item"},[i("div",{staticClass:"key"},[i("input",{staticClass:"check",attrs:{type:"radio",name:"voucher"},on:{click:function(i){t.getVid(s.InvoiceId,"1")}}}),t._v(" "),i("span",[t._v("发票抬头")])]),t._v(" "),i("div",{staticClass:"val"},[i("input",{attrs:{type:"text",disabled:""},domProps:{value:s.CompanyName}})])])}))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasPV,expression:"!hasPV"}]},[i("p",{staticClass:"address_blank"},[t._v("\n                您还没有添加普通发票\n            ")])])]),t._v(" "),i("div",{staticClass:"footer_box"},[i("div",{attrs:{id:"footer"}},[t._m(5),t._v(" "),i("div",{staticClass:"f_item"},[i("p",{staticClass:"price"},[t._v("\n                    总计:\n                    "),i("b",{staticClass:"price"},[t._v("￥"),i("span",{staticClass:"AllPrice"},[t._v(t._s(t.allPrice))])])]),t._v(" "),i("span",[t._v("(不含运费)")])]),t._v(" "),i("div",{staticClass:"jiesuan f_item"},[i("a",{staticStyle:{"font-size":"16px"},attrs:{id:"btn"},on:{click:function(s){t.postOrder()}}},[t._v("提交订单")])])])])])},a=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("h3")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"key pl28"},[s("span",[this._v("注册地址")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"key pl28"},[s("span",[this._v("纳税识别号")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"key pl28"},[s("span",[this._v("开户行账号")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"key pl28"},[s("span",[this._v("开户银行")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cart"},[s("div")])}];i.d(s,"a",function(){return e}),i.d(s,"b",function(){return a})},194:function(t,s,i){"use strict";var e=i(122);i.n(e).a},84:function(t,s,i){"use strict";i.r(s);var e=i(165),a=i(124);for(var n in a)"default"!==n&&function(t){i.d(s,t,function(){return a[t]})}(n);i(194);var o=i(0),r=Object(o.a)(a.default,e.a,e.b,!1,null,"7ad13b7a",null);s.default=r.exports}}]);