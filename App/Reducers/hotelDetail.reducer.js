import {
    SET_HOTEL_DETAIL,
    LOADING_HOTEL_DETAIL
} from "../Constants/action.constants";

const defaultState = {
    loading: false,
    hotelDetail: {},
}

export default function hotelDetailReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_HOTEL_DETAIL:
            return { ...state, hotelDetail: action.payload, loading: false };
        case LOADING_HOTEL_DETAIL:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
};