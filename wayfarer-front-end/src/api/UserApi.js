// Something
import axios from 'axios';

const endpoint = "http://localhost:4000"

const login = (user) => {
    return axios.post(endpoint+'/login',user);
}

const signup = (user) => {
    return axios.post(endpoint+'/login',user);
}

export default {
    login,
    signup
}