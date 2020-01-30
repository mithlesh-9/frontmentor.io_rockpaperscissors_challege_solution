import { all, call } from 'redux-saga/effects';



import { scoreSagas } from './score/score-saga'
import { userSagas } from './user/user-sagas';

export default function* rootSaga() {
    yield all([call(scoreSagas),call(userSagas)]);
}