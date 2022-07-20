import Vue from "vue";
import Vuex from "vuex";
import authModule from "./modules/auth/index.js";
import i18n from '../i18n'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    localeLang: i18n.locale
  },

  actions: {
    updateLocale(state, newLocale) {
      localStorage.setItem("lang", newLocale);
      i18n.locale = newLocale
      state.localeLang = newLocale
      document.documentElement.setAttribute('lang', newLocale)
    }
  },
  getters: {
    localeLang(state) {
      return state.localeLang
    }
  },
  modules: {
    auth: authModule,
  },
});

export default store;
