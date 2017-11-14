import Vue from 'vue';
import Router from 'vue-router';
import store from './store/index.js';
import App from './App.vue';
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'

// プラグインをインストール
Vue.use(Router);

// ルートを定義する
const routes = [
  { path: '/', component: Products },
  { path: '/cart', component: Cart },
];

// ルーターを登録する
const router = new Router({
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});