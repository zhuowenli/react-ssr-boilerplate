/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-09-01 14:53:56
 */

'use strict';

import models from '../server/models';

models.Article.create({
    title: 'Readme',
    content: '这是一条通过console插入的数据',
    userId: 1,
    description: '🚀 React SSR Boilerplate — Node.js + MySQL + Koa2.x + React + React Router4.x + Redux + SSR',
});
