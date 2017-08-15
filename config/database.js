/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 14:18:24
 */

'use strict';

require('babel-polyfill');
require('babel-register');
require('./environment');

module.exports = {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 5,
        idle: 30000,
    },
};
