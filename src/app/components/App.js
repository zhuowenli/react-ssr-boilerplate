/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:21:28
 */

'use strict';

import DocumentMeta from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HeadNavigation from 'app/components/HeadNavigation/HeadNavigation';
import FlashMessages from '../components/@FlashMessages/FlashMessages';
import Home from '../views/home';
import Bar from '../views/bar';
import Oops from '../views/oops';
import Private from '../views/private';
import NotFound from '../views/oops/404';

const Main = styled.div`
    color: #444;
    font-size: 17px;
`;

const Content = styled.main`
    padding: 5px;
`;

const log = debug('App.js');

export default class App extends React.Component {
    render() {
        log('render');

        return (
            <Main>
                <DocumentMeta
                    defaultTitle='Breko Hub'
                    titleTemplate='%s | Breko Hub'>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width,initial-scale=1.0' />
                    <meta name='description' content='Breko Hub, a minimal boilerplate for building universal react applications' />
                    <meta name='keywords' content='react,redux,react-router,koa,universal,babel,es7,hmr,webpack' />
                </DocumentMeta>
                <HeadNavigation />
                <FlashMessages />
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
