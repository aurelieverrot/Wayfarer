// Something
import axios from 'axios';

const endpoint = "http://localhost:4000"

const login = (user) => {
    return axios.post(endpoint+'/api/v1/login',user);
}

const signup = (user) => {
    return axios.post(endpoint+'/api/v1/register',user);
}

const show = (user) => {
    return axios.get(endpoint+'/api/v1/users/:id', user);
}

const update = (user) => {
    let request = axios.put(endpoint+'api/v1/user/:id', user);
    return request;
}

export default {
    login,
    signup,
    show,
    update
}