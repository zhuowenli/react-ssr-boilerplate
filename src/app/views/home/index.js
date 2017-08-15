/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:38:27
 */

'use strict';

import { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/home';

@connect(({ homeReducer }) => ({
    data: homeReducer.data,
    metadata: homeReducer.metadata,
}), action)

export default class Home extends Component {
    static defaultProps = {
        data: [],
        metadata: [],
    };

    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        const { data } = this.props;

        return (
            <section className='HomeRoute'>
                {
                    data.map((item, i) => (
                        <article key={i}>
                            <h2>{item.title}</h2>
                            <p className='description'>{item.description}</p>
                            <p className='content'>{item.content}</p>
                        </article>
                    ))
                }
            </section>
        );
    }
}
