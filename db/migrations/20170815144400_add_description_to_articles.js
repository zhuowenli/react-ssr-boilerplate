/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-08-15 14:44:28
 */

'use strict';

module.exports = {
    up(queryInterface, DataTypes) {
        return queryInterface.addColumn(
            'articles',
            'description',
            {
                type: DataTypes.STRING,
                allowNull: true,
                comment: '文章简介',
            }
        );
    },

    down(queryInterface) {
        return queryInterface.removeColumn('articles', 'description');
    },
};
