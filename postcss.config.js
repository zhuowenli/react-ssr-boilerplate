/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:40:35
 */

'use strict';

module.exports = {
    'plugins': [
        require('autoprefixer')({
            'browsers': [ 'last 2 versions' ],
        }),
        require('cssnano'),
        require('postcss-pxtorem')({
            rootValue: 32,
            selectorBlackList: [ 'html' ],
            minPixelValue: 1,
            propWhiteList: [ '*' ],
        }),
    ],
};
