import {
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_FILTERS_ERROR,
    FETCH_FILTERS_PENDING,
    FETCH_FILTERS_SUCCESS,
    APPLY_FILTER,
    CLEAR_FILTERS,
    LIKE_PRODUCT,
    RATE_PRODUCT,
    FETCH_RECOMMENDATIONS_PENDING,
    FETCH_RECOMMENDATIONS_SUCCESS,
    FETCH_RECOMMENDATIONS_ERROR
} from "./actionTypes";
import {getAllProducts, getAllFilters, postLike, postRating, getRecommendations} from "../util/security"

export const fetchProductsPending = () => {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
};

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
};

export const fetchProductsError = (error) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
};

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsPending());
        getAllProducts()
            .then(res => {
                return res.data
            })
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchProductsSuccess(res));
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            })
    }
};


export const fetchFiltersPending = () => {
    return {
        type: FETCH_FILTERS_PENDING
    }
};

export const fetchFiltersSuccess = (filters) => {
    return {
        type: FETCH_FILTERS_SUCCESS,
        payload: filters
    }
};

export const fetchFiltersError = (error) => {
    return {
        type: FETCH_FILTERS_ERROR,
        error: error
    }
};


export const fetchFilters = () => {
    return dispatch => {
        dispatch(fetchFiltersPending());
        getAllFilters()
            .then(res => {
                return res.data
            })
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchFiltersSuccess(res));
            })
            .catch(error => {
                dispatch(fetchFiltersError(error));
            })
    }
};

export const applyFilter = (name, value) => {
    return dispatch => {
        dispatch({
            type: APPLY_FILTER,
            payload: {name: name, value: value}
        })
    }
};

export const clearFilters = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_FILTERS
        })
    }
};

export const likeProduct = (id) => {
    return dispatch => {
        console.log(id);
        dispatch({
            type: LIKE_PRODUCT,
            id: id
        });
        postLike(id)
            .then(res => {
                return res.data
            })
            .then(res => {
                if (res.error) {
                    console.log(res.error)
                }
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
};

export const rateProduct = (id, rating) => {
    return dispatch => {
        console.log(id + " " + rating);
        dispatch({
            type: RATE_PRODUCT,
            id: id,
            rating: rating
        });
        postRating(id, rating).then(res => {
            return res.data
        })
            .then(res => {
                if (res.error) {
                    console.log(res.error)
                }
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
};


export const fetchRecommendationsPending = () => {
    return {
        type: FETCH_RECOMMENDATIONS_PENDING
    }
};

export const fetchRecommendationsSuccess = (filters) => {
    return {
        type: FETCH_RECOMMENDATIONS_SUCCESS,
        payload: filters
    }
};

export const fetchRecommendationsError = (error) => {
    return {
        type: FETCH_RECOMMENDATIONS_ERROR,
        error: error
    }
};


export const fetchRecommendations = () => {
    return dispatch => {
        dispatch(fetchRecommendationsPending());
        getRecommendations()
            .then(res => {
                return res.data
            })
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchRecommendationsSuccess(res));
            })
            .catch(error => {
                dispatch(fetchRecommendationsError(error));
            })
    }
};


