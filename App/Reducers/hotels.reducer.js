import {
    SET_HOTELS,
    LOADING_HOTELS
} from "../Constants/action.constants";

const defaultState = {
    loading: false,
    hotels: [],
}

export default function hotelsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_HOTELS:
            return { ...state, hotels: action.payload, loading: false };
        case LOADING_HOTELS:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
};