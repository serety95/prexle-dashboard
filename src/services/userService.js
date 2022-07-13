
import API from "./API";

export default {

    login(data) {
        console.log(data)
        return API().post('/login', { email: data.email, password: data.password })
    }
}