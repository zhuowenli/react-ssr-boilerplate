/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 14:18:24
 */

'use strict';

module.exports = {
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || '123',
    database: process.env.DATABASE_NAME || 'server',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 5,
        idle: 30000,
    },
};
