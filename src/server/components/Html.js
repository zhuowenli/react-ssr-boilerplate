/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-08 11:41:52
 */

'use strict';

import { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

export default class Html extends Component {
    static propTypes = {
        content: PropTypes.array,
        headScripts: PropTypes.array,
        stringScripts: PropTypes.array,
        bodyScripts: PropTypes.array,
        headStyles: PropTypes.array,
        otherLinks: PropTypes.array,
    };

    static defaultProps = {
        content: [],
        headScripts: [],
        stringScripts: [],
        bodyScripts: [],
        headStyles: [],
        bodyStyles: [],
        otherLinks: [],
    };

    render() {
        const {
            content,
            otherLinks,
            stringScripts,
            headStyles,
            headScripts,
            bodyScripts,
            bodyStyles,
        } = this.props;
        const helmet = Helmet.renderStatic();

        return (
            <html {...helmet.htmlAttributes.toComponent()}>
                <head>
                    {helmet.title.toComponent()}
                    {helmet.meta.toComponent()}
                    {helmet.link.toComponent()}
                    <script dangerouslySetInnerHTML={{
                        __html: `!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}({2:function(e,t,n){"use strict";function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=window.document,r=navigator.userAgent,o=r.match(/Android[\\S\\s]+AppleWebkit\\/(\\d{3})/i),a=r.match(/U3\\/((\\d+|\\.){5,})/i),u=a&&parseInt(a[1].split(".").join(""),10)>=80,c=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),l=window.devicePixelRatio||1;c||o&&o[1]>534||u||(l=1);var d=1/l,p=i.querySelector('meta[name="viewport"]');p||(p=i.createElement("meta"),p.setAttribute("name","viewport"),i.head.appendChild(p)),p.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+d+",maximum-scale="+d+",minimum-scale="+d),i.documentElement.style.fontSize=e/n*l*t+"px"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,window.flex=i}});window.flex(32, 1, 1);`,
                    }} />
                    {otherLinks.map((props, i) => (
                        <link key={i} {...props} />
                    ))}
                    {headStyles.map((style, i) => (
                        <link
                            key={i}
                            href={style}
                            type='text/css' rel='stylesheet' media='screen'
                        />
                    ))}
                    {stringScripts.map((script, i) => (
                        <script key={i} dangerouslySetInnerHTML={{
                            __html: script,
                        }} />
                    ))}
                    {headScripts.map((script, i) => (
                        <script src={script} key={i} />
                    ))}
                </head>
                <body {...helmet.bodyAttributes.toComponent()}>
                    {content.map((props, i) => (
                        <div key={i} {...props} />
                    ))}
                    {bodyScripts.map((script, i) => (
                        <script key={i} src={script} />
                    ))}
                    {bodyStyles.map((style, i) => (
                        <script key={i} dangerouslySetInnerHTML={{
                            __html: `loadCSS('${style}')`,
                        }} />
                    ))}
                    {bodyStyles.map((style, i) => (
                        <noscript key={i} dangerouslySetInnerHTML={{
                            __html: `<link href="${style}" rel="stylesheet" />`,
                        }} />
                    ))}
                </body>
            </html>
        );
    }
}
