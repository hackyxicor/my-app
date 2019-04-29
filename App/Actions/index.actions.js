import { GET_HOTELS, GET_HOTEL_DETAIL, GET_HOTELS_PRICE } from "../Constants/action.constants";

export const GetHotelsAction = () => ({
    type: GET_HOTELS,
});

export const GetHotelsPricingAction = () => ({
    type: GET_HOTELS_PRICE
});

export const GetHotelDetailAction = () => ({
    type: GET_HOTEL_DETAIL
})