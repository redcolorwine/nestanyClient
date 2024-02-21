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
    },
    addItemToCart(goodId, userId) {
        return instance.post(`/cart/add`, { goodId, userId }).then(response => {
            return response
        }).catch(err => {
            throw new Error(err.response.data.message)
        });
    },
    getCartItems(userId) {
        return instance.get(`/cart/${userId}`).then(response => {
            return response;
        }).catch(err => {
            throw new Error(err.response.data.message)
        });
    },
    deleteCartItem(cartId) {
        return instance.delete(`/cart/one/${cartId}`).then(response => {
            return response;
        }).catch(err => {
            throw new Error(err.response.data.message)
        });
    },
    updateItemCount(cartId, count) {
        return instance.patch(`/cart/count/${cartId}`, { count }).then(response => {
            return response;
        }).catch(err => {
            throw new Error(err.response.data.message)
        });
    },
    updateTotalPrice(cartId, total_price) {
        return instance.patch(`/cart/total-price/${cartId}`, { total_price }).then(response => {
            return response;
        }).catch(err => {
            throw new Error(err.response.data.message)
        });
    },
}

export const paymentAPI = {
    pay(amount) {
        return instance.post(`/payment`, { amount }).then(response => {
            return response.data;
        }).catch(err => {
            throw new Error(err.response.data.message)
        });
    }
}