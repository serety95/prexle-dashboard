import axios from 'axios'

const lang = localStorage.getItem('lang') || 'en';
export default (url = "https://fc-ecommerce-test.herokuapp.com") => {
    return axios.create({
        baseURL: url,
        headers: {
            "Accept-Language": lang,
            'Content-Type': 'application/json',
        }
    })
}