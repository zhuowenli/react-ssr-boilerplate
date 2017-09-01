/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-17 14:38:21
 */

'use strict';

import styled from 'styled-components';
import rem from '../../../helpers/pxToRem';

export const Header = styled.header`
    padding-top: ${rem('40px')};
    padding-bottom: ${rem('40px')};
    font-family: 'Architects Daughter', 'Helvetica Neue', Helvetica, Arial, serif;
    background: #2e7bcf url(../images/header-bg.jpg) 0 0 repeat-x;
    border-bottom: solid 1px #275da1;

    h1 {
        width: ${rem('540px')};
        margin-top: 0;
        margin-bottom: 0.2em;
        font-size: ${rem('72px')};
        font-weight: normal;
        line-height: 1;
        color: #fff;
        letter-spacing: -${rem('1px')};
    }

    h2 {
        width: ${rem('540px')};
        margin-top: 0;
        margin-bottom: 0;
        font-size: ${rem('26px')};
        font-weight: normal;
        line-height: 1.3;
        color: #9ddcff;
        letter-spacing: 0;
    }
`;

export const Inner = styled.div`
    position: relative;
    width: ${rem('940px')};
    margin: 0 auto;
`;
