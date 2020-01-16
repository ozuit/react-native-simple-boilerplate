import { put, call, fork, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as loginApis from '../services/loginApis';
import { setUserInfo } from '../actions/loginActions';
import { setToken } from '../services/api';

export function* login(action) {
    try {
        const response = yield call(loginApis.login, action.params)
        action.onSuccess(response)
        setToken(response.token || '');
        yield put(setUserInfo(response.account))
    } catch (error) {
        action.onError(error)
    }
}

export function* watchLogin() {
    yield takeLatest(types.LOGIN, login)
}

export function* fetchUserInfo(action) {
    try {
        const response = yield call(loginApis.fetchUserInfo)
        action.onSuccess(response)
        yield put(setUserInfo(response))
    } catch (error) {
        action.onError(error)
    }
}

export function* watchFetchUserInfo() {
    yield takeLatest(types.FETCH_USER_INFO, fetchUserInfo)
}
