import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import(/* webpackChunkName: "r333" */'../pages/index')
const Class = () => import(/* webpackChunkName: "r2" */'../pages/class')
const Cart = () => import(/* webpackChunkName: "r3" */'../pages/cart')
const UserCenter = () => import(/* webpackChunkName: "r4" */'../pages/userCenter')
const ProductDetail = () => import(/* webpackChunkName: "r5" */'../pages/productDetail')
const AddressList = () => import(/* webpackChunkName: "r6" */'../pages/addressList')
const VoucherList = () => import(/* webpackChunkName: "r7" */'../pages/voucherList')
const OrderList = () => import(/* webpackChunkName: "r7" */'../pages/orderList')
const AddressDetail = () => import(/* webpackChunkName: "r8" */'../pages/addressDetail')
const VoucherDetail = () => import(/* webpackChunkName: "r9" */'../pages/voucherDetail')
const OrderDetail = () => import(/* webpackChunkName: "r10" */'../pages/orderDetail')
const Pay = () => import(/* webpackChunkName: "r11" */'../pages/pay')
const PayFinish = () => import(/* webpackChunkName: "r12" */'../pages/payFinish')
// const Test = () => import(/* webpackChunkName: "r13" */'../pages/test')

Vue.use(Router)

var route = new Router({
  routes: [
    {path: '/', name: 'Index', component: Index, meta: {title: '产品中心'}},
    {path: '/index', name: 'Index', component: Index, meta: {title: '产品中心'}},
    {path: '/class', name: 'Class', component: Class, meta: {title: '产品分类'}},
    {path: '/cart', name: 'Cart', component: Cart, meta: {title: '购物车'}},
    {path: '/userCenter', name: 'UserCenter', component: UserCenter, meta: {title: '个人中心'}},
    {path: '/productDetail/:id',
      name: 'ProductDetail',
      props: true,
      component: ProductDetail,
      meta: {title: '产品详情'}},
    {path: '/addressList', name: 'AddressList', component: AddressList, meta: {title: '地址列表'}},
    {path: '/voucherList', name: 'VoucherList', component: VoucherList, meta: {title: '发票列表'}},
    {path: '/orderList', name: 'IndOrderListex', component: OrderList, meta: {title: '订单列表'}},
    {path: '/addressDetail', name: 'AddressDetail', component: AddressDetail, meta: {title: '地址详情'}},
    {path: '/voucherDetail', name: 'VoucherDetail', component: VoucherDetail, meta: {title: '发票详情'}},
    {path: '/orderDetail', name: 'OrderDetail', component: OrderDetail, meta: {title: '订单详情'}},
    {path: '/pay', name: 'Pay', component: Pay, meta: {title: '付款'}},
    {path: '/payFinish', name: 'PayFinish', component: PayFinish, meta: {title: '线下付款'}}
    // {path: '/test', name: 'Test', component: Test}
  ]
})

route.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default route
