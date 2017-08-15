/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 15:46:52
 */

'use strict';

import router from 'koa-router';
import compose from 'koa-compose';
import setStore from './middleware/setStore';
import renderApp from './middleware/renderApp';
import apiRouter from './api';

const log = debug('server-router');
export const rootRouter = router();

export function setRoutes(assets) {
    log('rebuilding route middleware');

    rootRouter.stack.length = 0;

    const renderReactApp = compose([
        setStore,
        renderApp(assets),
    ]);

    rootRouter
        .use(apiRouter.routes())
        .get('error', '/oops', renderReactApp)
        .get('react', '/(.*)', renderReactApp);
}
