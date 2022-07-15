import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ProductsView from '../views/ProductsView.vue'
import UserProfile from '../views/UserProfile.vue'
import RegisterView from '../views/RegisterView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresUnauth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { requiresUnauth: true }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
// router.beforeEach(function (to, _, next) {
//   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//     next('/auth');
//   } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
//     next('/coaches');
//   } else {
//     next();
//   }
// });
const router = new VueRouter({
  routes
})

export default router
