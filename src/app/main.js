/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:17:03
 */

'use strict';

import { createBrowserHistory, createMemoryHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { inClientViaSocketIO } from 'redux-via-socket.io';

import { middleware } from './composition/middleware';
import { makeCreateStore } from './composition/makeCreateStore';
import socket from './composition/socket';

import { isBrowser } from './utils';
import rootReducer from './reducers';
import { createAppInstance } from './';

// client store and history
// can go out of sync with server store and server history...
// avoid using directly!
export const history = isBrowser ? createBrowserHistory() : createMemoryHistory();

export const store = makeCreateStore(
    [ ...middleware, routerMiddleware(history) ]
)(rootReducer, isBrowser ? window.__INITIAL_STATE__ : {});

inClientViaSocketIO(socket, store.dispatch);

export const Main = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {createAppInstance()}
        </ConnectedRouter>
    </Provider>
);

/* istanbul ignore if  */
if (module.hot) {
    /* istanbul ignore next */
    module.hot.accept('app/reducers', () => {
        store.replaceReducer(require('app/reducers'));
    });
}
