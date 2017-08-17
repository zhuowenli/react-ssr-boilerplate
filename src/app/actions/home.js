/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 16:43:31
 */

'use strict';

import { fetch } from '../utils/request';
import { FETCH_ARTICLES } from '../actions/types';

export const fetchArticles = (page = 1) => {
    return {
        type: FETCH_ARTICLES,
        payload: {
            promise: fetch('/api/articles', { page, pre_page: 20 }),
        },
    };
};
