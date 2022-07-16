
import API from "./API";

export default {
    getAllProducts() {
        return API().get('/')
    },
    login(data) {
        return API().post('/login', { email: data.email, password: data.password })
    }
}