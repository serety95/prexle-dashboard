<template>
  <div class="products">
    <h1>welcome to products</h1>
    <h3 v-if="!isLoggedIn">please login in to view products</h3>
    <button v-if="!isLoggedIn" @click="login">Login</button>
    <div v-if="isLoggedIn" class="container">
      <div class="row">
        <router-view class="col-12"></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductsView",

  props: {
    cardsList: Array,
  },
  data: () => ({

  }),
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  mounted() {

  },
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style scoped lang="scss">

</style>
