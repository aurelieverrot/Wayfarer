// Something
import axios from 'axios';

const endpoint = "http://localhost:4000"

const login = (user) => {
    return axios.post(endpoint+'/api/v1/login',user);
}

const signup = (user) => {
    return axios.post(endpoint+'/api/v1/register',user);
}

export default {
    login,
    signup
}