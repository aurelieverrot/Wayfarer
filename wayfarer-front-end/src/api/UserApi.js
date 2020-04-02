// Something
import axios from 'axios';

const endpoint = "http://localhost:3000"

const login = (user) => {
    return axios.post(endpoint+'/login',user);
}

const signup = (user) => {
    return axios.post(endpoint+'/register',user);
}

export default {
    login,
    signup
}