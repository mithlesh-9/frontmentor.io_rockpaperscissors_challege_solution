import { takeLatest, put , call, all} from 'redux-saga/effects';


import userTypes from './user-type';

import {
 selectUserSuccess,
 resetUserSuccess
} from './user-actions';


export function* chooseUser({payload}) {
    try {
        yield put(selectUserSuccess(payload))
    } catch(e) {
        console.log(e)
    }
}

export function* onChooseUserSuccess() {
  yield takeLatest(userTypes.select_shape,chooseUser);
}

export function* resetShape() {
    try {
        yield put(resetUserSuccess())
    } catch(e) {
        console.log(e)
    }
}

export function* onResetUserSuccess() {
    yield takeLatest(userTypes.reset_shape,resetShape);
}

export function* userSagas() {
    yield all([
    call(onChooseUserSuccess),
    call(onResetUserSuccess)
    ])
}