<template>
  <b-navbar sticky toggleable="lg" >
    <b-navbar-brand href="#"
      ><img src="https://prexle.com/wp-content/themes/prexle/images/logo.svg" alt="" srcset=""
    /></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse class="" id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" exact>Home</b-nav-item>
        <b-nav-item to="/products">Products</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav  class="ml-0">
        <b-nav-item-dropdown right :text="user == null ? 'user' : user.fullname">
          <b-dropdown-item v-if="!isLoggedIn" to="/login">Login</b-dropdown-item>
          <b-dropdown-item v-if="!isLoggedIn" to="/register">Register</b-dropdown-item>
          <b-dropdown-item v-if="isLoggedIn" to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item v-if="isLoggedIn" @click="logout()">Logout</b-dropdown-item>
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
  mounted() {},
  name: "HeaderComponent",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    userInfo() {
      return this.$store.getters.userData;
    },
  },
  data: function () {
    const selectedLang = localStorage.getItem("lang") || "en";
    return {
      selectedLang: selectedLang,
      langList: [
        { displayName: "English", value: "en" },
        { displayName: "عربي", value: "ar" },
      ],
      user: null,
    };
  },
  methods: {
    changeLang(lang) {
      this.selectedLang = lang.value;
      localStorage.setItem("lang", lang.value);
    },
    logout() {
      this.$store.dispatch("logout");
      this.user = null;
    },
  },
  watch: {
    userInfo(newValue) {
      this.user = newValue;
    },
  },
};
</script>
<style lang="scss">
.navbar{

  background: linear-gradient(to right, #32325f 0%, #4989f5 100%);
  .navbar-toggler {
    border-color: white !important;
    .navbar-toggler-icon {
       filter: brightness(0) invert(1);
    }
}
}
.navbar-collapse{
  justify-content: space-between;
}
.nav-link.router-link-active {
  color: white !important;
}
.navbar-brand img {
  height: 40px;
  filter: brightness(0) invert(1);
}
</style>
