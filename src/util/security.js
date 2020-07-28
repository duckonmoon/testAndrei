import { backendUrl } from './constants'

import axios from 'axios'

export const getAllProducts = () => {
    return axios.get(`${backendUrl}/api/product/all/`)
};

export const getAllFilters = () => {
    return axios.get(`${backendUrl}/api/filter/`)
};

export const postLike = (id) => {
    return axios.post(`${backendUrl}/api/like/${id}`)
};

export const postRating = (id, rating) => {
    return axios.post(`${backendUrl}/api/rating/${id}/${rating}`)
};

export const getRecommendations = () => {
    return axios.get(`${backendUrl}/api/recommendation/`)
};