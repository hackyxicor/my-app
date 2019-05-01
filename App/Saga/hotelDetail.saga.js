import { put, takeLatest, all } from 'redux-saga/effects';
import { LOADING_HOTEL_DETAIL, SET_HOTEL_DETAIL, GET_HOTEL_DETAIL } from '../Constants/action.constants';

import Api from '../Api/index.api';

function* fetchHotelDetail() {
    yield put({ type: LOADING_HOTEL_DETAIL, payload: true });
    const result = yield Api.GetHotelDetail();
    yield put({ type: SET_HOTEL_DETAIL, payload: result.data })
}

export default function* () {
    yield takeLatest(GET_HOTEL_DETAIL, fetchHotelDetail)
}