/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-09-01 16:27:55
 */

'use strict';

const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../../README.md'), 'utf8');

module.exports = {
    up(queryInterface) {
        return queryInterface.bulkInsert('articles',[ {
            content,
            title: 'Readme',
            user_id: 1,
            description: '🚀 React SSR Boilerplate — Node.js + MySQL + Koa2.x + React + React Router4.x + Redux + SSR',
            release_at: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
        } ]);
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('articles', null, {});
    },
};
