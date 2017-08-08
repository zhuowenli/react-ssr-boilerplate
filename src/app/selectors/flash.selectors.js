/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 16:30:28
 */

'use strict';

import { createSelector } from 'reselect';
import { head } from 'ramda';
import { get } from 'app/utils';

export const getMessages = get('flash.messages', []);

export const getNextMessage = createSelector([ getMessages ], head);
