import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
Vue.use(Router)

const routes = [
  {path: '/', name: 'Index', component: Index},
  {path: '/index', name: 'Index', component: Index},
  {path: '/class', name: 'Class', component: () => import('../pages/class')},
  {path: '/cart', name: 'Cart', component: () => import('../pages/cart')},
  {path: '/userCenter', name: 'UserCenter', component: () => import('../pages/userCenter')},
  {path: '/productDetail/:id',
    name: 'ProductDetail',
    props: true,
    component: () => import('../pages/productDetail')},
  {path: '/addressList', name: 'AddressList', component: () => import('../pages/addressList')},
  {path: '/voucherList', name: 'VoucherList', component: () => import('../pages/voucherList')},
  {path: '/orderList', name: 'IndOrderListex', component: () => import('../pages/orderList')},
  {path: '/addressDetail', name: 'AddressDetail', component: () => import('../pages/addressDetail')},
  {path: '/voucherDetail', name: 'VoucherDetail', component: () => import('../pages/voucherDetail')},
  {path: '/orderDetail', name: 'OrderDetail', component: () => import('../pages/orderDetail')},
  {path: '/pay', name: 'Pay', component: () => import('../pages/pay')},
  {path: '/payFinish', name: 'PayFinish', component: () => import('../pages/payFinish')}
  // {path: '/test', name: 'Test', component: Test}
]
/* let route = new Router({
  routes: [
    {path: '/', name: 'Index', component: () => import(/!* webpackChunkName: "r333" *!/'../pages/index'), meta: {title: '产品中心'}},
    {path: '/index', name: 'Index', component: import(/!* webpackChunkName: "r333" *!/'../pages/index'), meta: {title: '产品中心'}},
    {path: '/class', name: 'Class', component: () => import(/!* webpackChunkName: "r2" *!/'../pages/class'), meta: {title: '产品分类'}},
    {path: '/cart', name: 'Cart', component: () => import(/!* webpackChunkName: "r3" *!/'../pages/cart'), meta: {title: '购物车'}},
    {path: '/userCenter', name: 'UserCenter', component: () => import(/!* webpackChunkName: "r4" *!/'../pages/userCenter'), meta: {title: '个人中心'}},
    {path: '/productDetail/:id',
      name: 'ProductDetail',
      props: true,
      component: () => import(/!* webpackChunkName: "r5" *!/'../pages/productDetail'),
      meta: {title: '产品详情'}},
    {path: '/addressList', name: 'AddressList', component: () => import(/!* webpackChunkName: "r6" *!/'../pages/addressList'), meta: {title: '地址列表'}},
    {path: '/voucherList', name: 'VoucherList', component: () => import(/!* webpackChunkName: "r7" *!/'../pages/voucherList'), meta: {title: '发票列表'}},
    {path: '/orderList', name: 'IndOrderListex', component: () => import(/!* webpackChunkName: "r7" *!/'../pages/orderList'), meta: {title: '订单列表'}},
    {path: '/addressDetail', name: 'AddressDetail', component: () => import(/!* webpackChunkName: "r8" *!/'../pages/addressDetail'), meta: {title: '地址详情'}},
    {path: '/voucherDetail', name: 'VoucherDetail', component: () => import(/!* webpackChunkName: "r9" *!/'../pages/voucherDetail'), meta: {title: '发票详情'}},
    {path: '/orderDetail', name: 'OrderDetail', component: () => import(/!* webpackChunkName: "r10" *!/'../pages/orderDetail'), meta: {title: '订单详情'}},
    {path: '/pay', name: 'Pay', component: () => import(/!* webpackChunkName: "r11" *!/'../pages/pay'), meta: {title: '付款'}},
    {path: '/payFinish', name: 'PayFinish', component: () => import(/!* webpackChunkName: "r12" *!/'../pages/payFinish'), meta: {title: '线下付款'}}
    // {path: '/test', name: 'Test', component: Test}
  ]
}) */
export default new Router({
  routes
})
