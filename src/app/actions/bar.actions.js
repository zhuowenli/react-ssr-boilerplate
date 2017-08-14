/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:52:01
 */

'use strict';

import fetch from '../utils/request';
import { API_FETCH } from 'app/actions/types';

export const apiFetch = () => ({
    type: API_FETCH,
    payload: {
        promise: fetch('/api/bar'),
    },
});
