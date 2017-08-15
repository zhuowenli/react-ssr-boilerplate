/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 14:29:46
 */

'use strict';

import { ASSET_FILE } from './paths';

export default {
    webpack_assets_file_path: ASSET_FILE,
    assets: {
        images: {
            extensions: [
                'jpeg', 'jpg', 'png', 'gif', 'svg',
            ],
        },
        fonts: {
            extensions: [
                'woff', 'ttf', 'woff2', 'eot',
            ],
        },
    },

};
