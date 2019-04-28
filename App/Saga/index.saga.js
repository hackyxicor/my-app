import { put, takeLatest, all } from 'redux-saga/effects';
import hotelsWatcher from './hotels.saga';
import pricingWatcher from './pricing.saga';
import hotelDetailWatcher from './hotelDetail.saga';

export default function* rootSaga() {
    yield all([
        hotelsWatcher(),
        pricingWatcher(),
        hotelDetailWatcher()
    ]);
}