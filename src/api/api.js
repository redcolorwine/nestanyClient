import axios from "axios";
const token = localStorage.getItem('token');

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
    headers: { 'Authorization': `Bearer ${token}` }
    //скорее всего требуется добавить bearer и токен
})


export const authAPI = {
    login(email, password) {
        return instance.post('auth/login', { email, password }).then(response => {
            return response
        }).catch(err => {
            throw new Error(err.response.data.message)
        });
    },
    register(email, password) {

        return instance.post('auth/register', { email, password })
            .then(response => {
                console.log(response)

                return response
            }).catch(err => {
                throw new Error(err.response.data.message)
            });
    },

}

export const userAPI = {
    getCart(userId) {
        return instance.get(`cart/${userId}`).then(response => {
            console.log(response)

            return response
        }).catch(err => {
            throw new Error(err.response.data.message)
        });
    }
}

export const goodsAPI = {
    getGoods(limit, offset) {
        return instance.get(`goods?limit=${limit}&offset=${offset}`).then(response => {
            return response;
        }).catch(err => {
            throw new Error(err.response.data.message)
        });
    },
    getGoodById(id) {
        return instance.get(`goods/find/${id}`).then(response => {
            return response;
        }).catch(err => {
            throw new Error(err.response.data.message)
        });
    }
}