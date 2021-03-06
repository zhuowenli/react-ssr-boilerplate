/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:20:33
 */

'use strict';

import { Component } from 'react';
import { StyledLink } from './nav.styled';

export default class HeadNavigation extends Component {
    render() {
        return (
            <nav {...this.props}>
                <StyledLink exact to='/'>Home</StyledLink>
                <StyledLink to='/bar'>Bar</StyledLink>
                <StyledLink to='/private'>Private</StyledLink>
            </nav>
        );
    }
}
