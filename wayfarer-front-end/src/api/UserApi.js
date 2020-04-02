// Something
import axios from 'axios';

const endpoint = "http://localhost:4000"

const login = (user) => {
    return axios.get(endpoint+'/users',user);
}

const signup = (user) => {
    return axios.post(endpoint+'/users',user);
}

export default {
    login,
    signup
}