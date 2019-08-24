import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const addUser = payload => api.post(`/user`, payload)
export const updateUser = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUser = id => api.delete(`/user/${id}`)
export const getUsers = () => api.get(`/users`)
export const getUserById = id => api.get(`/user/${id}`)
export const getFilmTitles = () => api.get(`/films`)

const apis = {
    addUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
    getFilmTitles,
}

export default apis
