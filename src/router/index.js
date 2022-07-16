import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ProductsView from '../views/ProductsView.vue'
import UserProfile from '../views/UserProfile.vue'
import RegisterView from '../views/RegisterView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import store from '../store/index';
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
  { path: '/:notFound(.*)', component: NotFoundView }
]

const router = new VueRouter({
  routes
})
router.beforeEach(function (to, _, next) {
  console.log(to,store.getters.isAuthenticated)
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: 'login' });
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next({ name: 'products' });
  } else {
    next();
  }
});
export default router
