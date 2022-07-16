let timer;
import userService from "@/services/userService";
export default {
  login(context, payload) {
    userService
      .login({
        email: payload.email,
        password: payload.password,
      })
      .then((res) => {
        const expiresIn = 3600 * 1000;
        const expirationDate = new Date().getTime() + expiresIn;
        const userToken = res.data.data.token;
        localStorage.setItem("token", userToken);
        localStorage.setItem("tokenExpiration", expirationDate);

        timer = setTimeout(function () {
          context.dispatch("autoLogout");
        }, expiresIn);

        userService.getUserByToken().then((res) => {
          context.commit("setUser", {
            token: userToken,
            userData: res.data.data,
          });
        });
      })
      .catch((err) => {
        const error = new Error(err.message || "Failed to authenticate. Check your login data.");
        throw error;
      });
  },
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },

  tryLogin(context) {
    const userToken = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const expiresIn = +tokenExpiration - new Date().getTime();
    if (expiresIn < 0) {
      return;
    }
    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    if (userToken) {
      userService.getUserByToken().then((res) => {
        context.commit("setUser", {
          token: userToken,
          userData: res.data.data,
        });
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userData: null,
    });
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
