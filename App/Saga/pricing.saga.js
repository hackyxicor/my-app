import { put, takeLatest, all } from 'redux-saga/effects';
import { LOADING_HOTELS_PRICE, SET_HOTELS_PRICE, GET_HOTELS_PRICE } from '../Constants/action.constants';

import Api from '../Api/index.api';

function* fetchHotels() {
    yield put({ type: LOADING_HOTELS_PRICE, payload: true });
    const result = yield Api.GetHotelPricing();
    yield put({ type: SET_HOTELS_PRICE, payload: result.data })
}

export default function* () {
    yield takeLatest(GET_HOTELS_PRICE, fetchHotels)
}