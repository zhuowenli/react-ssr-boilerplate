/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 16:31:32
 */

'use strict';

import io from 'socket.io-client';

const socket = io({
    autoConnect: false,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 10000,
});

export default socket;
