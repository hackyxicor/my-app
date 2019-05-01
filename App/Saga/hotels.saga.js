import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_HOTELS, LOADING_HOTELS, SET_HOTELS } from '../Constants/action.constants';

import Api from '../Api/index.api';
import { GetHotelsPricingAction } from '../Actions/index.actions';

function* fetchHotels() {
    yield put({ type: LOADING_HOTELS, payload: true });
    const result = yield Api.GetHotels();
    yield put({ type: SET_HOTELS, payload: result.data })
    yield put(GetHotelsPricingAction())
}

export default function* () {
    yield takeLatest(GET_HOTELS, fetchHotels)
}