/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 15:42:13
 */

'use strict';

import { PENDING, REJECTED, FULFILLED } from 'redux-promise-middleware';
import { typeToReducer, get } from 'app/utils';
import { API_FETCH } from 'app/actions/types';

const getBar = get('payload.bar');

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
        [ FULFILLED ]: (state, action) => ({
            ...initialState,
            data: getBar(action),
        }),
    },
}, initialState);
