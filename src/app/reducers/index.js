/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 15:41:43
 */

'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { flashReducers as flash } from './flash.reducers';
import { barReducers as bar } from './bar.reducers';

export default combineReducers({
    flash,
    bar,
    routing: routerReducer,
});
