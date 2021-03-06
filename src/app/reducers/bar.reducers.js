/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 15:42:13
 */

'use strict';

import typeToReducer from 'type-to-reducer';
import { PENDING, REJECTED, FULFILLED } from 'redux-promise-middleware';
import { API_FETCH } from '../actions/types';

const initialState = {
    isPending: false,
    error: false,
    data: [],
};

export const barReducers = typeToReducer({
    [ API_FETCH ]: {
        [ PENDING ]: () => ({
            ...initialState,
            isPending: true,
        }),
        [ REJECTED ]: (state, action) => ({
            ...initialState,
            error: action.payload,
        }),
        [ FULFILLED ]: (state, { payload }) => ({
            ...initialState,
            data: payload.bar,
        }),
    },
}, initialState);
