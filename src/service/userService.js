import axios from 'axios'

export const getUser = function () {
    return axios.get('http://localhost:4000/employee');
}

export const getUserById = function (id) {
    return axios.get('http://localhost:4000/employee/' + id);
}

export const deleteUser = function (id) {
    return axios.delete('http://localhost:4000/employee/' + id);
}

export const updateUser = function (user) {
    return axios.put('http://localhost:4000/employee/' + user._id, user);
}

export const createUser = function (user) {
    return axios.post('http://localhost:4000/employee', user);
}


