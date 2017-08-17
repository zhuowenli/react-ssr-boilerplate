/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 16:21:55
 */

'use strict';

import { filter, identity } from 'ramda';
import request from './request';

export { isNodeInTree, isPromise, hasWindow, isBrowser, isEnv } from './predicates';
export const compact = filter(identity);
export const fetch = request;

