<template>
  <div class="footer_box">
    <ul id="footer">
      <li :class="[cur=='index'?'cur':'']">
        <router-link to="/index" tag="div" style="width:100%;height:100%;">
          <i class="home"></i>
          <span>主页</span>
        </router-link>
      </li>
      <li :class="[cur=='cart'?'cur':'']">
        <router-link to="cart" tag="div" style="width:100%;height:100%;">
          <i class="cart"></i>
          <span>购物车</span>
          <span class="cart_num" v-if="showQ">{{quantity}}</span>
        </router-link>
      </li>
      <li :class="[cur=='userCenter'?'cur':'']">
        <router-link to="userCenter" tag="div" style="width:100%;height:100%;">
          <i class="user"></i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="stylus" scoped>
.footer_box {
  position: fixed;
  z-index: 9;
  bottom: 0;
  left: 0;
  width: 100%;
}

.footer_box .cart_num {
  position: absolute;
  top: 0.3em;
  right: 2.2em;
  width: 1.2em;
  height: 1.2em;
  line-height: 1.3em;
  border-radius: 50%;
  background-color: #ec0101;
  color: #fff;
}

#footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  height: 50px;
  border-top: 1px solid #777;
  background-color: #0c0c0c;
}

#footer li {
  position: relative;

  div {
      padding-top 7px;
    i {
      display: block;
      margin:0 auto;
      width: 23px;
      height: 23px;
      background-size: 100% 100%;
    }
  }

  span {
  }
}

#footer .cart_num {
  display: block;
  text-align: center;
  font-size: 1em;
}

i.home {
  background: url('../assets/img/index.png') no-repeat center center;
}

i.cart {
  background: url('../assets/img/car.png') no-repeat center center;
}

i.user {
  background: url('../assets/img/user.png') no-repeat center center;
}

li.cur i.home {
  background: url('../assets/img/indexc.png') no-repeat center center;
}

li.cur i.cart {
  background: url('../assets/img/carc.png') no-repeat center center;
}

li.cur i.user {
  background: url('../assets/img/userc.png') no-repeat center center;
}

/* #footer .cur i.home {
    background-position:-28px 0;
}
#footer .cur i.class {
    background-position:-28px -24px;
}
#footer .cur i.cart {
    background-position:-28px -50px;
}
#footer .cur i.user {
    background-position:-28px -77px;
}
#footer i.home {
    background-position:0 0;
}
#footer i.class {
    background-position:0 -24px;
}
#footer i.cart {
    background-position:0 -50px;
}
#footer i.user {
    background-position:0 -77px;
} */
</style>
<script type="es6">
import "../assets/css/common.css";
export default {
  data() {
    return {
      quantity: 0,
      showQ: false,
      pList: [],
      token: ""
      // token:localStorage.getItem('token')
    };
  },
  props: ["cur", "q", "c"],
  components: {},
  watch: {
    q() {
      this.getQuantity();
    },
    c() {
      this.getQuantity();
    }
  },
  mounted() {
    if (window) {
      this.token = localStorage.getItem("token");
      this.getQuantity();
    }
  },
  methods: {
    getQuantity() {
      this.axios.get("account/shopping-cart?token=" + this.token).then(msg => {
        if (msg.data.res_infor.length > 0) {
          this.showQ = true;
          this.pList = msg.data.res_infor;
          let n = 0;
          for (let i = 0; i < this.pList.length; i++) {
            n += this.pList[i].ProQuantity;
          }
          this.quantity = n;
        } else {
          this.showQ = false;
          console.log(this.showQ);
        }
      });
    }
  }
};
</script>
