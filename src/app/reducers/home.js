/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 15:53:01
 */

'use strict';

import typeToReducer from 'type-to-reducer';
import { PENDING, REJECTED, FULFILLED } from 'redux-promise-middleware';
import { FETCH_ARTICLES } from '../actions/types';

const initialState = {
    loading: false,
    data: {},
};

export default typeToReducer({
    [ FETCH_ARTICLES ]: {
        [PENDING]: () => ({
            ...initialState,
            loading: true,
        }),
        [REJECTED]: (state, { payload }) => ({
            ...initialState,
            error: payload,
        }),
        [FULFILLED]: (state, action) => {
            return {
                ...initialState,
                data: action.payload,
            };
        },
    },
}, initialState);
