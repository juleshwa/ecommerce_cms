import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/createProduct',
    name: 'CreateProduct',
    component: () => import('../views/CreateProduct.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.name === from.name && to.name === 'Register' && to.name === 'Login') {
//     next()
//   } else {
//     if (localStorage.access_token) {
//       next()
//     } else {
//       '/'
//     }
//   }
// })

export default router;
