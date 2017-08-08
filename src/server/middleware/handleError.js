/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 14:08:44
 */

'use strict';

import { set } from 'lodash';

const log = debug('handle-error');

export default async function handleError(ctx, next) {
    try {
        await next();
        set(ctx, 'session.state', null);
    } catch (err) {
        log(err);
        ctx.redirect('/oops');
    }
}
