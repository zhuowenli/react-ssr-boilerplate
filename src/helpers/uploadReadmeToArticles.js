/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-09-01 14:53:56
 */

'use strict';

import fs from 'fs';
import path from 'path';
import models from '../server/models';

const content = fs.readFileSync(path.join(__dirname, '../../README.md'), 'utf8');

models.Article.create({
    content,
    title: 'Readme',
    user_id: 1,
    description: '🚀 React SSR Boilerplate — Node.js + MySQL + Koa2.x + React + React Router4.x + Redux + SSR',
    release_at: '2017-09-01 12:00:00',
});
