/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:38:27
 */

'use strict';

import { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/home';

const log = debug('home');

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
        this.props.fetchArticles()
            .then(({ data }) => log(data));
    }

    render() {
        const { data } = this.props;

        return (
            <div className='home'>
                <header className='intro'>
                    <div className='container'>
                        {data.map(item => (
                            <article key={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.content}</p>
                            </article>
                        ))}
                    </div>
                    <div className='shooting-star'>
                        <img src={require('../../../assets/shooting-star.svg')} alt=''/>
                    </div>
                </header>
            </div>
        );
    }
}
