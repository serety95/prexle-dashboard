export default {
    userData(state) {
        return state.userData;
    },
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        return !!state.token;
    },
    didAutoLogout(state) {
        return state.didAutoLogout;
    }
};