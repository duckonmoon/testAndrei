import {FETCH_RECOMMENDATIONS_SUCCESS} from "../actionTypes";
import initialState from "../initialState";

const recommendationReducer = (state = initialState.recommendations, action) => {
    switch (action.type) {
        case FETCH_RECOMMENDATIONS_SUCCESS:
            return {...state, items: action.payload};
        default:
            return state
    }
};

export default recommendationReducer;
