/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 14:54:00
 */

'use strict';

import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { outClientViaSocketIO } from 'redux-via-socket.io';
import { pipe, tap } from 'ramda';
import { hasWindow } from 'app/utils';

const log = debug('DISPATCH:');

export const middleware = [
    thunkMiddleware,
    promiseMiddleware(),
];

/* istanbul ignore else  */
if (hasWindow) {
    middleware.push(
        outClientViaSocketIO(require('./socket')),
        createLogger({
            predicate: () => debug.enabled(),
            collapsed: true,
        })
    );
} else {
    middleware.unshift(
        () => next => pipe(tap(log), next)
    );
}
