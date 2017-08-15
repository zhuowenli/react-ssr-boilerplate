/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-09 10:02:06
 */

'use strict';

import rimraf from 'rimraf';
import { ASSET_FILE } from '../../config/paths';
import { isEnv } from '../app/utils/predicates';

const log = debug('clean-assets');

if (isEnv('development'))  {
    rimraf(ASSET_FILE, err => {
        if (err) {
            log(err);
            process.exit(1);
        }
    });
}
