/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-09-01 17:00:53
 */

'use strict';

// This file ensures JSDOM is loaded before React is included
import 'helpers/cssModulesHook';
import 'helpers/globalJSDOM';
import nodeHookFilename from 'node-hook-filename';

process.env.DEBUG = false;

nodeHookFilename([ '.jpeg' ]);
