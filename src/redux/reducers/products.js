import {
    APPLY_FILTER,
    CLEAR_FILTERS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
    LIKE_PRODUCT,
    RATE_PRODUCT
} from "../actionTypes";
import initialState from "../initialState";

const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.payload};
        case FETCH_PRODUCTS_ERROR:
            return {...state, error: "ERROR"};
        case APPLY_FILTER:
            const productFilters = [...state.productFilters];
            const found = productFilters.find((el) => el.name === action.payload.name);
            if (found === undefined) {
                productFilters.push(action.payload);
            } else {
                found.value = action.payload.value;
            }
            return {...state, productFilters: productFilters};
        case CLEAR_FILTERS:
            return {...state, productFilters: []};
        case LIKE_PRODUCT:
            const products = [...state.products];
            const foundProduct = products.find((el) => el.id === action.id);
            foundProduct.like = true;
            return {...state, products: products};
        case RATE_PRODUCT:
            const products1 = [...state.products];
            const foundProduct1 = products1.find((el) => el.id === action.id);
            foundProduct1.rating = action.rating;
            return {...state, products: products1};
        default:
            return state
    }
};

export default productReducer;

