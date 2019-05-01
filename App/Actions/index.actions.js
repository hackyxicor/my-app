import {
    GET_HOTELS,
    GET_HOTEL_DETAIL,
    GET_HOTELS_PRICE,
    SET_CITY,
    SET_CHECKIN_DATE,
    SET_CHECKOUT_DATE,
    SET_ROOMS
} from "../Constants/action.constants";

export const GetHotelsAction = () => ({
    type: GET_HOTELS,
});

export const GetHotelsPricingAction = () => ({
    type: GET_HOTELS_PRICE
});

export const GetHotelDetailAction = () => ({
    type: GET_HOTEL_DETAIL
})

export const SetCity = (payload) => ({
    type: SET_CITY,
    payload
})

export const SetCheckinDate = (payload) => ({
    type: SET_CHECKIN_DATE,
    payload
})

export const SetCheckoutDate = (payload) => ({
    type: SET_CHECKOUT_DATE,
    payload
})

export const SetRooms = (payload) => ({
    type: SET_ROOMS,
    payload
})