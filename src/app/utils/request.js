/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-14 17:00:29
 */

'use strict';

import 'isomorphic-fetch';
import debug from 'debug';
const log = debug('utils.request');

export default async(endpoint, options) => {
    log('requesting', endpoint);
    const response = await (global || window).fetch(endpoint, options);
    log('respsonse', { endpoint, status: response.status });

    if (response.status >= 400) {
        throw new Error(`Response error: ${endpoint}`);
    }

    if (Number(response.headers.get('content-length')) <= 0) {
        return null;
    }

    const contentType = response.headers.get('content-type');

    return ~contentType.indexOf('application/json')
        ? response.json()
        : response.text();
};
