import { FETCH_FILTERS_SUCCESS, FETCH_FILTERS_ERROR} from "../actionTypes";
import initialState from "../initialState";

const filterReducer = (state = initialState.filters, action) => {
    switch (action.type) {
        case FETCH_FILTERS_SUCCESS:
            return {...state, filters: action.payload};
        case FETCH_FILTERS_ERROR:
            return {...state, error: "ERROR"};
        default:
            return state
    }
};

export default filterReducer;
