/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 16:37:55
 */

'use strict';

import '../config/environment';
import './helpers/cssModulesHook';
import './helpers/cleanAssetJson';
import { argv } from 'yargs';
import http from 'http';
import serve from 'koa-static';
import open from 'open';
import hotReload from './helpers/hotReload';
import { isEnv } from './app/utils';
import { isomorphicTools, isomorphicPlugin } from './server/isomorphicTools';
import { ROOT, SERVER, SOCKETS, STATIC } from '../config/paths';
import models from './server/models';
import app from './server-instance';

const log = debug('app');

if (isEnv('development')) {
    isomorphicPlugin.development();
    hotReload(app);
} else {
    app.use(serve(STATIC));
}

if (process.argv[2] && process.argv[2][0] == 'c') {

    const repl = require('repl');
    const crypto = require('crypto');

    global.models = models;
    global.crypto = crypto;

    repl.start({
        prompt: '> ',
        useGlobal: true,
    }).on('exit', () => { process.exit(); });

} else {
    isomorphicTools.server(ROOT, () => {
        if (isEnv('development')) {
            app.use(async(ctx, next) => {
                const { rootRouter, setRoutes } = require(`${SERVER}/router`);
                setRoutes(isomorphicTools.assets());
                await rootRouter.routes()(ctx, next);
            });
        } else {
            const { rootRouter, setRoutes } = require(`${SERVER}/router`);
            setRoutes(isomorphicTools.assets());
            app.use(rootRouter.routes());
        }
    });

    const server = http.createServer(app.callback());
    global.socketServer = require(SOCKETS)(server);

    server.listen(process.env.PORT, () => {
        const URI = `http://localhost:${process.env.PORT}`;
        log('Serving', URI);
        if (argv.open || argv.o) open(URI);
    });
}

export default app;
