import { takeLatest , put , call , all } from 'redux-saga/effects'
import userActionTypes from '../user/userTypes'
import { clearCart } from './cartActions'

export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onClearCart(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}

export function* cartSaga(){
    yield all([call(onClearCart)])
}