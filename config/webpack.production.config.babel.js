/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-07 16:54:41
 */

'use strict';

import './environment';
import 'helpers/cleanAssetJson';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpackConfig, { babelLoaderConfig } from './webpack.base.config';
import { APP, STYLES } from './paths';

export default {
    ...webpackConfig,
    devtool: false,
    plugins: [
        ...webpackConfig.plugins,
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false,
            },
        }),
    ],
    module: {
        rules: [ ...webpackConfig.module.rules, {
            test: /module\.(sa|sc|c)css$/,
            include: [ APP, STYLES ],
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: 'css-loader',
                        options: {
                            modules: true, localIdentName: '[path][name]-[local]',
                        } },
                    'postcss-loader',
                    { loader: 'sass-loader', options: { outputStyle: 'compressed' } },
                ],
            }),
        }, {
            test: /\.(sa|sc|c)ss$/,
            include: [ APP, STYLES ],
            exclude: /module\.(sa|sc|c)ss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'postcss-loader',
                    { loader: 'sass-loader', options: { outputStyle: 'compressed' } },
                ],
            }),
        }, {
            ...babelLoaderConfig,
        } ],
    },
};
