/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 14:50:51
 */

'use strict';

import { routerMiddleware } from 'react-router-redux';
import { makeCreateStore } from '../../app/composition/makeCreateStore';
import { middleware } from '../../app/composition/middleware';
import rootReducer from '../../app/reducers';
import createStaticHistory from '../utils/createStaticHistory';
import { fetchArticles } from '../api/articles';

const log = debug('set-store');

export default async function setStore(ctx, next) {
    let preloadedReducer = {};

    if (/^\/bar/.test(ctx.request.url)) {
        preloadedReducer.bar = { data: [ 'bruce', 'willis', 'wet', 'himself' ] };
    }

    if (ctx.request.url === '/') {
        preloadedReducer.homeReducer = await fetchArticles(ctx.query);
    }

    log('setting server store');

    ctx.history = createStaticHistory(ctx.request.url);

    ctx.store = makeCreateStore([
        ...middleware,
        routerMiddleware(ctx.history),
    ])(rootReducer, preloadedReducer);

    await next();
}
