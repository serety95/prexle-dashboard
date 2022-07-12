<template>
  <b-navbar sticky toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"
      ><img src="https://prexle.com/wp-content/themes/prexle/images/logo.svg" alt="" srcset=""
    /></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse class="" id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" exact>Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/products">Products</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-0">
        <b-nav-item-dropdown :text="user == null ? 'user' : user">
          <b-dropdown-item to="/login">Login</b-dropdown-item>
          <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right :text="selectedLang">
          <b-dropdown-item
            :active="selectedLang == lang.value"
            v-for="lang in langList"
            v-bind:Key="lang.value"
            v-bind:value="lang.value"
            @click="changeLang(lang)"
            >{{ lang.displayName }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  mounted() {
    console.log(`the component is now mounted.`);
    console.log(this.user);
  },
  name: "HeaderComponent",
  data: () => ({
    selectedLang: "en",
    langList: [
      { displayName: "English", value: "en" },
      { displayName: "Arabic", value: "ar" },
    ],
    user: null,
  }),
  methods: {
    changeLang(lang) {
      this.selectedLang = lang.value;
    },
    logout() {
      this.user = null;
    },
  },
};
</script>
<style lang="scss">
.nav-link.router-link-active {
  color: white !important;
}
.navbar-brand img {
  height: 40px;
  filter: brightness(0) invert(1);
}
</style>
