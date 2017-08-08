/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:56:05
 */

'use strict';

import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import StaticRouter from '../components/StaticRouter';
import Html from '../components/Html';
import { compact } from '../../app/utils';
import * as app from '../../app';

const log = debug('renderApp');

const makeBody = (store, assets, html) =>
    `<!doctype html>${
        ReactDOMServer.renderToStaticMarkup(
            <Html
                headScripts={compact([ assets.javascript.head ])}
                headStyles={compact([ assets.styles.body, assets.styles.head ])}
                bodyScripts={compact([ assets.javascript.body ])}
                bodyStyles={[]}
                stringScripts={[
                    `window.__INITIAL_STATE__ = ${
                        JSON.stringify(store.getState(), null, 2)
                    };`,
                ]}
                content={[
                    { id: 'app-container', dangerouslySetInnerHTML: { __html: html } },
                ]}
            />
        )
    }`;

export default function(assets) {
    return function renderApp(ctx) {
        try {
            const html = ReactDOMServer.renderToString(
                <Provider store={ctx.store}>
                    <StaticRouter history={ctx.history}>
                        {app.createAppInstance()}
                    </StaticRouter>
                </Provider>
            );

            log({ context: ctx.history.context });

            if (ctx.history.context.url) {
                ctx.status = 302;
                ctx.redirect(ctx.history.context.url);
            } else {
                log('setting html');
                ctx.response.body = makeBody(ctx.store, assets, html);
            }
        } catch (error) {
            log(error);
            if (error instanceof Error) throw error;
        }
    };
}
