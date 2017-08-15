/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-09 10:06:09
 */

'use strict';

import { ROOT, STYLES } from '../../config/paths';
import cssModulesHook from 'css-modules-require-hook';
import sass from 'node-sass';
import loaderUtils from 'loader-utils';
import autoprefixer from 'autoprefixer';

const log = debug('css-hook');

log('Building CSS-modules for all .sass and .scss and .css files');

cssModulesHook({
    extensions: [ '.scss', '.sass' , '.css' ],
    prepend: [ autoprefixer({ browsers: [ 'last 2 versions' ] }) ],
    generateScopedName(exportedName, exportedPath) {
        const path = exportedPath
            .replace(`${ROOT}/`, '')
            .replace(/^\//, '')
            .replace(/\.s?a?c?ss$/, '')
            .replace(/\/|\.|@/g, '-');
        return `${path}-${exportedName}`;
    },
    preprocessCss(css, filename) {
        return sass.renderSync({
            includePaths: [ `${ROOT}/node_modules`, STYLES ],
            data: css,
            file: filename,
            importer(url) {
                return { file: loaderUtils.urlToRequest(url) };
            },
        }).css;
    },
});
