<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <transition name="route" enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutUp" mode="out-in">
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
        this.$router.replace("/coaches");
      }
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #058f88;
      font-weight: 700;
    }
  }
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
