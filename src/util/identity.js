import { backendUrl } from './constants'

import axios from 'axios'
import Cookies from 'js-cookie'

export const getIdentity = () => {
    return axios.get(`${backendUrl}/api/identity/`)
};

export const setUserCookie = () => {
    if (Cookies.get('user') === undefined) {
        getIdentity().then(res => {
            return res.data
        })
            .then(res => {
                if (res.error) {
                    console.log(res.error)
                }
                Cookies.set('user', res, { expires: 1000000000000 });
                axios.defaults.headers.common['user'] = res.uuid;
            })
            .catch(error => {
                console.log(error)
            })
    } else {
        console.log(JSON.parse(Cookies.get('user')).uuid);
        axios.defaults.headers.common['user'] = JSON.parse(Cookies.get('user')).uuid;
    }
};