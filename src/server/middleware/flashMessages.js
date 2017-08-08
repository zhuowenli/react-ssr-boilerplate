/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 14:08:51
 */

'use strict';

import * as flashSelectors from 'app/selectors/flash.selectors';
import { addMessage } from 'app/actions/flash.actions';

export default async function flashMessages(ctx, next) {
    ctx.flash.map(({ message, type }) =>
        ctx.store.dispatch(addMessage(message, type))
    );
    await next();
    if (ctx.response.status === 302) {
        transferFlashMessages(ctx);
    }
}

function transferFlashMessages(ctx) {
    const nextFlashMessage = flashSelectors.getNextMessage(
        ctx.store.getState()
    );
    if (nextFlashMessage) {
        ctx.addFlash(nextFlashMessage.message, nextFlashMessage.type);
    }
}
