(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{130:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),e(206),e(204);var n=function(t){return t&&t.__esModule?t:{default:t}}(e(203));o.default={data:function(){return{noData:!0,sign:0,text:"",orderList:[],page:1,token:localStorage.getItem("token")}},metaInfo:{title:"订单列表"},components:{},mounted:function(){switch(this.sign=this.$route.query.sign,this.sign){case 0:this.text="待付款";break;case 1:this.text="待收货";break;case 2:this.text="已完成"}this.mescroll=new n.default("mescroll",{up:{auto:!0,isBoth:!1,page:{num:0,size:5,time:1e3},callback:this.getOrder}})},methods:{getOrder:function(t){var o=this;this.axios.get("order?token="+this.token+"&sign="+this.sign+"&count="+t.size+"&page="+t.num).then(function(e){if(1==t.num&&(o.orderList=[]),e.data.res_infor.length>0){o.noData=!1;for(var n=e.data.res_infor,s=n.length>0,i=0;i<n.length;i++)o.orderList.push(n[i]);o.mescroll.endSuccess(n.length,s)}else o.noData=!0}).catch(function(t){o.$emit("loadErrShow",!0)})}}}},131:function(t,o,e){"use strict";e.r(o);var n=e(130),s=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(o,t,function(){return n[t]})}(i);o.default=s.a},166:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"my_head"},[e("span",[t._v(t._s(t.text)+"订单")])]),t._v(" "),e("div",{staticClass:"main"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.noData,expression:"!noData"}],attrs:{id:"wrapper"}},[e("div",{staticClass:"mescroll",attrs:{id:"mescroll"}},[e("div",{attrs:{id:"dataList"}},t._l(t.orderList,function(o){return e("div",{staticClass:"my_order"},[e("div",[e("div",{staticClass:"order_key"},[t._v("订单编号：")]),t._v(" "),e("div",{staticClass:"order_val"},[e("p",[t._v(t._s(o.OrderNo))])])]),t._v(" "),e("div",[e("div",{staticClass:"order_key"},[t._v("产品型号：")]),t._v(" "),e("div",{staticClass:"order_val"},t._l(o.ProductList,function(o){return e("p",[e("span",{staticClass:"pname"},[t._v(t._s(o.ProName)+"（"+t._s(o.ProModel)+"）")]),t._v(" "),e("span",{staticClass:"pnum"},[t._v(t._s(o.Quantity)+"台")])])}))]),t._v(" "),e("div",[e("div",{staticClass:"order_key"},[t._v("状态：")]),t._v(" "),e("div",{staticClass:"order_val"},[e("p",[t._v(t._s(o.CurrStatus))])])]),t._v(" "),e("div",[e("div",{staticClass:"order_key"},[t._v("总价：")]),t._v(" "),e("div",{staticClass:"order_val"},[e("p",[e("b",{staticClass:"price"},[t._v("￥"+t._s(o.AllAmount.toFixed(2)))])])])])])}))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noData,expression:"noData"}],staticClass:"no_data"},[e("i",{staticClass:"no_data"}),t._v(" "),e("p",[t._v("目前没有"+t._s(t.text)+"订单")])])])])},s=[];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return s})},203:function(t,o,e){var n,s;
/*!
 * mescroll -- 精致的下拉刷新和上拉加载js框架  ( a great JS framework for pull-refresh and pull-up-loading )
 * version 1.3.2
 * 2018-01-01
 * author: wenju < mescroll@qq.com > 文举
 * 
 * 官网:	http://www.mescroll.com
 * 文档:	https://github.com/mescroll/mescroll.git
 * 动态:	https://github.com/mescroll/mescroll-versions
 * 问答:http://www.mescroll.com/qa.html
 * issues: https://github.com/mescroll/mescroll/issues
 * QQ交流群: 633126761
 */!function(i,r){void 0!==t&&t.exports;void 0===(s="function"==typeof(n=r)?n.call(o,e,o,t):n)||(t.exports=s)}(0,function(){var t=function(t,o){var e=this;if(e.version="1.3.2",e.isScrollBody=!t||"body"==t,e.scrollDom=e.isScrollBody?document.body:e.getDomById(t),e.scrollDom){e.options=o||{};var n=navigator.userAgent,s=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=void 0===window.orientation,r=n.indexOf("Android")>-1||n.indexOf("Adr")>-1;e.os={ios:s,pc:i,android:r},e.isDownScrolling=!1,e.isUpScrolling=!1,e.initDownScroll(),e.initUpScroll(),setTimeout(function(){e.optDown.use&&e.optDown.auto&&(e.optDown.autoShowLoading?e.triggerDownScroll():e.optDown.callback&&e.optDown.callback(e)),e.optUp.use&&e.optUp.auto&&!e.isUpAutoLoad&&e.triggerUpScroll()},30)}};return t.prototype.extendDownScroll=function(o){t.extend(o,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,isBoth:!1,offset:80,outOffsetRate:.2,bottomOffset:20,minAngle:45,hardwareClass:"mescroll-hardware",warpId:null,warpClass:"mescroll-downwarp",resetClass:"mescroll-downwarp-reset",htmlContent:'<p class="downwarp-progress"></p><p class="downwarp-tip">下拉刷新 </p>',inited:function(t,o){t.downTipDom=o.getElementsByClassName("downwarp-tip")[0],t.downProgressDom=o.getElementsByClassName("downwarp-progress")[0]},inOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML="下拉刷新"),t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},outOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML="释放更新")},onMoving:function(t,o,e){if(t.downProgressDom){var n=360*o;t.downProgressDom.style.webkitTransform="rotate("+n+"deg)",t.downProgressDom.style.transform="rotate("+n+"deg)"}},beforeLoading:function(t,o){return!1},showLoading:function(t){t.downTipDom&&(t.downTipDom.innerHTML="加载中 ..."),t.downProgressDom&&t.downProgressDom.classList.add("mescroll-rotate")},callback:function(t){t.resetUpScroll()}})},t.prototype.extendUpScroll=function(o){var e=this.os.pc;t.extend(o,{use:!0,auto:!0,isLock:!1,isBoth:!1,isBounce:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:100,toTop:{warpId:null,src:null,html:null,offset:1e3,warpClass:"mescroll-totop",showClass:"mescroll-fade-in",hideClass:"mescroll-fade-out",duration:300,supportTap:!1},loadFull:{use:!1,delay:500},empty:{warpId:null,icon:null,tip:"暂无相关数据~",btntext:"",btnClick:null,supportTap:!1},clearId:null,clearEmptyId:null,hardwareClass:"mescroll-hardware",warpId:null,warpClass:"mescroll-upwarp",htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',htmlNodata:'<p class="upwarp-nodata">-- END --</p>',inited:function(t,o){},showLoading:function(t,o){o.innerHTML=t.optUp.htmlLoading},showNoMore:function(t,o){o.innerHTML=t.optUp.htmlNodata},onScroll:null,scrollbar:{use:e,barClass:"mescroll-bar"}})},t.extend=function(o,e){if(!o)return e;for(var n in e)null==o[n]?o[n]=e[n]:"object"==typeof o[n]&&t.extend(o[n],e[n]);return o},t.prototype.initDownScroll=function(){var t=this;if(t.optDown=t.options.down||{},t.extendDownScroll(t.optDown),t.touchstartEvent=function(o){t.isScrollTo&&o.preventDefault(),t.startPoint=t.getPoint(o),t.lastPoint=t.startPoint,t.maxTouchmoveY=t.getBodyHeight()-t.optDown.bottomOffset,t.inTouchend=!1,t.os.pc&&t.getScrollTop()<=0&&(t.scrollDom.addEventListener("mousemove",t.touchmoveEvent),document.ondragstart=function(){return!1})},t.scrollDom.addEventListener("mousedown",t.touchstartEvent),t.scrollDom.addEventListener("touchstart",t.touchstartEvent),t.touchmoveEvent=function(o){var e=t.getScrollTop(),n=t.getPoint(o),s=n.y-t.startPoint.y;if(s>0){if(e<=0&&(o.cancelable&&!o.defaultPrevented&&o.preventDefault(),t.optDown.use&&!t.inTouchend&&!t.isDownScrolling&&!t.optDown.isLock&&(!t.isUpScrolling||t.isUpScrolling&&t.optUp.isBoth))){var i=Math.abs(t.lastPoint.x-n.x),r=Math.abs(t.lastPoint.y-n.y),l=Math.sqrt(i*i+r*r);if(0!=l)if(Math.asin(r/l)/Math.PI*180<t.optDown.minAngle)return;if(t.maxTouchmoveY>0&&n.y>=t.maxTouchmoveY)return t.inTouchend=!0,void t.touchendEvent();var p=n.y-t.lastPoint.y;t.downHight||(t.downHight=0),t.downHight<t.optDown.offset?(1!=t.movetype&&(t.movetype=1,t.optDown.inOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isMoveDown=!0),t.downHight+=p):(2!=t.movetype&&(t.movetype=2,t.optDown.outOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isMoveDown=!0),t.downHight+=p>0?p*t.optDown.outOffsetRate:p),t.downwarp.style.height=t.downHight+"px";var a=t.downHight/t.optDown.offset;t.optDown.onMoving(t,a,t.downHight)}}else if(s<0){var c=t.getScrollHeight(),u=t.getClientHeight(),d=c-u-e;!t.optUp.isBounce&&o.cancelable&&!o.defaultPrevented&&d<=0&&o.preventDefault(),t.optUp.use&&!t.optUp.isLock&&t.optUp.hasNext&&!t.isUpScrolling&&(!t.isDownScrolling||t.isDownScrolling&&t.optDown.isBoth)&&(u+t.optUp.offset>=c||d<=0)&&t.triggerUpScroll()}t.lastPoint=n},t.scrollDom.addEventListener("touchmove",t.touchmoveEvent),t.touchendEvent=function(){t.optDown.use&&t.isMoveDown&&(t.downHight>=t.optDown.offset?t.triggerDownScroll():(t.downwarp.classList.add(t.optDown.resetClass),t.downHight=0,t.downwarp.style.height=0),t.scrollDom.style.webkitOverflowScrolling="touch",t.scrollDom.classList.remove(t.optDown.hardwareClass),t.movetype=0,t.isMoveDown=!1),t.os.pc&&(t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),document.ondragstart=function(){return!0})},t.scrollDom.addEventListener("mouseup",t.touchendEvent),t.scrollDom.addEventListener("mouseleave",t.touchendEvent),t.scrollDom.addEventListener("touchend",t.touchendEvent),t.scrollDom.addEventListener("touchcancel",t.touchendEvent),t.optDown.use){t.downwarp=document.createElement("div"),t.downwarp.className=t.optDown.warpClass,t.downwarp.innerHTML='<div class="downwarp-content">'+t.optDown.htmlContent+"</div>";var o=t.optDown.warpId?t.getDomById(t.optDown.warpId):t.scrollDom;t.optDown.warpId&&o?o.appendChild(t.downwarp):(o||(o=t.scrollDom),o.insertBefore(t.downwarp,t.scrollDom.firstChild)),setTimeout(function(){t.optDown.inited(t,t.downwarp)},0)}},t.prototype.getPoint=function(t){return{x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY}},t.prototype.triggerDownScroll=function(){this.optDown.beforeLoading(this,this.downwarp)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},t.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.optDown.showLoading(this),this.downHight=this.optDown.offset,this.downwarp.classList.add(this.optDown.resetClass),this.downwarp.style.height=this.optDown.offset+"px"},t.prototype.endDownScroll=function(){this.downHight=0,this.downwarp.style.height=0,this.isDownScrolling=!1,this.downProgressDom&&this.downProgressDom.classList.remove("mescroll-rotate")},t.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},t.prototype.initUpScroll=function(){var t,o=this;(o.optUp=o.options.up||{use:!1},o.extendUpScroll(o.optUp),o.optUp.scrollbar.use&&o.scrollDom.classList.add(o.optUp.scrollbar.barClass),o.optUp.isBounce||o.setBounce(!1),0!=o.optUp.use)&&(o.optUp.hasNext=!0,o.upwarp=document.createElement("div"),o.upwarp.className=o.optUp.warpClass,o.optUp.warpId&&(t=o.getDomById(o.optUp.warpId)),t||(t=o.scrollDom),t.appendChild(o.upwarp),o.preScrollY=0,o.scrollEvent=function(){var t=o.getScrollTop(),e=t-o.preScrollY>0;if(o.preScrollY=t,!o.isUpScrolling&&(!o.isDownScrolling||o.isDownScrolling&&o.optDown.isBoth)){if(!o.optUp.isLock&&o.optUp.hasNext)o.getScrollHeight()-o.getClientHeight()-t<=o.optUp.offset&&e&&o.triggerUpScroll();var n=o.optUp.toTop;(n.src||n.html)&&(t>=n.offset?o.showTopBtn():o.hideTopBtn())}o.optUp.onScroll&&o.optUp.onScroll(o,t,e)},o.isScrollBody?window.addEventListener("scroll",o.scrollEvent):o.scrollDom.addEventListener("scroll",o.scrollEvent),setTimeout(function(){o.optUp.inited(o,o.upwarp)},0))},t.prototype.setBounce=function(t){!this.isScrollBody&&this.os.ios&&(0==t?(this.optUp.isBounce=!1,window.addEventListener("touchmove",this.bounceTouchmove)):(this.optUp.isBounce=!0,window.removeEventListener("touchmove",this.bounceTouchmove)))},t.prototype.bounceTouchmove=function(t){for(var o=this,e=t.target,n=!0;e!==document.body&&e!==document;){var s=e.classList;if(s){if(s.contains("mescroll")||s.contains("mescroll-touch")){n=!1;break}if(s.contains("mescroll-touch-x")||s.contains("mescroll-touch-y")){var i=t.touches?t.touches[0].pageX:t.clientX,r=t.touches?t.touches[0].pageY:t.clientY;o.preWinX||(o.preWinX=i),o.preWinY||(o.preWinY=r);var l=Math.abs(o.preWinX-i),p=Math.abs(o.preWinY-r),a=Math.sqrt(l*l+p*p);if(o.preWinX=i,o.preWinY=r,0!=a){var c=Math.asin(p/a)/Math.PI*180;if(c<=45&&s.contains("mescroll-touch-x")||c>45&&s.contains("mescroll-touch-y")){n=!1;break}}}}e=e.parentNode}n&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()},t.prototype.triggerUpScroll=function(){this.isUpScrolling||(this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.optUp.callback&&this.optUp.callback(this.optUp.page,this))},t.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.upwarp.classList.add(this.optUp.hardwareClass),this.upwarp.style.visibility="visible",this.optUp.showLoading(this,this.upwarp)},t.prototype.showNoMore=function(){this.upwarp.style.visibility="visible",this.optUp.hasNext=!1,this.optUp.showNoMore(this,this.upwarp)},t.prototype.hideUpScroll=function(){this.upwarp.style.visibility="hidden",this.upwarp.classList.remove(this.optUp.hardwareClass);var t=this.upwarp.getElementsByClassName("upwarp-progress")[0];t&&t.classList.remove("mescroll-rotate")},t.prototype.endUpScroll=function(t){null!=t&&(t?this.showNoMore():this.hideUpScroll()),this.isUpScrolling=!1},t.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var o=this.optUp.page;this.prePageNum=o.num,this.prePageTime=o.time,o.num=1,o.time=null,this.isDownScrolling||0==t||(null==t?(this.removeEmpty(),this.clearDataList(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.optUp.callback&&this.optUp.callback(o,this)}},t.prototype.setPageNum=function(t){this.optUp.page.num=t-1},t.prototype.setPageSize=function(t){this.optUp.page.size=t},t.prototype.clearDataList=function(){var t=this.optUp.clearId||this.optUp.clearEmptyId;if(t){var o=this.getDomById(t);o&&(o.innerHTML="")}},t.prototype.endByPage=function(t,o,e){var n;this.optUp.use&&null!=o&&(n=this.optUp.page.num<o),this.endSuccess(t,n,e)},t.prototype.endBySize=function(t,o,e){var n;this.optUp.use&&null!=o&&(n=(this.optUp.page.num-1)*this.optUp.page.size+t<o);this.endSuccess(t,n,e)},t.prototype.endSuccess=function(t,o,e){if(this.isDownScrolling&&this.endDownScroll(),this.optUp.use){var n;if(null!=t){var s=this.optUp.page.num,i=this.optUp.page.size;if(1==s&&(this.clearDataList(),e&&(this.optUp.page.time=e)),t<i||0==o)if(this.optUp.hasNext=!1,0==t&&1==s)n=!1,this.showEmpty();else n=!((s-1)*i+t<this.optUp.noMoreSize),this.removeEmpty();else n=!1,this.optUp.hasNext=!0,this.removeEmpty()}this.endUpScroll(n),this.loadFull()}},t.prototype.endErr=function(){if(this.isDownScrolling){var t=this.optUp.page;t&&this.prePageNum&&(t.num=this.prePageNum,t.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},t.prototype.loadFull=function(){var t=this;t.optUp.loadFull.use&&!t.optUp.isLock&&t.optUp.hasNext&&t.getScrollHeight()<=t.getClientHeight()&&setTimeout(function(){t.getScrollHeight()<=t.getClientHeight()&&t.triggerUpScroll()},t.optUp.loadFull.delay)},t.prototype.lockUpScroll=function(t){null==t&&(t=!0),this.optUp.isLock=t},t.prototype.showEmpty=function(){var t=this,o=t.optUp.empty,e=o.warpId||t.optUp.clearEmptyId;if(null!=e){var n=t.getDomById(e);if(n){t.removeEmpty();var s="";if(o.icon&&(s+='<img class="empty-icon" src="'+o.icon+'"/>'),o.tip&&(s+='<p class="empty-tip">'+o.tip+"</p>"),o.btntext&&(s+='<p class="empty-btn">'+o.btntext+"</p>"),t.emptyDom=document.createElement("div"),t.emptyDom.className="mescroll-empty",t.emptyDom.innerHTML=s,n.appendChild(t.emptyDom),o.btnClick){var i=t.emptyDom.getElementsByClassName("empty-btn")[0];o.supportTap?i.addEventListener("tap",function(t){t.stopPropagation(),t.preventDefault(),o.btnClick()}):i.onclick=function(){o.btnClick()}}}}},t.prototype.removeEmpty=function(){this.removeChild(this.emptyDom)},t.prototype.showTopBtn=function(){if(!this.topBtnShow){this.topBtnShow=!0;var t,o=this,e=o.optUp.toTop;if(null==o.toTopBtn)e.html?(o.toTopBtn=document.createElement("div"),o.toTopBtn.innerHTML=e.html):(o.toTopBtn=document.createElement("img"),o.toTopBtn.src=e.src),o.toTopBtn.className=e.warpClass,e.supportTap?o.toTopBtn.addEventListener("tap",function(t){t.stopPropagation(),t.preventDefault(),o.scrollTo(0,o.optUp.toTop.duration)}):o.toTopBtn.onclick=function(){o.scrollTo(0,o.optUp.toTop.duration)},e.warpId&&(t=o.getDomById(e.warpId)),t||(t=document.body),t.appendChild(o.toTopBtn);o.toTopBtn.classList.remove(e.hideClass),o.toTopBtn.classList.add(e.showClass)}},t.prototype.hideTopBtn=function(){this.topBtnShow&&this.toTopBtn&&(this.topBtnShow=!1,this.toTopBtn.classList.remove(this.optUp.toTop.showClass),this.toTopBtn.classList.add(this.optUp.toTop.hideClass))},t.prototype.scrollTo=function(t,o){var e=this,n=e.getScrollTop(),s=t;if(s>0){var i=e.getScrollHeight()-e.getClientHeight();s>i&&(s=i)}else s=0;e.isScrollTo=!0,e.getStep(n,s,function(t){e.setScrollTop(t),t==s&&(e.isScrollTo=!1)},o)},t.prototype.getStep=function(t,o,e,n,s){var i=o-t;if(0!=n&&0!=i)var r=(n=n||300)/(s=s||30),l=i/r,p=0,a=window.setInterval(function(){p<r-1?(t+=l,e&&e(t,a),p++):(e&&e(o,a),window.clearInterval(a))},s);else e&&e(o)},t.prototype.getScrollHeight=function(){return this.scrollDom.scrollHeight},t.prototype.getClientHeight=function(){return this.isScrollBody&&"CSS1Compat"==document.compatMode?document.documentElement.clientHeight:this.scrollDom.clientHeight},t.prototype.getBodyHeight=function(){return document.body.clientHeight||document.documentElement.clientHeight},t.prototype.getScrollTop=function(){return this.isScrollBody?document.documentElement.scrollTop||document.body.scrollTop:this.scrollDom.scrollTop},t.prototype.getToBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},t.prototype.setScrollTop=function(t){this.isScrollBody?(document.documentElement.scrollTop=t,document.body.scrollTop=t):this.scrollDom.scrollTop=t},t.prototype.getDomById=function(t){var o;return t&&(o=document.getElementById(t)),o||console.error('the element with id as "'+t+'" can not be found: document.getElementById("'+t+'")==null'),o},t.prototype.removeChild=function(t){if(t){var o=t.parentNode;o&&o.removeChild(t),t=null}},t.prototype.destroy=function(){var t=this;t.scrollDom.removeEventListener("touchstart",t.touchstartEvent),t.scrollDom.removeEventListener("touchmove",t.touchmoveEvent),t.scrollDom.removeEventListener("touchend",t.touchendEvent),t.scrollDom.removeEventListener("touchcancel",t.touchendEvent),t.scrollDom.removeEventListener("mousedown",t.touchstartEvent),t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),t.scrollDom.removeEventListener("mouseup",t.touchendEvent),t.scrollDom.removeEventListener("mouseleave",t.touchendEvent),t.removeChild(t.downwarp),t.isScrollBody?window.removeEventListener("scroll",t.scrollEvent):t.scrollDom.removeEventListener("scroll",t.scrollEvent),t.removeChild(t.upwarp),t.removeChild(t.toTopBtn),t.setBounce(!0)},t})},204:function(t,o){
/*!
 * mescroll -- 精致的下拉刷新和上拉加载js框架  ( a great JS framework for pull-refresh and pull-up-loading )
 * version 1.3.2
 * 2018-01-01
 *
 * 您如果在vue,angular等环境中,因作用域的问题未能正常引入或初始化Mescroll对象,则可引用mescroll.m.js;
 * mescroll.m.js去掉了mescroll.min.js套的一层模块规范的代码
 * 因为没有闭包限制作用域,所以能解决某些情况下引用mescroll.min.js报'Mescroll' undefined的问题
 * 具体请参考: https://github.com/mescroll/mescroll/issues/56
 */
function e(t,o){var e=this;if(e.version="1.3.2",e.isScrollBody=!t||"body"==t,e.scrollDom=e.isScrollBody?document.body:e.getDomById(t),e.scrollDom){e.options=o||{};var n=navigator.userAgent,s=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=void 0===window.orientation,r=n.indexOf("Android")>-1||n.indexOf("Adr")>-1;e.os={ios:s,pc:i,android:r},e.isDownScrolling=!1,e.isUpScrolling=!1,e.initDownScroll(),e.initUpScroll(),setTimeout(function(){e.optDown.use&&e.optDown.auto&&(e.optDown.autoShowLoading?e.triggerDownScroll():e.optDown.callback&&e.optDown.callback(e)),e.optUp.use&&e.optUp.auto&&!e.isUpAutoLoad&&e.triggerUpScroll()},30)}}e.prototype.extendDownScroll=function(t){e.extend(t,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,isBoth:!1,offset:80,outOffsetRate:.2,bottomOffset:20,minAngle:45,hardwareClass:"mescroll-hardware",warpId:null,warpClass:"mescroll-downwarp",resetClass:"mescroll-downwarp-reset",htmlContent:'<p class="downwarp-progress"></p><p class="downwarp-tip">下拉刷新 </p>',inited:function(t,o){t.downTipDom=o.getElementsByClassName("downwarp-tip")[0],t.downProgressDom=o.getElementsByClassName("downwarp-progress")[0]},inOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML="下拉刷新"),t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},outOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML="释放更新")},onMoving:function(t,o,e){if(t.downProgressDom){var n=360*o;t.downProgressDom.style.webkitTransform="rotate("+n+"deg)",t.downProgressDom.style.transform="rotate("+n+"deg)"}},beforeLoading:function(t,o){return!1},showLoading:function(t){t.downTipDom&&(t.downTipDom.innerHTML="加载中 ..."),t.downProgressDom&&t.downProgressDom.classList.add("mescroll-rotate")},callback:function(t){t.resetUpScroll()}})},e.prototype.extendUpScroll=function(t){var o=this.os.pc;e.extend(t,{use:!0,auto:!0,isLock:!1,isBoth:!1,isBounce:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:100,toTop:{warpId:null,src:null,html:null,offset:1e3,warpClass:"mescroll-totop",showClass:"mescroll-fade-in",hideClass:"mescroll-fade-out",duration:300,supportTap:!1},loadFull:{use:!1,delay:500},empty:{warpId:null,icon:null,tip:"暂无相关数据~",btntext:"",btnClick:null,supportTap:!1},clearId:null,clearEmptyId:null,hardwareClass:"mescroll-hardware",warpId:null,warpClass:"mescroll-upwarp",htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',htmlNodata:'<p class="upwarp-nodata">-- END --</p>',inited:function(t,o){},showLoading:function(t,o){o.innerHTML=t.optUp.htmlLoading},showNoMore:function(t,o){o.innerHTML=t.optUp.htmlNodata},onScroll:null,scrollbar:{use:o,barClass:"mescroll-bar"}})},e.extend=function(t,o){if(!t)return o;for(var n in o)null==t[n]?t[n]=o[n]:"object"==typeof t[n]&&e.extend(t[n],o[n]);return t},e.prototype.initDownScroll=function(){var t=this;if(t.optDown=t.options.down||{},t.extendDownScroll(t.optDown),t.touchstartEvent=function(o){t.isScrollTo&&o.preventDefault(),t.startPoint=t.getPoint(o),t.lastPoint=t.startPoint,t.maxTouchmoveY=t.getBodyHeight()-t.optDown.bottomOffset,t.inTouchend=!1,t.os.pc&&t.getScrollTop()<=0&&(t.scrollDom.addEventListener("mousemove",t.touchmoveEvent),document.ondragstart=function(){return!1})},t.scrollDom.addEventListener("mousedown",t.touchstartEvent),t.scrollDom.addEventListener("touchstart",t.touchstartEvent),t.touchmoveEvent=function(o){var e=t.getScrollTop(),n=t.getPoint(o),s=n.y-t.startPoint.y;if(s>0){if(e<=0&&(o.cancelable&&!o.defaultPrevented&&o.preventDefault(),t.optDown.use&&!t.inTouchend&&!t.isDownScrolling&&!t.optDown.isLock&&(!t.isUpScrolling||t.isUpScrolling&&t.optUp.isBoth))){var i=Math.abs(t.lastPoint.x-n.x),r=Math.abs(t.lastPoint.y-n.y),l=Math.sqrt(i*i+r*r);if(0!=l)if(Math.asin(r/l)/Math.PI*180<t.optDown.minAngle)return;if(t.maxTouchmoveY>0&&n.y>=t.maxTouchmoveY)return t.inTouchend=!0,void t.touchendEvent();var p=n.y-t.lastPoint.y;t.downHight||(t.downHight=0),t.downHight<t.optDown.offset?(1!=t.movetype&&(t.movetype=1,t.optDown.inOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isMoveDown=!0),t.downHight+=p):(2!=t.movetype&&(t.movetype=2,t.optDown.outOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isMoveDown=!0),t.downHight+=p>0?p*t.optDown.outOffsetRate:p),t.downwarp.style.height=t.downHight+"px";var a=t.downHight/t.optDown.offset;t.optDown.onMoving(t,a,t.downHight)}}else if(s<0){var c=t.getScrollHeight(),u=t.getClientHeight(),d=c-u-e;!t.optUp.isBounce&&o.cancelable&&!o.defaultPrevented&&d<=0&&o.preventDefault(),t.optUp.use&&!t.optUp.isLock&&t.optUp.hasNext&&!t.isUpScrolling&&(!t.isDownScrolling||t.isDownScrolling&&t.optDown.isBoth)&&(u+t.optUp.offset>=c||d<=0)&&t.triggerUpScroll()}t.lastPoint=n},t.scrollDom.addEventListener("touchmove",t.touchmoveEvent),t.touchendEvent=function(){t.optDown.use&&t.isMoveDown&&(t.downHight>=t.optDown.offset?t.triggerDownScroll():(t.downwarp.classList.add(t.optDown.resetClass),t.downHight=0,t.downwarp.style.height=0),t.scrollDom.style.webkitOverflowScrolling="touch",t.scrollDom.classList.remove(t.optDown.hardwareClass),t.movetype=0,t.isMoveDown=!1),t.os.pc&&(t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),document.ondragstart=function(){return!0})},t.scrollDom.addEventListener("mouseup",t.touchendEvent),t.scrollDom.addEventListener("mouseleave",t.touchendEvent),t.scrollDom.addEventListener("touchend",t.touchendEvent),t.scrollDom.addEventListener("touchcancel",t.touchendEvent),t.optDown.use){t.downwarp=document.createElement("div"),t.downwarp.className=t.optDown.warpClass,t.downwarp.innerHTML='<div class="downwarp-content">'+t.optDown.htmlContent+"</div>";var o=t.optDown.warpId?t.getDomById(t.optDown.warpId):t.scrollDom;t.optDown.warpId&&o?o.appendChild(t.downwarp):(o||(o=t.scrollDom),o.insertBefore(t.downwarp,t.scrollDom.firstChild)),setTimeout(function(){t.optDown.inited(t,t.downwarp)},0)}},e.prototype.getPoint=function(t){return{x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY}},e.prototype.triggerDownScroll=function(){this.optDown.beforeLoading(this,this.downwarp)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},e.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.optDown.showLoading(this),this.downHight=this.optDown.offset,this.downwarp.classList.add(this.optDown.resetClass),this.downwarp.style.height=this.optDown.offset+"px"},e.prototype.endDownScroll=function(){this.downHight=0,this.downwarp.style.height=0,this.isDownScrolling=!1,this.downProgressDom&&this.downProgressDom.classList.remove("mescroll-rotate")},e.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},e.prototype.initUpScroll=function(){var t,o=this;(o.optUp=o.options.up||{use:!1},o.extendUpScroll(o.optUp),o.optUp.scrollbar.use&&o.scrollDom.classList.add(o.optUp.scrollbar.barClass),o.optUp.isBounce||o.setBounce(!1),0!=o.optUp.use)&&(o.optUp.hasNext=!0,o.upwarp=document.createElement("div"),o.upwarp.className=o.optUp.warpClass,o.optUp.warpId&&(t=o.getDomById(o.optUp.warpId)),t||(t=o.scrollDom),t.appendChild(o.upwarp),o.preScrollY=0,o.scrollEvent=function(){var t=o.getScrollTop(),e=t-o.preScrollY>0;if(o.preScrollY=t,!o.isUpScrolling&&(!o.isDownScrolling||o.isDownScrolling&&o.optDown.isBoth)){if(!o.optUp.isLock&&o.optUp.hasNext)o.getScrollHeight()-o.getClientHeight()-t<=o.optUp.offset&&e&&o.triggerUpScroll();var n=o.optUp.toTop;(n.src||n.html)&&(t>=n.offset?o.showTopBtn():o.hideTopBtn())}o.optUp.onScroll&&o.optUp.onScroll(o,t,e)},o.isScrollBody?window.addEventListener("scroll",o.scrollEvent):o.scrollDom.addEventListener("scroll",o.scrollEvent),setTimeout(function(){o.optUp.inited(o,o.upwarp)},0))},e.prototype.setBounce=function(t){!this.isScrollBody&&this.os.ios&&(0==t?(this.optUp.isBounce=!1,window.addEventListener("touchmove",this.bounceTouchmove)):(this.optUp.isBounce=!0,window.removeEventListener("touchmove",this.bounceTouchmove)))},e.prototype.bounceTouchmove=function(t){for(var o=this,e=t.target,n=!0;e!==document.body&&e!==document;){var s=e.classList;if(s){if(s.contains("mescroll")||s.contains("mescroll-touch")){n=!1;break}if(s.contains("mescroll-touch-x")||s.contains("mescroll-touch-y")){var i=t.touches?t.touches[0].pageX:t.clientX,r=t.touches?t.touches[0].pageY:t.clientY;o.preWinX||(o.preWinX=i),o.preWinY||(o.preWinY=r);var l=Math.abs(o.preWinX-i),p=Math.abs(o.preWinY-r),a=Math.sqrt(l*l+p*p);if(o.preWinX=i,o.preWinY=r,0!=a){var c=Math.asin(p/a)/Math.PI*180;if(c<=45&&s.contains("mescroll-touch-x")||c>45&&s.contains("mescroll-touch-y")){n=!1;break}}}}e=e.parentNode}n&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()},e.prototype.triggerUpScroll=function(){this.isUpScrolling||(this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.optUp.callback&&this.optUp.callback(this.optUp.page,this))},e.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.upwarp.classList.add(this.optUp.hardwareClass),this.upwarp.style.visibility="visible",this.optUp.showLoading(this,this.upwarp)},e.prototype.showNoMore=function(){this.upwarp.style.visibility="visible",this.optUp.hasNext=!1,this.optUp.showNoMore(this,this.upwarp)},e.prototype.hideUpScroll=function(){this.upwarp.style.visibility="hidden",this.upwarp.classList.remove(this.optUp.hardwareClass);var t=this.upwarp.getElementsByClassName("upwarp-progress")[0];t&&t.classList.remove("mescroll-rotate")},e.prototype.endUpScroll=function(t){null!=t&&(t?this.showNoMore():this.hideUpScroll()),this.isUpScrolling=!1},e.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var o=this.optUp.page;this.prePageNum=o.num,this.prePageTime=o.time,o.num=1,o.time=null,this.isDownScrolling||0==t||(null==t?(this.removeEmpty(),this.clearDataList(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.optUp.callback&&this.optUp.callback(o,this)}},e.prototype.setPageNum=function(t){this.optUp.page.num=t-1},e.prototype.setPageSize=function(t){this.optUp.page.size=t},e.prototype.clearDataList=function(){var t=this.optUp.clearId||this.optUp.clearEmptyId;if(t){var o=this.getDomById(t);o&&(o.innerHTML="")}},e.prototype.endByPage=function(t,o,e){var n;this.optUp.use&&null!=o&&(n=this.optUp.page.num<o),this.endSuccess(t,n,e)},e.prototype.endBySize=function(t,o,e){var n;this.optUp.use&&null!=o&&(n=(this.optUp.page.num-1)*this.optUp.page.size+t<o);this.endSuccess(t,n,e)},e.prototype.endSuccess=function(t,o,e){if(this.isDownScrolling&&this.endDownScroll(),this.optUp.use){var n;if(null!=t){var s=this.optUp.page.num,i=this.optUp.page.size;if(1==s&&(this.clearDataList(),e&&(this.optUp.page.time=e)),t<i||0==o)if(this.optUp.hasNext=!1,0==t&&1==s)n=!1,this.showEmpty();else n=!((s-1)*i+t<this.optUp.noMoreSize),this.removeEmpty();else n=!1,this.optUp.hasNext=!0,this.removeEmpty()}this.endUpScroll(n),this.loadFull()}},e.prototype.endErr=function(){if(this.isDownScrolling){var t=this.optUp.page;t&&this.prePageNum&&(t.num=this.prePageNum,t.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},e.prototype.loadFull=function(){var t=this;t.optUp.loadFull.use&&!t.optUp.isLock&&t.optUp.hasNext&&t.getScrollHeight()<=t.getClientHeight()&&setTimeout(function(){t.getScrollHeight()<=t.getClientHeight()&&t.triggerUpScroll()},t.optUp.loadFull.delay)},e.prototype.lockUpScroll=function(t){null==t&&(t=!0),this.optUp.isLock=t},e.prototype.showEmpty=function(){var t=this,o=t.optUp.empty,e=o.warpId||t.optUp.clearEmptyId;if(null!=e){var n=t.getDomById(e);if(n){t.removeEmpty();var s="";if(o.icon&&(s+='<img class="empty-icon" src="'+o.icon+'"/>'),o.tip&&(s+='<p class="empty-tip">'+o.tip+"</p>"),o.btntext&&(s+='<p class="empty-btn">'+o.btntext+"</p>"),t.emptyDom=document.createElement("div"),t.emptyDom.className="mescroll-empty",t.emptyDom.innerHTML=s,n.appendChild(t.emptyDom),o.btnClick){var i=t.emptyDom.getElementsByClassName("empty-btn")[0];o.supportTap?i.addEventListener("tap",function(t){t.stopPropagation(),t.preventDefault(),o.btnClick()}):i.onclick=function(){o.btnClick()}}}}},e.prototype.removeEmpty=function(){this.removeChild(this.emptyDom)},e.prototype.showTopBtn=function(){if(!this.topBtnShow){this.topBtnShow=!0;var t,o=this,e=o.optUp.toTop;if(null==o.toTopBtn)e.html?(o.toTopBtn=document.createElement("div"),o.toTopBtn.innerHTML=e.html):(o.toTopBtn=document.createElement("img"),o.toTopBtn.src=e.src),o.toTopBtn.className=e.warpClass,e.supportTap?o.toTopBtn.addEventListener("tap",function(t){t.stopPropagation(),t.preventDefault(),o.scrollTo(0,o.optUp.toTop.duration)}):o.toTopBtn.onclick=function(){o.scrollTo(0,o.optUp.toTop.duration)},e.warpId&&(t=o.getDomById(e.warpId)),t||(t=document.body),t.appendChild(o.toTopBtn);o.toTopBtn.classList.remove(e.hideClass),o.toTopBtn.classList.add(e.showClass)}},e.prototype.hideTopBtn=function(){this.topBtnShow&&this.toTopBtn&&(this.topBtnShow=!1,this.toTopBtn.classList.remove(this.optUp.toTop.showClass),this.toTopBtn.classList.add(this.optUp.toTop.hideClass))},e.prototype.scrollTo=function(t,o){var e=this,n=e.getScrollTop(),s=t;if(s>0){var i=e.getScrollHeight()-e.getClientHeight();s>i&&(s=i)}else s=0;e.isScrollTo=!0,e.getStep(n,s,function(t){e.setScrollTop(t),t==s&&(e.isScrollTo=!1)},o)},e.prototype.getStep=function(t,o,e,n,s){var i=o-t;if(0!=n&&0!=i)var r=(n=n||300)/(s=s||30),l=i/r,p=0,a=window.setInterval(function(){p<r-1?(t+=l,e&&e(t,a),p++):(e&&e(o,a),window.clearInterval(a))},s);else e&&e(o)},e.prototype.getScrollHeight=function(){return this.scrollDom.scrollHeight},e.prototype.getClientHeight=function(){return this.isScrollBody&&"CSS1Compat"==document.compatMode?document.documentElement.clientHeight:this.scrollDom.clientHeight},e.prototype.getBodyHeight=function(){return document.body.clientHeight||document.documentElement.clientHeight},e.prototype.getScrollTop=function(){return this.isScrollBody?document.documentElement.scrollTop||document.body.scrollTop:this.scrollDom.scrollTop},e.prototype.getToBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},e.prototype.setScrollTop=function(t){this.isScrollBody?(document.documentElement.scrollTop=t,document.body.scrollTop=t):this.scrollDom.scrollTop=t},e.prototype.getDomById=function(t){var o;return t&&(o=document.getElementById(t)),o||console.error('the element with id as "'+t+'" can not be found: document.getElementById("'+t+'")==null'),o},e.prototype.removeChild=function(t){if(t){var o=t.parentNode;o&&o.removeChild(t),t=null}},e.prototype.destroy=function(){var t=this;t.scrollDom.removeEventListener("touchstart",t.touchstartEvent),t.scrollDom.removeEventListener("touchmove",t.touchmoveEvent),t.scrollDom.removeEventListener("touchend",t.touchendEvent),t.scrollDom.removeEventListener("touchcancel",t.touchendEvent),t.scrollDom.removeEventListener("mousedown",t.touchstartEvent),t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),t.scrollDom.removeEventListener("mouseup",t.touchendEvent),t.scrollDom.removeEventListener("mouseleave",t.touchendEvent),t.removeChild(t.downwarp),t.isScrollBody?window.removeEventListener("scroll",t.scrollEvent):t.scrollDom.removeEventListener("scroll",t.scrollEvent),t.removeChild(t.upwarp),t.removeChild(t.toTopBtn),t.setBounce(!0)}},206:function(t,o,e){},87:function(t,o,e){"use strict";e.r(o);var n=e(166),s=e(131);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var r=e(0),l=Object(r.a)(s.default,n.a,n.b,!1,null,null,null);o.default=l.exports}}]);