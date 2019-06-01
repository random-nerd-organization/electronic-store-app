import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category1',
      name: 'products',
      component: () => import('./views/Products.vue')
    },
    {
      path: '/category2',
      name: 'products',
      component: () => import('./views/Products.vue')
    },
    {
      path: '/category3',
      name: 'products',
      component: () => import('./views/Products.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('./views/Checkout.vue')
    }
  ]
});
