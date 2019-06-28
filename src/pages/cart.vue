<template>
  <div>
    <div id="page_blank" v-show="cartBlank">
      <div class="main">
        <div class="no_data" style="border:1px solid transparent;">
          <i class="no_cart"></i>
          <p>购物车是空的~</p>
        </div>
      </div>
      <Footer :cur="cur"></Footer>
    </div>
    <div id="page_content" v-show="!cartBlank">
      <div class="my_head">
        <!--<div class="add_address">
                    <router-link to="/addressDetail">点击此处可添加收货地址</router-link>
        </div>-->
        <div class="write_p">
          <a @click="writeP()">{{btnText}}</a>
        </div>
      </div>

      <ul class="cart_list">
        <li class="cart_item" v-for="p in pList" data-type="0">
          <div
            class="updiv"
            @touchstart.capture="touchStart"
            @touchend.capture="touchEnd"
            @click="skip"
          >
            <!--<input type="checkbox" class="check ItemCheck" v-model="p.check"  @click.stop.prevent="checkItem(p)"/>-->
            <span
              class="check"
              :class="[p.check?'checked':false]"
              style="margin-right: 10px;"
              v-model="p.check"
              @click.stop.prevent="checkItem(p)"
            ></span>
            <!--<span>{{p.check}}</span>-->
            <div class="cart_detail">
              <div class="cart_img">
                <img :src="img_path+p.ProImage">
              </div>
              <div class="cart_msg">
                <p class="p_name">
                  <span class="proname">{{p.ProName}}</span>
                  <br>
                  <span class="promodel" style="font-size: 0.8em;">({{p.ProModel}})</span>
                </p>
                <div>
                  <div class="p_price">
                    <b class="price">
                      ￥
                      <span class="pri">{{p.SinglePrice.toFixed(2)}}</span>
                    </b>
                  </div>
                  <div class="p_number">
                    <button class="min adm" @click="changeNum(0,p)"></button>
                    <span class="num">{{p.ProQuantity}}</span>
                    <button class="add adm" @click="changeNum(1,p)"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="downdiv" @click="deleteItem(p)">
            <span class="delete"></span>
            <span class="text">删 除</span>
          </div>
        </li>
      </ul>

      <div class="footer_box" style="bottom:51px;">
        <div id="footer">
          <div class="cart">
            <div>
              <span
                class="check"
                :class="[allCheck?'checked':false]"
                v-model="allCheck"
                @click="checkAll"
              ></span>
              <p>全选</p>
            </div>
          </div>
          <div class="cart_r r1" v-show="!isWrite">
            <div class="f_item">
              <p class="price">
                总计:
                <b class="price">
                  ￥
                  <span class="AllPrice">{{allPrice}}</span>
                </b>
              </p>
              <span style="font-size: 10px;">(不含运费)</span>
            </div>
            <div class="buy f_item">
              <a @click="goOrder()" id="btn">
                去结算(
                <span class="nums">{{allQuantity}}</span>件)
              </a>
            </div>
          </div>
          <div class="cart_r r2" v-show="isWrite">
            <div class="f_item"></div>
            <div class="f_item">
              <a class="delete" @click="showA()">删除</a>
            </div>
          </div>
        </div>
      </div>

      <Footer :cur="cur" :q="allQuantity" :c="cartBlank"></Footer>
    </div>
    <transition name="fade">
      <div class="alert" v-show="showAlert">
        <Alert @on-close="myCloseAlert">
          <p slot="delete">你确定要删除该地址吗？</p>
        </Alert>
      </div>
    </transition>
  </div>
