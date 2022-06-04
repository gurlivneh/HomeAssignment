const axios = require('axios').default;
const BASE_URL = `https://api.punkapi.com/v2/beers`


const _request = (type, method, data) => {
    // console.log('type', type, 'method', method, 'data', data)
    return new Promise((resolve, reject) => {

        if (method === 'GET') {
            axios.get(BASE_URL + type)
                .then((response) => {
                    console.log('res GET', response);
                    resolve(response.data)
                })
                .catch((error) => {
                    console.log('err get', error);
                    resolve(error)
                })
        }

        if (method === 'POST') {
            axios.post(BASE_URL + type, data)  
                .then((response) => {
                    console.log('res POST', response.data);
                    resolve(response.data)

                })
                .catch((error) => {
                    console.log('err post', error);
                })
        }
    })
} 

export const searchBeersAndFood = (pageNum, foodMatch) => {
    return _request(`?page=${pageNum}&per_page=6&food=${foodMatch}`, 'GET')

}
// export const addFavorite = (data) => {
//     return _request(`add`, 'POST', data)

// }

// export const removeFavorite = (data) => {
//     return _request(`remove`, 'POST', data)

// } 

// export const login = (data) => {
//     return _request(`login`, 'POST', data)

// }

// export const register = (data) => {
//     return _request(`register`, 'POST', data)

// }








