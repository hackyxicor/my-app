import {
    SET_HOTELS_PRICE,
    LOADING_HOTELS_PRICE
} from "../Constants/action.constants";

const defaultState = {
    loading: false,
    pricing: [],
}

export default function pricingReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_HOTELS_PRICE:
            return { ...state, pricing: action.payload, loading: false };
        case LOADING_HOTELS_PRICE:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
};