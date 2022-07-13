import axios from 'axios'


export default (url ="https://fc-ecommerce-test.herokuapp.com/")=>{
    return axios.create({
        baseURL:url
    })
}