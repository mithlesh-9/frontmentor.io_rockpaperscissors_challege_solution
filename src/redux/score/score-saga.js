import { takeLatest, put, all, call} from 'redux-saga/effects';

import scoreActionTypes from './score-type';

import {
    incrementSuccess,
    decrementSuccess
} from './score-actions';


export function* increment() {
    try {
        yield put(incrementSuccess())
    } catch(e) {
        console.log(e)
    }
}

export function* onIncrement() {
    yield takeLatest(scoreActionTypes.INCREMENT,increment)
}


export function* decrement() {
    try {
        yield put(decrementSuccess())
    } catch(e) {
        console.log(e)
    }
}

export function* onDecrement() {
    yield takeLatest(scoreActionTypes.DECREMENT,decrement)
}



export function* scoreSagas() {
    yield all([
        call(onIncrement),
        call(onDecrement)
    ]);
}