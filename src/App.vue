<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <transition
      name="route"
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutUp"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace("/products");
      }
    },
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap');
html:lang(ar) * {
font-family: 'Cairo', sans-serif !important;
letter-spacing: 0px !important;
  .form-group {
    text-align: end !important;
  }

}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.nav-link {
  color: white !important;
  &.router-link-exact-active {
    font-weight: 700;
  }
}
.dropdown-item.router-link-exact-active {
  background-color: #32325f;
  color: white;
  font-weight: 700;
}
.dropdown-item.active {
  background-color: #32325f !important;
  color: white;
  font-weight: 700;
}
.page-title {
  background: linear-gradient(to right, #32325f 0%, #4989f5 100%);
  border-radius: 15px;
  padding: 15px;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 25px;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 95, 0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(50, 50, 95, 0.4);
  }
  h2 {
    letter-spacing: 3px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
  }
}
.btn-outline-primary {
  &:disabled {
    cursor: not-allowed;
  }
  font-weight: 700 !important;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: capitalize;
  border-color: #6698ff !important;
  color: white !important;
  &:hover {
    background-color: #6698ff !important;
  }
  &:active {
    outline: none !important;
  }
}
.form-card {
  padding: 30px 20px;
  background-color: #32325f !important;
  border-radius: 15px !important;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(50, 50, 95, 0.4) !important;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(50, 50, 95, 0.4) !important;
  }
  color: white;
  .form-group {
    text-align: start !important;
    label {
      color: white !important;
      font-weight: 700 !important;
      text-transform: capitalize !important;
    }
    small {
      padding-right: 5px !important;
      color: rgb(244, 234, 253) !important;
    }
  }
}
</style>
