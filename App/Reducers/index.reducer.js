import { combineReducers } from 'redux';
import hotels from './hotels.reducer';
import pricing from './pricing.reducer';
import hotelDetail from './hotelDetail.reducer';
import booking from './booking.reducer';

const rootReducer = combineReducers({
    hotelsStore: hotels,
    pricingStore: pricing,
    hotelDetailStore:  hotelDetail,
    bookingStore: booking,
});

export default rootReducer;
