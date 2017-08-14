/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:17:25
 */

'use strict';

import ReactDOM from 'react-dom';
import socket from 'app/composition/socket';
import { store, Main } from './main';

debug.enable(process.env.DEBUG);

const log = debug('entry');

log(`Running in [${process.env.NODE_ENV}] environment`);
log('Environment', process.env);

socket.on('connect', () => {
    log('Client connected to socket');

    store.dispatch({
        type: 'NEW_SOCKET_SESSION',
        payload: { data: Math.random() },
        meta: { broadcast: true, next: false },
    });
});

socket.open();

ReactDOM.render(
    Main, document.getElementById('app-container')
);
