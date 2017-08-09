/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-09 10:02:02
 */

'use strict';

import is_promise from 'is-promise';
import { contains } from 'ramda';

export const isPromise = is_promise;
export const hasWindow = typeof window !== 'undefined';
export const isBrowser = process.env.APP_ENV === 'browser';

/* istanbul ignore next */
export const isNodeInTree = (parent, child) => {
    if (parent == child) return true;
    let node = child.parentNode;
    while (node != null) {
        if (node == parent) return true;
        node = node.parentNode;
    }
    return false;
};

export const isEnv = (...environmentStrings) =>
    contains(process.env.NODE_ENV)(environmentStrings);
