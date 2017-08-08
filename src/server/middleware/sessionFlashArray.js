/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 16:37:09
 */

'use strict';


export default function(key='flash') {
    return async function sessionFlashArray(ctx, next) {
        ctx.flash = ctx.session[key] || [];
        ctx.nextFlash = [];
        ctx.addFlash = (message, type) => {
            ctx.nextFlash.push({ message, type });
        };
        await next();
        if (ctx.status == 302 && ctx.session) {
            ctx.session[key] = ctx.nextFlash;
        } else {
            delete ctx.session[key];
        }
    };
}
