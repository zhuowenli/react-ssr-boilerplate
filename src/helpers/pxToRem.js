/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-14 15:50:25
 */

'use strict';

function endsWith(string, suffix) {
    return string.substr(-suffix.length) === suffix;
}

function stripUnit(value) {
    const unitlessValue = parseFloat(value);
    if (isNaN(unitlessValue)) return value;
    return unitlessValue;
}

export default function(pxval, base = '32px') {
    if (typeof pxval === 'string') {
        if(!endsWith(pxval, 'px')) {
            throw new Error(
                `Expected a string ending in "px" or a number passed as the first argument to ${to}(), got "${pxval}" instead.`,
            );
        }
        pxval = stripUnit(pxval);
    }
    if (typeof base === 'string') {
        if (!endsWith(base, 'px')) {
            throw new Error(
                `Expected a string ending in "px" or a number passed as the second argument to ${to}(), got "${base}" instead.`,
            );
        }
        base = stripUnit(base);
    }

    return `${pxval / base}rem`;
}
