/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:38:27
 */

'use strict';

import { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/home';
import {
    Header,
    Inner,
} from './index.styled';

const log = debug('home');

@connect(({ homeReducer }) => ({
    data: homeReducer.data,
}), action)

export default class Home extends Component {
    static defaultProps = {
        data: {},
    };

    componentDidMount() {
        this.props.fetchArticles()
            .then(({ data }) => log(data));
    }

    render() {
        const { data } = this.props;

        return (
            <div className='home'>
                <Header>
                    <Inner>
                        <h1>React</h1>
                    </Inner>
                </Header>
            </div>
        );
    }
}
