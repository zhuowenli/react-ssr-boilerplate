/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 15:42:07
 */

'use strict';

import { filter } from 'ramda';
import { typeToReducer, get } from 'app/utils';
import { REMOVE_MESSAGE, ADD_MESSAGE } from 'app/actions/types';

const getFlashId = get('payload.id');

const initialState = {
    messages: [],
};

export const flashReducers = typeToReducer({

    [ REMOVE_MESSAGE ]: (state, action) => ({
        ...state,
        messages: filter(
            flash => flash.id !== getFlashId(action),
            state.messages
        ),
    }),

    [ ADD_MESSAGE ]: (state, action) => ({
        ...state,
        messages: [ ...state.messages, action.payload ],
    }),

}, initialState);
