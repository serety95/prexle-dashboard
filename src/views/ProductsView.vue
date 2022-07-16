<template>
    <section id="productsPage">
      <h1>welcome to products</h1>
      <h3 v-if="!isLoggedIn">please login in to view products</h3>
      <button v-if="!isLoggedIn" @click="login">Login</button>
      <div v-if="isLoggedIn" class="container">
        <div class="row">
          <transition name="router-anim"  enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight" mode="out-in">
            <router-view class="col-12"></router-view>
          </transition>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "ProductsView",

  props: {
    cardsList: Array,
  },
  data: () => ({}),
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  mounted() {},
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style scoped lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
#productsPage{
  overflow: hidden;
}
</style>
