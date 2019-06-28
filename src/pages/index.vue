<template>
  <div>
    <div class="tab">
      <ly-tab v-model="selectedId" :items="items" :options="options" @change="changeType"></ly-tab>
    </div>
    <div>
      <div class="loading" v-show="pList.length == 0">加载产品中...</div>
      <ul class="p_list" v-show="pList.length > 0">
        <li v-for="p in pList">
          <div class="p_item" @click="goDetail(p)">
            <div class="left">
              <img class="item-pic" v-lazy="img_path+p.ProImages[0]">
            </div>
            <div class="right">
              <div class="top">保育机器人2.0</div>
              <div class="mid">
                <span>人工智能</span>
                <span>人工智能</span>
                <span>人工智能</span>
                <span>人工智能</span>
              </div>
              <div class="bottom">
                <div class="price">￥4299</div>
                <div class="cart" @click.stop="addCart"></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-mask" v-show="showMask">
      <div class="cont">
        <div class="list">
          <div class="item">
            <div class="title">服务选项</div>
            <div class="inputbox">
              <span class="radio" @click="add200 = !add200">
                <span v-show="add200"></span>
              </span>
              <span>+200元负责安装</span>
            </div>
          </div>
          <div class="item">
            <div class="title">功能选择</div>
            <div class="inputbox">
              <span class="radio" @click="add1000 = !add1000">
                <span v-show="add1000"></span>
              </span>
              <span>+1000元智能盘点</span>
            </div>
          </div>
        </div>
        <div class="btnbox">
          <div class="btn" @click="addTrue">确定</div>
          <div class="btn" @click="addFalse">取消</div>
        </div>
      </div>
    </div>
    <Footer :cur="cur"></Footer>
  </div>
</template>

<script type="es6">
import Footer from "../components/footer";

export default {
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "全部产品1" },
        { label: "全部产品2" },
        { label: "全部产品3" },
        { label: "全部产品4" },
        { label: "全部产品5" }
      ],
      options: {
        activeColor: "#ef8300",
        lineWidth: 0
      },
      cur: "index",
      showMask: false,
      add200: false,
      add1000: false,
      product: null,
      img_path: "http://znswsse.com:8031/"
    };
  },
  metaInfo: {
    title: "产品中心"
  },
  components: {
    Footer
  },
  computed: {
    pList() {
      return this.$store.state.pList;
    }
  },
  mounted() {
    // let token = window.location.search.substring(7);
    let token = "59f1c98d4d1df386f15032253edd1f6a";
    console.log(token);
    if (token) {
      localStorage.setItem("token", token);
    }
    if (this.pList && this.pList.length < 1) {
      this.getPList();
    }
  },
  created() {},
  asyncData({ store }) {
    return store.dispatch("getRes");
  },
  methods: {
    getPList() {
      this.$emit("loadShow", true);
      this.axios
        .get("/product")
        .then(msg => {
          let list = msg.data.res_infor;
          this.$store.commit("getList", list);
        })
        .catch(err => {
          this.$emit("loadErrShow", true);
        });
    },
    goDetail(p) {
      this.$router.push("/productDetail/" + p.ProNo);
    },
    addCart() {
      this.showMask = true;
    },
    addTrue() {
      this.showMask = false;
    },
    addFalse() {
      this.showMask = false;
    },
    changeType(item, index) {
      console.log(item);
    }
  }
};
</script>

<style lang="stylus" scoped>
.loading {
  text-align: center;
  padding-top: 200px;
  font-size: 14px;
}

.index-mask {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .cont {
    width: 80%;
    background-color: #15161a;

    .item {
      border-bottom: 1px solid #1c1d20;
      text-align: center;
      padding: 10px 0;

      .title {
        color: #bbb;
        font-size: 16px;
        line-height: 30px;
      }

      .inputbox {
        display: flex;
        justify-content: center;
        padding: 5px 0;

        .radio {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          margin-right: 20px;
          border: 1px solid #f34719;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;

          span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: #f34719;
          }
        }
      }
    }

    .btnbox {
      display: flex;
      height: 60px;

      .btn {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: #bbb;
      }

      .btn:first-child {
        border-right: 1px solid #1c1d20;
      }
    }
  }
}

/* 产品列表 */
.p_list {
  padding-top: 50px;
}

.p_list li {
  padding: 0 10px;
}

.p_item {
  margin-bottom: 5px;
  height: 130px;
  border-radius: 5px;
  background-color: #1c1d20;
  display: flex;
}

.p_list .left {
  width: 30%;
  box-sizing: border-box;
  border-right: 1px solid #15161a;
}

.p_list .left img {
  width: 100%;
  height: 100%;
}

.p_list .right {
  width: 70%;
  box-sizing: border-box;
  padding-left: 20px;
  position: relative;
}

.p_list .right .top {
  font-size: 15px;
  color: #ef8300;
  margin-top: 10px;
  margin-bottom: 5px;
}

.p_list .right .mid {
  font-size: 12px;
  color: #bbb;
}

.p_list .right .bottom {
  font-size: 15px;
  color: #f34719;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  padding-left: 20px;
}

.p_list .right .bottom .cart {
  position: absolute;
  right: 20px;
  bottom: 0;
  width: 28px;
  height: 28px;
  background: url('../assets/img/indexcart.png');
  background-size: 100%;
}

.tab {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9;
}
</style>


