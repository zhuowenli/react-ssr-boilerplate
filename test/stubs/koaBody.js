/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-09-01 17:01:01
 */

'use strict';

export const generator = function *(next) {
    yield next;
};

export default function() {
    return generator;
}
