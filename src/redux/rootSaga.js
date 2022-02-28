import { all , call } from 'redux-saga/effects'
import { cartSaga } from './cart/cartSagas'

import {shopSaga} from './shop/shopSagas'

import { userSaga } from './user/userSagas'

export default function* rootSaga(){
    yield all([
        call(shopSaga),
        call(userSaga),
        call(cartSaga)
    ])
}