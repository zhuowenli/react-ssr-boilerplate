/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 16:37:20
 */

'use strict';

import IsomorphicTools from 'webpack-isomorphic-tools';
import IsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
import isomorphicConfig from 'config/isomorphic.config';

export const isomorphicTools = new IsomorphicTools(isomorphicConfig);
export const isomorphicPlugin = new IsomorphicToolsPlugin(isomorphicConfig);
