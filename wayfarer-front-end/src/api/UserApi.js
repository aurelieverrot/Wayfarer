// Something
import axios from 'axios';

const endpoint = "http://localhost:4000"

const login = (user) => {
    return axios.post(endpoint+'/api/v1/login',user);
}

const signup = (user) => {
    return axios.post(endpoint+'/api/v1/register',user);
}

const show = (id) => {
    return axios.get(endpoint+'/api/v1/users/'+id);
}

const update = (user) => {
    let request = axios.put(endpoint+'/api/v1/users/'+user._id, user);
    return request;
}

// user post index
// needs backend api post route
const postIndex = () => {
    let request = axios.get(endpoint+'/api/v1/posts/')
    return request;
}

export default {
    login,
    signup,
    show,
    update,
    postIndex
}