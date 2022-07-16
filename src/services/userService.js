
import API from "./API";
import jwt_decode from "jwt-decode";
export default {

    login(data) {
        return API().post('/login', { email: data.email, password: data.password })
    },
    setToken(token) {
        localStorage.setItem("token", token)
        var decoded = jwt_decode(token);
        console.log(decoded);

    },
    getUserByToken() {
        let token = localStorage.getItem("token")
        return API().get('/me/profile', { headers: { 'x-auth-token': token } })
    },
    registerUser(user){
        console.log(user)
        return API().post('/signup',user)
    }
}