/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:21:28
 */

'use strict';

import { Component } from 'react';
import DocumentMeta from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HeadNavigation from 'app/components/HeadNavigation/nav';
import Home from '../views/home';
import Bar from '../views/bar';
import Oops from '../views/oops';
import Private from '../views/private';
import NotFound from '../views/oops/404';
import { Main, Content } from './App.styled';

const log = debug('App.js');

export default class App extends Component {
    render() {
        log('render');

        return (
            <Main>
                <DocumentMeta
                    defaultTitle='React SSR Boilerplate'
                    titleTemplate='%s | React SSR Boilerplate'>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width,initial-scale=1.0' />
                    <meta name='description' content='React SSR Boilerplate' />
                    <meta name='keywords' content='react,redux,react-router,koa,babel,es7,ssr,webpack' />
                </DocumentMeta>
                <HeadNavigation />
                <h1>React SSR</h1>
                <Content>
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/bar' component={Bar}></Route>
                        <Route path='/oops' component={Oops}></Route>
                        <Route path='/private' component={Private}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </Content>
            </Main>
        );
    }
}