</template>
<style lang="stylus" scoped>
i.no_cart {
    width:136px;
    height:139px;
    display:block;
    background url('../assets/img/cartblank.png')
    background-size 100% 100%;
    margin:15em auto 2em;
}
span.check {
  display: block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 1px solid #aaa;
  border-radius: 50%;
}
span.checked {
  background: url("../assets/img/checked.png") center center;
  background-size: 100% 100%;
  border: none;
}
.downdiv > span {
  display: block;
  margin: 0 auto;
  width: 50px;
  text-align: center;
}
span.delete {
  height: 50px;
  margin-top: 15px;
  background: url("../assets/img/delete.png") no-repeat center center;
}
.downdiv > span.text {
  height: 20px;
}
.cart_item[data-type="0"] .updiv {
  transform: translate3d(0, 0, 0);
}
.cart_item[data-type="1"] .updiv {
  transform: translate3d(-65px, 0, 0);
}
.updiv {
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
}
</style>
<script type="es6">
import Footer from "../components/footer";
import Alert from "../components/alert";
export default {
  data() {
    return {
      cur: "cart",
      isWrite: false,
      cartBlank: true,
      img_path: "http://znswsse.com:8031/",
      pList: [],
      btnText: "编辑商品",
      allCheck: true,
      showAlert: false,
      startX: 0,
      endX: 0,
      // c:0,   //购物车变空时，给页脚传递
      token: localStorage.getItem("token")
    };
  },
  metaInfo: {
    title: "购物车"
  },
  components: {
    Footer,
    Alert
  },
  computed: {
    allPrice() {
      let n = 0;
      for (let i = 0; i < this.pList.length; i++) {
        if (this.pList[i].check) {
          n += this.pList[i].SinglePrice * this.pList[i].ProQuantity;
        }
      }
      return n;
    },
    allQuantity() {
      let n = 0;
      for (let i = 0; i < this.pList.length; i++) {
        if (this.pList[i].check) {
          n += this.pList[i].ProQuantity;
        }
      }
      return n;
    }
  },
  mounted() {
    this.getPList();
  },
  methods: {
    getPList() {
      this.$emit("loadShow", true);
      this.axios
        .get("account/shopping-cart?token=" + this.token)
        .then(msg => {
          this.$emit("loadShow", false);
          if (msg.data.res_infor.length > 0) {
            this.cartBlank = false;
            this.pList = msg.data.res_infor;
            for (let i = 0; i < this.pList.length; i++) {
              this.$set(this.pList[i], "check", true);
            }
            console.log(this.pList);
          } else {
            this.cartBlank = true;
          }
        })
        .catch(err => {
          this.$emit("loadErrShow", true);
        });
    },
    checkItem(p) {
      if (p.check) {
        p.check = false;
        this.allCheck = false;
      } else {
        p.check = true;
        let b = true;
        for (let i = 0; i < this.pList.length; i++) {
          if (!this.pList[i].check) {
            b = false;
          }
        }
        b ? (this.allCheck = true) : (this.allCheck = false);
      }
    },
    checkAll() {
      if (this.allCheck) {
        this.allCheck = false;
        for (let i = 0; i < this.pList.length; i++) {
          this.pList[i].check = false;
        }
      } else {
        this.allCheck = true;
        for (let i = 0; i < this.pList.length; i++) {
          this.pList[i].check = true;
        }
      }
    },
    goOrder() {
      let ids = [];
      for (let i = 0; i < this.pList.length; i++) {
        if (this.pList[i].check) {
          ids.push(this.pList[i].ProId);
        }
      }
      if (ids.length > 0) {
        this.$router.push({ path: "/orderDetail", query: { ids: ids } });
      } else {
        alert("请选择要购买的商品");
      }
    },
    changeNum(n, p) {
      this.$emit("loadShow", true);
      if (n) {
        let json = JSON.stringify({
          proid: p.ProId,
          proquantity: 1,
          singleprice: p.SinglePrice,
          totalprice: p.SinglePrice
        });
        this.axios
          .post("account/shopping-cart?token=" + this.token, json)
          .then(msg => {
            this.getPList();
          })
          .catch(err => {
            this.$emit("loadErrShow", true);
          });
      } else {
        if (p.ProQuantity == 1) {
          this.$emit("loadShow", false);
        } else {
          let json = JSON.stringify({
            proid: p.ProId,
            proquantity: -1,
            singleprice: p.SinglePrice,
            totalprice: p.SinglePrice
          });
          this.axios
            .post("account/shopping-cart?token=" + this.token, json)
            .then(msg => {
              this.getPList();
            })
            .catch(err => {
              this.$emit("loadErrShow", true);
            });
        }
      }
    },
    writeP() {
      if (this.btnText == "编辑商品") {
        this.btnText = "完成";
        this.isWrite = true;
        this.allCheck = false;
        for (let i = 0; i < this.pList.length; i++) {
          this.pList[i].check = false;
        }
      } else {
        this.btnText = "编辑商品";
        this.isWrite = false;
        this.allCheck = true;
        for (let i = 0; i < this.pList.length; i++) {
          this.pList[i].check = true;
        }
      }
    },
    showA() {
      let bool = false;
      for (let i = 0; i < this.pList.length; i++) {
        if (this.pList[i].check) {
          bool = true;
        } else {
        }
      }
      if (bool) {
        this.showAlert = true;
      } else {
        alert("请选择要删除的商品！");
      }
    },
    myCloseAlert(bool) {
      this.showAlert = false;
      if (bool) {
        this.deleteAll();
      }
    },
    deleteAll() {
      let ids = [];
      this.$emit("loadShow", true);
      for (let i = 0; i < this.pList.length; i++) {
        if (this.pList[i].check) {
          ids.push(this.pList[i].ProId);
        }
      }
      let json = JSON.stringify({ pro_ids: ids });
      this.axios
        .post("account/shopping-cart/delete?token=" + this.token, json)
        .then(msg => {
          this.btnText = "编辑商品";
          this.isWrite = false;
          this.allCheck = true;
          for (let i = 0; i < this.pList.length; i++) {
            this.pList[i].check = true;
          }
          this.getPList();
        })
        .catch(err => {
          this.$emit("loadErrShow", true);
        });
    },
    //跳转
    skip() {
      if (this.checkSlide()) {
        this.restSlide();
      } else {
        // alert('You click the slide!')
      }
    },
    //滑动开始
    touchStart(e) {
      // 记录初始位置
      this.startX = e.touches[0].clientX;
    },
    //滑动结束
    touchEnd(e) {
      // 当前滑动的父级元素
      let parentElement = e.currentTarget.parentElement;
      // 记录结束位置
      this.endX = e.changedTouches[0].clientX;
      // 左滑
      if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
        this.restSlide();
        parentElement.dataset.type = 1;
      }
      // 右滑
      if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
        this.restSlide();
        parentElement.dataset.type = 0;
      }
      this.startX = 0;
      this.endX = 0;
    },
    //判断当前是否有滑块处于滑动状态
    checkSlide() {
      let listItems = document.querySelectorAll(".cart_item");
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].dataset.type == 1) {
          return true;
        }
      }
      return false;
    },
    //复位滑动状态
    restSlide() {
      let listItems = document.querySelectorAll(".cart_item");
      // 复位
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.type = 0;
      }
    },
    //删除
    deleteItem(p) {
      // 当前索引
      // let index = e.currentTarget.dataset.index;
      // 复位
      this.restSlide();
      // 删除
      let ids = [p.ProId];
      this.$emit("loadShow", true);
      let json = JSON.stringify({ pro_ids: ids });
      this.axios
        .post("account/shopping-cart/delete?token=" + this.token, json)
        .then(msg => {
          this.getPList();
          // this.allQuantity();
        })
        .catch(err => {
          this.$emit("loadErrShow", true);
        });
    }
  }
};
</script>
<style scoped>
div.cart_r {
  display: flex;
  width: 84%;
}
div.f_item {
  width: 50%;
}
div.r2 div.f_item {
  display: flex;
  align-items: center;
  text-align: center;
}
#footer a.delete {
  padding: 0.5em 2em;
  border: 1px solid #fc9212;
  font-size: 1.2em;
  color: #fff;
  text-align: center;
  margin: 0 auto;
}
#page_blank,
#page_content {
  margin-bottom: 6em;
}
</style>
