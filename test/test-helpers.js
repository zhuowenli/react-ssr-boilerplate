/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-09-01 17:00:50
 */

'use strict';

import Koa from 'koa';
import lodash from 'lodash/index';
import { makeCreateStore } from 'app/composition/makeCreateStore';
import createStaticHistory from 'server/utils/createStaticHistory';
import rootReducer from 'app/reducers';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import chaiJestSnapshot from 'chai-jest-snapshot';

const helpers = {
    setupSnapshots(filename) {
        beforeEach(function() {
            chaiJestSnapshot.setFilename(filename + '.snap');
            chaiJestSnapshot.setTestName(this.currentTest.fullTitle());
        });
    },
    cloneApp(app) {
        const clone = new Koa();
        clone.keys = lodash.clone(app.keys);
        clone.middleware = lodash.clone(app.middleware);
        return clone;
    },
    createStore(initialState={}, middleware=[]) {
        return makeCreateStore([
            thunkMiddleware,
            promiseMiddleware(),
            ...middleware,
        ])(rootReducer, initialState);
    },
    createHistory(path) {
        return createStaticHistory(path);
    },
    cleanup(wrapper) {
        if (wrapper) {
            wrapper.unmount();
        }
        sandbox.restore();
    },
};

export default helpers;
