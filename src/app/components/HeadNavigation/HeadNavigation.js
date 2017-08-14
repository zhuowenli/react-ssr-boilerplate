/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:20:33
 */

'use strict';

import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeadNavigation.module.scss';

// Putting this inside a connect will break activeClassName
// unless you also subscribe to changes to routing state or context
export default class HeadNavigation extends Component {
    render() {
        const { ...props } = this.props;
        return (
            <nav className={styles.nav} {...props}>
                <NavLink exact activeClassName={styles.active} to='/'>Home</NavLink>
                <NavLink activeClassName={styles.active} to='/bar'>Bar</NavLink>
                <NavLink activeClassName={styles.active} to='/private'>Private</NavLink>
            </nav>
        );
    }
}
