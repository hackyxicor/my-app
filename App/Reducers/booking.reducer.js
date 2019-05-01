import { SET_CITY, SET_CHECKIN_DATE, SET_CHECKOUT_DATE, SET_ROOMS } from "../Constants/action.constants";

const defaultState = {
    city: '',
    checkinDate: '',
    checkoutDate: '',
    rooms: [
        {
            adult: 2,
            child: 0
        }
    ]
}

export default function bookingReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.payload };
        case SET_CHECKIN_DATE:
            return { ...state, checkinDate: action.payload };
        case SET_CHECKOUT_DATE:
            return { ...state, checkoutDate: action.payload };
        case SET_ROOMS:
            return { ...state, rooms: action.payload };
        default:
            return state;
    }
};