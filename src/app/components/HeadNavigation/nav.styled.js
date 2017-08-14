/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-14 18:04:48
 */

'use strict';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import rem from 'helpers/pxToRem';

const Link = ({ ...props }) => (
    <NavLink {...props} activeStyle={{ color: '#055605' }}>
        {props.children}
    </NavLink>
);

export const StyledLink = styled(Link)`
    color: #228b22;
    margin-right: ${rem(10)};
    text-decoration: none;

    &:last-of-type {
        margin-right: 0;
    }
`;
