/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 15:31:09
 */

'use strict';

import { Component } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { addMessage } from 'app/actions/flash.actions';

@connect(null, { replace, addMessage })
export default class PrivateRoute extends Component {
    componentWillMount() {
        this.props.addMessage('You may not view the private route!!', 'error');
        this.props.replace('/');
    }

    render() {
        return (
            <h1>Private</h1>
        );
    }
}
