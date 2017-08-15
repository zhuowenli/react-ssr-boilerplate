/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:42:21
 */

'use strict';

import { STATUS_CODES } from 'http';
import router from 'koa-router';
import koaBody from 'koa-body';
import { fetchArticles } from './articles';

const parseBody = koaBody();
const apiRouter = router({ prefix: '/api' });

apiRouter
    .all('ping', '/ping', parseBody, (ctx) => {
        ctx.response.body = { pong: ctx.request.body };
    })
    .get('bar', '/bar', (ctx) => {
        ctx.response.body = { bar: [ 'bruce', 'willis', 'wet', 'himself' ] };
    })
    .get('article', '/articles', async ctx => {
        ctx.response.body = await fetchArticles(ctx.query);
    })
    .all('not-found', '*', (ctx) => {
        ctx.response.status = 404;
        ctx.response.body = { error: STATUS_CODES[status] };
    });

export default apiRouter;
