/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 15:34:30
 */

'use strict';

import { Component } from 'react';
import { connect } from 'react-redux';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { removeMessage } from 'app/actions/flash.actions';
import Bem from 'react-bem-helper';
import * as flashSelectors from 'app/selectors/flash.selectors';
import Msg from './Msg';

@connect(state => ({
    messages: flashSelectors.getMessages(state),
}), { removeMessage })

export default class FlashMessages extends Component {
    static propTypes = {
        messages: PropTypes.array,
        removeMessage: PropTypes.func,
    };

    static defaultProps = {
        messages: [],
        removeMessage: noop,
    };

    static bem = new Bem('FlashMessages');

    clickMessage(msg) {
        this.props.removeMessage(msg.id);
    }

    render() {
        const { messages } = this.props;
        return (
            <div {...FlashMessages.bem()}>
                {messages.map(msg => (
                    <Msg key={msg.id}
                        msg={msg}
                        onClick={() => this.clickMessage(msg)}
                        {...FlashMessages.bem('Msg')}
                    />
                ))}
            </div>
        );
    }
}
